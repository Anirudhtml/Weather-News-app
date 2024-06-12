import React from "react";
import './News.css';

function News(props) {
    return <div className="news-container">
        <h2 id="heading">Top Story</h2>
        { props.news.load ? <>
                <h1>{props.news.title}</h1>
                <p>{props.news.description}</p>
                <a href={props.news.link}>Keep reading...</a>
            </> : 
            <p>Loading...</p>
        }
        
    </div>
}


export default News;