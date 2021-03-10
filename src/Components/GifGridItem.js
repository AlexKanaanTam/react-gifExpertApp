import React from 'react'

const GifGridItem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={url} />
            <p>{title}</p>

        </div>
    )
}

export default GifGridItem;