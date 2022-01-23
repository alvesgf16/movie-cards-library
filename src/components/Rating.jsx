import React from 'react';
import PropTypes from 'prop-types';

export default function Rating({ rating }) {
  return (
    <div className="rating rounded-full">{ rating }</div>
  );
}

Rating.propTypes = { rating: PropTypes.string };
Rating.defaultProps = { rating: '' };
