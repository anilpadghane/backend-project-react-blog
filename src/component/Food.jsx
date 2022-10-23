import React,{useState,useEffect} from 'react';
import fetchData from './api';
import './Block.css'
import { Link } from 'react-router-dom';

const Food = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const apiFetch = async () => {
      setData(await fetchData());
    };
    apiFetch();
  }, [data]);
    return (
        <div>
            <hr className="line"></hr>
            <h1 className="foodhead">Food</h1>
            <div className='wood'>
            <div className='bolly-left'>
                <div className='bollyone'>
                    {
                        data.filter((data) => data.Category === "Food").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Food/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrl1' />
                                    </Link>
                                    <div><h3 className='title1'>{data.Title}</h3></div>
                                    <div><p className='para1'>{data.Description}</p></div>
                                    <div><p className='date1'>Timing:{data.Time}</p></div>
                                    <div><p className='cat1'>{data.Category}</p></div>
                                </div>
                                <hr/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='bolly-right'><h2 className='bHi'>Top Posts</h2><hr className='line2'></hr>
                <div className='bollytwo'>
                    {
                        data.filter((data) => data.Category === "Food").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Food/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrl2' />
                                    </Link>
                                    <div><h3 className='title2'>{data.Title}</h3></div>
                                    <div><p className='para2'>{data.Description}</p></div>
                                    <div><p className='date2'>Timing: {data.Time}</p></div>
                                    <div><p className='cat2'>{data.Category}</p></div>
                                </div>
                                <hr/>
                            </div>
                        ))
                    }
                </div>

            </div>
            </div>
        </div>
    )

}

export default Food;