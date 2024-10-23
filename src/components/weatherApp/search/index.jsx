

function Search ({search,setSearch,handleSubmit}) {
    return (
        <div className="search-container">
            <input 
            type="text"
            placeholder="enter some place"
            value={search}
            name="serach bar"            
            onChange={e => setSearch(e.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default Search