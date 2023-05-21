import react from 'react';
const searchBar = () => {
    const [search, setSearch] = react.useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        if(search.trim()!=='')
        {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(search)}`;
            window.location.href = searchUrl;
        }
    };
    return (
        <form onSubmit={handleSearch} className='search'>
            <input type='text' value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder='Search'></input>
            <button type='submit'>Search</button>
        </form>
    );
};
export default searchBar;