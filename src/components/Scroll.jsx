import React from 'react'

const Scroll = ({ children }) => {
  return (
    <div className="overflow-y-scroll ba b--black h5">
      {children}
    </div>
  )
}

export default Scroll