import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {SetSearchTerm}=useGlobalContext()
  const searchValue=React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])
  function handleSubmit(e) {
    e.preventDefault()
  }
  function searchCocktail() {
    SetSearchTerm(searchValue.current.value)
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Search Your Cocktail</label>
        <input type="text" id="name" ref={searchValue}
        onChange={searchCocktail}
        ></input>
      </div>
      </form>
    </section>
  )
}

export default SearchForm