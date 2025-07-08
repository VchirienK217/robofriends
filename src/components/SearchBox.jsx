import React from 'react'

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-light-gray"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
        aria-label="Search robots" // Added for accessibility
      />
    </div>
  )
}

export default SearchBox