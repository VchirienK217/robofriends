import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const CardList = ({ robots }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {robots.map((robot) => (
        <Card 
          key={robot.id}  // Better to use a unique ID instead of array index
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  )
}

CardList.propTypes = {
  robots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardList