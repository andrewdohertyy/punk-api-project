import React from 'react'

const Main = (props) => {

    const { image, name, info, percentage} = props


  return (

    <div className='beer'>
        <img className='beer__image' src={image} alt="" />
        <h2 className='beer__title'><b>{name}</b></h2>
        <p className='beer__info'>{info}</p>
        <h4 className='beer__percentage'>ABV(%) {percentage}%</h4>
        <button className='beer__moreinfo'>More Info</button>
    </div>
  )
}

export default Main