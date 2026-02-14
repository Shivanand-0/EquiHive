import React, {useState,useContext} from "react";
import {watchlist} from "../data/data";
import{Tooltip, Grow} from "@mui/material";
import {KeyboardArrowUp, KeyboardArrowDown, BarChartOutlined, MoreHoriz} from '@mui/icons-material';
import GeneralContext from "./GeneralContext";
import { DoughnoutChart } from "./DoughnoutChart";
const WatchList = () => {
  const labels = watchlist.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ]
  }
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {
          watchlist.map((stock,index)=>{
            return <WatchListItem key={index} stock={stock}/>
        })
        }
      </ul>
      <DoughnoutChart data={data}/>
    </div>
  );
};

export default WatchList;


// subcomponent for watchlist item

const WatchListItem = ({stock})=>{
  const [showWatchListItem, setShowWatchListItem] = useState(false);
  const handleMouseEnter=(e)=>{
    setShowWatchListItem(true);
  }
  const handleMouseLeave=(e)=>{
    setShowWatchListItem(false);
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='item'>
          <p className={stock.isDown?"down":"up"}>{stock.name}</p>
          <div>
            <span className="percent">{stock.percent}</span>
            {stock.isDown? 
            <KeyboardArrowDown className="down"/>:
            <KeyboardArrowUp  className="up"/>}
            <span className="price">{stock.price}</span>
          </div>
        </div>
        {showWatchListItem && <WhatchListActions uid={stock.name}/>}
    </li>
  )
};


const WhatchListActions=({uid})=>{
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  const handleSellClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return(
    <span className='actions'>
      <span>
        <Tooltip
        title="Buy(B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        >
          <button className="action-btn buy" onClick={handleBuyClick} >Buy</button>
        </Tooltip>
        <Tooltip
        title="Sell(S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        >
          <button className="action-btn sell" onClick={handleBuyClick} >Sell</button>
        </Tooltip>
        <Tooltip
        title="Analytics(A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        >
          <BarChartOutlined className="action-btn  icon"/>
        </Tooltip>
        <Tooltip
        title="More(M)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        >
          <MoreHoriz classname='icon'/>
        </Tooltip>
      </span>
    </span>
  )
}