import http from 'k6/http';
import { Counter } from "k6/metrics";
import { check, sleep } from 'k6';

var errorCounter = new Counter("my_error_counter");

export let options = {
    stages: [
      { duration: '1m', target: 1 }, // below normal load
      { duration: '1m', target: 10 },
      { duration: '1m', target: 50 }, // spike to 1400 users
      { duration: '1m', target: 80 }, // stay at 1400 for 3 minutes
      { duration: '2m', target: 100 },
      { duration: '2m', target: 40 },
      { duration: '10s', target: 5 }, // scale down. Recovery stage.
      { duration: '1m', target: 20 }, 
      { duration: '10s', target: 0 },
    ],
};

export default function() {
  let res = http.get('http://localhost:4200/display/');
  check(res, { 'status was 200': r => r.status == 200 });

  if(res.status === 500) {
    errorCounter.add(1)
  }
  sleep(1);
}