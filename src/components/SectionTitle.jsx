import React from 'react'

export default function SectionTitle(props) {
    return (
        <div>
            <h2
                style={{
                    fontSize: 300 + '%'
                }}
            >
                {props.title1} <span style={{ color: 'rgb(149, 64, 8)' }}>{props.title2}</span>
            </h2>
        </div>
    )
}
