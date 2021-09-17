import React from 'react';
import styled from 'styled-components';

const PageUl = styled.ul`
  width: 100%;
  float:left;
  list-style: none;
  text-align: center;
  color: #252525;
  padding: 1px;
`

const PageLi = styled.li`
  display:inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 2px;
  margin: 0 1px;
  border-radius: 10px;
  width: 25px;
  border: 1px solid gray;
  &:hover{
    cursor:pointer;
    color:white;
    background-color:#263A6C;
  }
  &:focus::after{
    color:white;
    background-color:#263A6C;
  }
`

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after{
    border-radius:100%;
    color:white;
    background-color:#263A6C;
  }
`

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map(number => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => paginate(number)} className="page-link">
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
};

export default Pagination;