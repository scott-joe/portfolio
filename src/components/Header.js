import React from 'react'

const Header = (props) => (
    <header id="header" className="alt">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </header>
)

export default Header
