import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';
import Pagination from './Pagination';


const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://google.com',
//   urlToImage: 'https://via.placeholder.com/160',
// };

// const NewsList = () => {
//   return (
//     <NewsListBlock>
//       <NewsItem article={sampleArticle} />
//       <NewsItem article={sampleArticle} />
//       <NewsItem article={sampleArticle} />
//       <NewsItem article={sampleArticle} />
//     </NewsListBlock>
//   );
// };

// const NewsList = () => {
//     const [articles, setArticles] = useState(null);
//     const [loading, setLoading] = useState(false);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         setLoading(true);
//         try {
//           const response = await axios.get(
//             'https://newsapi.org/v2/top-headlines?country=kr&apiKey=bd27922d5692413bad59ef0ca957c20b'
//           );
//           setArticles(response.data.articles);
//         } catch (e) {
//           console.log(e);
//         }
//         setLoading(false);
//       };
//       fetchData();
//     }, []);
  
//     if (loading) {
//       return <NewsListBlock>대기 중 ...</NewsListBlock>;
//     }
//     if (!articles) {
//       return null;
//     }
  
//     return (
//       <NewsListBlock>
//         {articles.map((article) => (
//           <NewsItem key={article.url} article={article} />
//         ))}
//       </NewsListBlock>
//     );
//   };

// const NewsList = ({ category }) => {
//   const [articles, setArticles] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const query = category === 'all' ? '' : `&category=${category}`;
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=bd27922d5692413bad59ef0ca957c20b`
//         );
        
//         setArticles(response.data.articles);
//       } catch (e) {
//         console.log(e);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [category]);

//   if (loading) {
//     return <NewsListBlock>대기 중 ...</NewsListBlock>;
//   }
//   if (!articles) {
//     return null;
//   }

//   return (
//     <NewsListBlock>
//       {articles.map((article) => (
//         <NewsItem key={article.url} article={article} />
//       ))}
//     </NewsListBlock>
//   );
// };

const NewsList = ({ category }) => {

  const [loading, response, error ] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=bd27922d5692413bad59ef0ca957c20b`
    );
  }, [category]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
      <Pagination postsPerPage={postsPerPage} totalPosts={articles.length} paginate={setCurrentPage}></Pagination>
    </NewsListBlock>
  );
};

export default NewsList;