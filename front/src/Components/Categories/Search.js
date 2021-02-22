function Search(props) {
    return (
        <input onChange = { props.handleSearch}
        type = "text" />
    );
}

export default Search;