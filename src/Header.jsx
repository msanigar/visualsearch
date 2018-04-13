import React from 'react'

const Header = ({name}) => {

  function splitChars() {
    const chars = name.split("")
    const mappedChars = chars.map( (char, i) => {
      return (
        <span key={i}>{char}</span>
      )
    })
    return mappedChars
  }

  return (
    <header className="header">
        <span className="text color-text-flow">
          <h1>
            <span role="img" aria-label="unicorn" aria-labelledby="the-phile">🦄</span> 
            {splitChars()} 
            <span role="img" aria-label="unicorn" aria-labelledby="the-phile">🦄</span>
          </h1>
        </span>
    </header>
  )
};

export default Header;