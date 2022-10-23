import React, { useState, useEffect } from "react";
import fetchData from "./api";
import './Block.css'

import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const apiFetch = async () => {
      setData(await fetchData());
    };
    apiFetch();
  }, [data]);
  console.log("Home page api", data);
    return (
        <div>
            <hr className="line"></hr>
            <div>
                <img src='.\Image\shivaji-maharaj.jpg' alt = " " className='img1' />
                <h1 className='text1'>The Pride of Maharashtra</h1>
                <h1 className='text2'>Shri Chatrapati Shivaji Maharaj</h1>
                <h3 className='text3'>Tourism of Maharashtra</h3>
            </div>
            <div>
                <img  src='.\Image\Engaging_tech.webp' alt = " " className='img2'/>
             
            </div>
            <div>
                <img src='.\Image\hunumanji.jpg' alt = " " className='img3' />
                <h2 className='text4'>God of Fitness</h2>
            </div>
            
            <div>
                <h3 className='lat'>Latest Technology stories</h3>
            </div>
            <div className='div1'>
                    {
                        data.filter((data) => data.Category === "Technology").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Technology/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrlHome' />
                                    </Link>
                                    <div><h3 className='titleHome'>{data.Title}</h3></div>
                                    <div><p className='paraHome'>{data.Description}</p></div>
                                    <div><p className='catHome'>{data.Category}</p></div>
                                </div>
                            </div>
                        ))
                    }
            </div>
            <hr className="line"/>
            <div>
                <h3 className='lat1'>Latest Bollywood Posts</h3>
            </div>
            <div className='div1'>
                    {
                        data.filter((data) => data.Category === "Bollywood").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Bollywood/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrlHome' />
                                    </Link>
                                    <div><h3 className='titleHome'>{data.Title}</h3></div>
                                    <div><p className='paraHome'>{data.Description}</p></div>
                                    <div><p className='catHome'>{data.Category}</p></div>
                                </div>
                            </div>
                        ))
                    }
            </div>
            <hr className="line"/>
            <div>
                <h3 className='lat1'>Latest Food Articles</h3>
            </div>
            <div className='div1'>
                    {
                        data.filter((data) => data.Category === "Food").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Food/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrlHome1' />
                                    </Link>
                                    <div><h3 className='titleHome'>{data.Title}</h3></div>
                                    <div><p className='paraHome'>{data.Description}</p></div>
                                    <div><p className='catHome1'>{data.Category}</p></div>
                                </div>
                            </div>
                        ))
                    }
            </div>
            
        </div>
    )

}

export default Home;