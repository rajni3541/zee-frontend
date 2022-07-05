import React from 'react'
import "./header.css"
// import logo from '../assest/download.png';
import icon from '../assest/Iconly-Light-Notification.png'
import avatar from '../assest/user.png';
import arrow from '../assest/down-arrow.png';
import search from '../assest/Iconly-Light-Search.svg'

const Header = () => {
    return(
        <>
        {/* header-left */}
        <div className='background'>
        <div className="header-top">
            <div>
                <div className="logo">
                    <img src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.8" title="ZEE5 Logo" alt="ZEE5 Logo" style={{height: '70px'}} />
                    {/* <img src={logo} alt="logo" style={{height: '30px'}} /> */}
                </div>
            </div>
        {/* header-right */}
            <div className="header-right">
                <div className="icon-box">
                <img src={icon} alt="logo" style={{height: '30px'}} />
                <img src={avatar} alt="logo" style={{height: '30px'}} />

                <span><strong>Rajni saini</strong></span>  
                <img src={arrow} alt="logo" style={{height: '20px'}} />  
                </div>
            </div>
        </div>
        </div>

        {/* lower header part */}

        <div className="nav">
            <div className="center-box">
            <ul>
        <a href="#">
          <li>Dashboard</li>
        </a>
        <a href="#">
          <li>Role Management</li>
        </a>
        <a href="#">
          <li>User Management</li>
        </a>
        <a href="#">
          <li>Master Management</li>
        </a>
      </ul>
            </div>
        </div>

        <div className="input-section" style={{width: '80%', marginInline: 'auto'}}>
            
            {/* <div className="right">
                <input className='search' placeholder='search by movie name'></input>
                <img src={search} alt="logo"  />  
             */}
            
            {/* {/* <div className="button">
                <button>Sort</button>
                <button>Filter</button>
                <button>Bulk Filing</button>
                <button style={{backgroundcolor:'purple', color:'black'}}>Create Movie</button>
                </div>
                </div> */}
        </div> 
        

        </>
    )
}
export default Header;