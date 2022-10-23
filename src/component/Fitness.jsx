import './Block.css'
import React,{useState,useEffect} from 'react';
import fetchData from './api';
import { Link } from 'react-router-dom';

const Fitness = () => {
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
            <h1 className='fithead'>Fitness</h1>
            <div className='wood'>
            <div className='bolly-left'>
                <div className='bollyone'>
                    {
                        data.filter((data) => data.Category === "Fitness").map((data) => (
                            <div className='leftData'>
                               <div key = {data.id}>
                                    <Link to={`/Fitness/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrl4' />
                                    </Link>
                                    <div><h3 className='title3'>{data.Title}</h3></div>
                                    <div><p className='para1'>{data.Description}</p></div>
                                    <div><p className='catNew'>{data.Category}</p></div>
                                </div>
                             <hr/>   
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='bolly-right-new'><h2 className='bHi'>Top Posts</h2><hr className='line2'></hr>
                <div className='bollytwo'>
                    {
                        data.filter((data) => data.Category === "Fitness").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Fitness/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrlNew' />
                                    </Link>
                                    <div><h3 className='titleNew'>{data.Title}</h3></div>
                                    <div><p className='catNew1'>{data.Category}</p></div>
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

export default Fitness;
