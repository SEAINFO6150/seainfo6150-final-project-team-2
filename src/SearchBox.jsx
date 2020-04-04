import React from 'react';

const SearchBox = ({ updateSearchWord, searchWord, searchItem, searchOnKeyPress }) => {
	return(
		<div className="search-box">
			<input className="input-box" placeholder="search" onChange={e => updateSearchWord(e.target.value)} 
			       value={searchWord} onKeyDown={ (e) => searchOnKeyPress(e,searchWord)}/>
			<a className="search-btn" href="#to-search" onClick={ () => searchItem(searchWord)}>
				<img src="search.png" alt="" className="searchImage"/>
			</a>
		</div>
	);
};

export default SearchBox;