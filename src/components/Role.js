import React from 'react'

const Role = (props) => {
    const tags = props.tags.map((tag, key) =>
        <span className="tag" key={key}>{tag}</span>
    );

    return (
        <div className="role">
            <h2>
                {props.name}
                <div className="tags">{tags}</div>
            </h2>
            {props.children}
        </div>
    )
}

export default Role
