import React from 'react'
import Logo from './logo.svg'

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
        <span role="img"><Logo height={70} width={150} fill='#FFF' /></span>
        <span className="text color-text-flow">
          <h1 className="stylephile__title"><span role="img" aria-label="unicorn">🦄</span> {splitChars()} <span role="img" aria-label="unicorn">🦄</span></h1>
        </span>
    </header>
  )
};

export default Header;