import React from 'react';
const Rating = ({ rating, count }) => {
  let averageRating = (Math.round(rating))
  if (averageRating === 1) {
    return (
      <span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
        <span>{ rating } ({ count } reviews)</span>
      </span>
    );
  } else if (averageRating === 2) {
    return (
      <span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
        <span>{ rating } ({ count } reviews)</span>
      </span>
    );
  } else if (averageRating === 3) {
    return (
      <span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star-o"></span>
        <span className="fa fa-star-o"></span>
        <span>{ rating } ({ count } reviews)</span>
      </span>
    );
  } else if (averageRating === 4) {
    return (
      <span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star-o"></span>
        <span>{ rating } ({ count } reviews)</span>
      </span>
    );
  } else if (averageRating === 5) {
    return (
      <span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span>{ rating } ({ count } reviews)</span>
      </span>
    );
  }
}
export default Rating;