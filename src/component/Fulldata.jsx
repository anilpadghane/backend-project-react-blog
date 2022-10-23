import React,{useState,useEffect} from 'react';
import fetchData from './api';
import { useParams } from "react-router-dom";
//import { store } from "./Data";
import './Block.css'

var _id;
const Fulldata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiFetch = async () => {
      setData(await fetchData());
    };
    apiFetch();
  }, [data]);
  const {id} = useParams();
  _id = id - 1;

  return (
    <div>
      {
        <div className="leftData">
          <hr className="horizontal"></hr>
          <div key = {data[_id].id}>
            <img src = {data[_id].image} alt = '' className='imageUrlNext' />
            <div><h3 className='titleNext'>{data[_id].Title}</h3></div>
            <div><p className='paraNext'>{data[_id].Description}</p></div>
            <div><p className='dateNext'>{data[_id].Date}</p></div>
            <div><p className="timingNext">{data[_id].Time}</p></div>
            <div><p className='catNext'>{data[_id].Category}</p></div>
          </div>
          <hr/>
        </div>
      }
    </div>
  );
};

export default Fulldata;
