import React, { useState,  useRef } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { MdSearch } from "react-icons/md";
//import Button from '@material-ui/core/Button';
//import {MDCTextField} from '@material/textfield';

const categories = [
    {
      name: 'all',
      text: '전체보기',
    },
    {
      name: 'business',
      text: '비즈니스',
    },
    {
      name: 'entertainment',
      text: '엔터테인먼트',
    },
    {
      name: 'health',
      text: '건강',
    },
    {
      name: 'science',
      text: '과학',
    },
    {
      name: 'sports',
      text: '스포츠',
    },
    {
      name: 'technology',
      text: '기술',
    },
  ];
  
  const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem 2rem;
    width: 990px;
    margin: 0 auto;
    border-left: 5px solid #e6e6e6;
    border-bottom: 5px solid #e6e6e6;

    .myText {
      margin-left: 150px;
    }
    .searchIcon {
      margin-left: 5px;
      font-size: 30px;
      cursor: pointer;
    }
    
    @media screen and (max-width: 768px) {
      width: 100%;
      overflow-x: auto;
    }
  `;
  
  // const Category = styled.div`
  //   font-size: 1.125rem;
  //   cursor: pointer;
  //   white-space: pre;
  //   text-decoration: none;
  //   color: inherit;
  //   padding-bottom: 0.25rem;
  
  //   &:hover {
  //     color: #000063;
  //     font-weight: 600;
  //   }
  
  //   ${(props) =>
  //     props.active &&
  //     css`
  //       font-weight: 600;
  //       border-bottom: 2px solid #000063;
  //       color: #000063;
  //     `}
  
  //   & + & {
  //     margin-left: 1rem;
  //   }
  // `
  const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
      color: #000063;
      font-weight: 600;
    }

    &.active {
      font-weight: 600;
      border-bottom: 3px solid #000063;
      color: #000063;
      &:hover {
        color: #000063;
      }
    }

    & + & {
      margin-left: 1rem;
    }
  `
  
  ;
  
  const Categories = ({ onSelect, category }) => {

    const [search, setSearch] = useState([]);
    const inputRef = useRef();
    const handleSearch = (e) => {
      e.preventDefault();
      setSearch([inputRef.current.value]);
    };

    return (
      <CategoriesBlock>
        {categories.map((c) => (
          // <Category
          //   key={c.name}
          //   active={category === c.name}
          //   onClick={() => onSelect(c.name)}
          // >
          //   {c.text}
          // </Category>
          <Category
          key={c.name}
          activeClassName="active"
          exact={c.name === 'all'}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
        ))}
        {/* <label class="mdc-text-field mdc-text-field--outlined">
          <span class="mdc-notched-outline">
            <span class="mdc-notched-outline__leading"></span>
            <span class="mdc-notched-outline__notch">
              <span class="mdc-floating-label" id="my-label-id">Your Name</span>
            </span>
            <span class="mdc-notched-outline__trailing"></span>
          </span>
          <input type="text" class="mdc-text-field__input" aria-labelledby="my-label-id"/>
        </label> */} 

        {/* <TextField label="Standard" />
        <TextField label="Filled" variant="filled" /> */}
        <TextField className="myText" label="검색" variant="outlined" size="small" ref={inputRef} />
        <MdSearch className="searchIcon" />
      </CategoriesBlock>
    );
  };
  
  export default Categories;