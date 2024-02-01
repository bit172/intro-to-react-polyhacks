import './Searchbar.css'

const Searchbar = ({ searchInput, handleChange }) => {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search for a pokemon</label>
      <input
        id="search"
        type="text"
        value={searchInput}
        onChange={handleChange}
      />
    </div>
  )
}

export default Searchbar
