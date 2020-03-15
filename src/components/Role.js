import React from 'react'

const Role = (props) => {
    const tags = props.tags.map((tag, key) =>
        <span className="tag" key={key}>{tag}</span>
    );

    return (
        <div className="role">
            <h2>{props.name}</h2>
            {props.children}
            <div className="tags">{tags}</div>
        </div>
    )
}

export default Role
