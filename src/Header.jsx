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
      <div class="container">
        <span class="text color-text-flow">
          <h1>{splitChars()}</h1>
        </span>
      </div>
    </header>
  )
};

export default Header;