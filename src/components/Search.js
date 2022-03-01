// import React, { useState, useContext, useRef } from 'react';
// import styled, { css } from 'styled-components';
// import { NavLink } from 'react-router-dom';
// import { TextField } from '@material-ui/core';
// import { MdSearch } from "react-icons/md";
// //import Button from '@material-ui/core/Button';
// //import {MDCTextField} from '@material/textfield';


// const Search = () => {
    
//     const [search, setSearch] = useState("");
//     // const inputRef = useRef();

//     const handleSearch = (e) => {
//       e.preventDefault();
//       //setSearch([inputRef.current.value]);
//       //setSearch([inputRef.current.value, ...search]); //배열값이 추가
//      console.log(search);
//     };
//     // const filterSearch = articles.filter(article => article.title.includes(search));

//     return(
//         <>
//             {/* <TextField label="Standard" />
//             <TextField label="Filled" variant="filled" /> */}
//             <form onSubmit={ e=>handleSearch(e) }>
//             <input type="search" className="myText" placeholder="검색" onChange={ e => setSearch(e.target.value)} />
//             <button type="submit" className="searchButton"><MdSearch className="searchIcon" /></button>
//             {/* <TextField className="myText" label="검색" variant="outlined" size="small" ref={inputRef} /> */}
//             </form>
//         </>
//     );
// };

// export default Search;