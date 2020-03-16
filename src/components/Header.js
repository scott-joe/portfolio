import React from 'react'

const headerStyles = { 'fontSize': '65px' };

const Header = (props) => (
    <header id="header" className="alt">
        <h1 style={(props.homepage === true ? headerStyles : {})}>{props.title}</h1>
        <p>{props.desc}</p>
    </header>
)

export default Header
