function Search(props) {
    return (
        <input onCharge = { props.handleSearch}
        type = "text" />
    );
}

export default Search;