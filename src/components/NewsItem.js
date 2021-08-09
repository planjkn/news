import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  width: 100%;
  .thumbnail {
    margin-right: 1rem;
    a {
      display: inline-block;
      width: 160px;
      height: 100px;
      overflow: hidden;
      img {
        display: block;
        width: 160px;
        height: 100px;
        border-radius: 5px;
        object-fit: cover;
        -webkit-transform:scale(1);
        -moz-transform:scale(1);
        -ms-transform:scale(1); 
        -o-transform:scale(1);  
        transform:scale(1);
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        &:hover {
          -webkit-transform:scale(1.1);
          -moz-transform:scale(1.1);
          -ms-transform:scale(1.1);
          -o-transform:scale(1.1);
          transform:scale(1.1);
        }
      }
    }
  }
  .contents {
    width: 590px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    h3 {
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical;
      // &:hover {
      //   transform: rotate( 15deg );
      //   transition: all 0.3s ease-in-out;
      // }
      a {
        color: #000063;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      // white-space: nowrap;
      // overflow: hidden;
      // text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h3>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;

