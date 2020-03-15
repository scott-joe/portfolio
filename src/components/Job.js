import React from 'react'

const Job = (props) => (
    <div className="employer">
        <div className="name">
            <img src={props.logo} />
            <h2 style={{ 'marginTop': '5px' }}>{props.employer}</h2>
            <h3 style={{ 'marginTop': '-2px' }}>{props.title}</h3>
        </div>
        <div className="details">
            <h4>{props.start} <span className="arrow">➜</span> {props.end}</h4>
            <h4>{props.city}</h4>
        </div>
        {props.children}
    </div>
)

export default Job
