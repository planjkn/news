import React, { useState } from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { MdSearch } from "react-icons/md";
import classNames from 'classnames/bind';
import styles from './NewsPage.scss';
// import Search from '../components/Search';

const cx = classNames.bind(styles);

const NewsPage = ({match}) => {
    const category = match.params.category || 'all';
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
       console.log(search);
      };

    return (
        <>
            <Categories />
            <form onSubmit={ e=>handleSearch(e) } className={cx('searchForm')}>
                <input type="search" className={cx('myText')} placeholder="검색" onChange={ e => setSearch(e.target.value)} />
                {/* <button type="submit" className={cx('searchButton')}><MdSearch className={cx('searchIcon')} /></button> */}
                
            </form>
            <NewsList category={category} search={search} />
        </>
    );
};

export default NewsPage;