import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ name, email, id }) => {
  return (
    <article className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
      <img 
        alt={`Robot ${name}`} 
        src={`https://robohash.org/${id}?size=200x200`}
        width="200"
        height="200"
        loading="lazy"
      />
      <div className="pv2">
        <h2 className="f5 f4-ns mv2">{name}</h2>
        <p className="f6 f5-ns mv1">{email}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card