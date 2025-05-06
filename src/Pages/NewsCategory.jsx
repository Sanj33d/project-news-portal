import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const NewsCategory = () => {
    const {id} = useParams();
    // console.log(id)

    // receiving fetched data
    const data = useLoaderData();
    // console.log(data)

    const [newsCategory, setNewsCategory] = useState([])

    useEffect(() => {
        if (id == "0"){
            setNewsCategory(data)
        }
        else if(id == "1") {
            const filteredData = data.filter((news) => news.others.is_today_pick == id);
            // console.log(filteredData)
            setNewsCategory(filteredData)
        }
        else{
            const filteredData = data.filter((news) => news.category_id == id);
            // console.log(filteredData)
            setNewsCategory(filteredData)
        }
    }, [data, id]);
    return (
        <div>
            <h1 className='font-bold mb-5'>NewsCategory Id: {id}, Total news: {newsCategory.length}</h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                    newsCategory.map((news) => <NewsCard news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default NewsCategory;