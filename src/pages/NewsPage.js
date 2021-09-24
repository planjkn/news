import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import Search from '../components/Search';

const NewsPage = ({match}) => {
    const category = match.params.category || 'all';
    return (
        <>
            <Categories /><Search />
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;