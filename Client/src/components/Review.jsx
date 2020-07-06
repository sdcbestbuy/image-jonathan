import React from 'react';
import Rating from '@material-ui/lab/Rating';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
const Review = ({ rating, count }) => (
  <ul className="review">
      <li className="liReviews">
          <div className="liDiv">
              <i className="stars">
                  <Rating name="half-rating-read"
                          value={rating}
                          precision={0.1}
                          size="small"
                          emptyIcon={<GradeOutlinedIcon fontSize="inherit" />}
                          readOnly
                  />
              </i>
              {console.log(count)}
          <span className="totalReviews">{rating + ' ' + '(' + count + ' reviews)'}</span>
          </div>
      </li>
  </ul>
)
export default Review;