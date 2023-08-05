import { useContext, useState } from 'react'
import { SearchContext } from '../context/SearchContext'

function SearchBar(props) {
    const [term, setTerm] = useState('')
    // const {term, handleSearch} = useContext(SearchContext)

    return (
        <form>
            <input onClick={(e) => setTerm(e.target.value)} type="text" placeholder="Search Here" />
            <button onClick={(e) => props.handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}

export default SearchBar
    