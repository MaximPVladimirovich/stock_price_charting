
const Search = ({ searchStringUpdated }: any) => {
    const onChangeInput = (event: any) => searchStringUpdated(event.target.value);

    return (
        <div className="search">
            <input className="search-input" type="text" placeholder="Search by symbol" onChange={onChangeInput} />
        </div>
    )
}

export default Search;