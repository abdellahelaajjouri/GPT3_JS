import React from 'react'
import './feature.css'

function Feature({title , text}) {
  return (
    <div className='gpt3___features-container__feature'>
      <div className="gpt3___features-container__feature-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt3___features-container__feature-text">
        {text}

      </div>
    </div>
  ) 
}

export default Feature