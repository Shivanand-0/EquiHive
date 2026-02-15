import React,{useState,useEffect} from "react";
import axios from 'axios';
import { BACKEND_URL } from "../../utils/constants.js";

const Positions = () => {

  const [allPositions,setAllPositions]= useState([]);

  useEffect(()=>{
    axios.get(`${BACKEND_URL}/allPositions`,{
      withCredentials: true,
    })
    .then((res)=>{
      setAllPositions(res.data);
    })
  })
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {
            allPositions.map((stock,index)=>{
              let currValue = stock.qty * stock.price;
              let isProfit=(currValue-(stock.avg*stock.qty))>0.0;
              let profitClass=isProfit?"profit":"loss";
              return(
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profitClass}>{(currValue-(stock.avg*stock.qty)).toFixed(2)}</td>
                <td className={profitClass}>{stock.net}</td>
              </tr>
            );
            })
          }
        </table>
      </div>
    </>
  );
};

export default Positions;