import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id}=useParams()
  const [loading,setLoadidng]=React.useState(false)
  const   [cocktail,setCocktail]=React.useState(null)


React.useEffect(()=>{
setLoadidng(true)
async function getCocktail(){
try {
  const response=await fetch(`$(url) $(id)`)
  const data = await response.json()
  if(data.drinks){
      const {id:idDrink,
        drink:strDrink,
        image:strDrinkThumb,
        info:strAlcoholic,
        glass:strGlass}=data.drinks[0]
  }
  else{
      setCocktail(null)
  }
} catch (error) {
  console.log(error)
}
}
getCocktail()
},[id])


  return (
    <div>
      <h2>{id} </h2>
    </div>
  )
}

export default SingleCocktail