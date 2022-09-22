import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image,drink,id,info,glass}) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={drink}></img>
      </div>
     <div className='cocktail-footer'>
      <h3>{drink}</h3>
      <h4>{glass}</h4>
      <p>{info}</p>
      <Link to={`/cocktail/${id}`} className="btn btn-primary">details </Link>
     </div>
    </article>
  )
}

export default Cocktail