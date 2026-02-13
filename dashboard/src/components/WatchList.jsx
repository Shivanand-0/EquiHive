import React, {useState} from "react";
import {watchlist} from "../data/data";
import{Tooltip, Grow} from "@mui/material";
import {KeyboardArrowUp, KeyboardArrowDown, BarChartOutlined, MoreHoriz} from '@mui/icons-material';
const WatchList = () => {
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
  return(
    <span className='actions'>
      <span>
        <Tooltip
        title="Buy(B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        >
          <button className="action-btn buy" >Buy</button>
        </Tooltip>
        <Tooltip
        title="Sell(S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        >
          <button className="action-btn sell" >Sell</button>
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