function Search(props) {
    console.log('here is prop', props)
    return (

        <div className="search">
            <input className="search-bar" placeholder="Search mail" onChange={event => props.setSearch(event.target.value)} />
        </div>
    )
}

export default Search