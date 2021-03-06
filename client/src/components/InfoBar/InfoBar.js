import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './InfoBar.css';

const InfoBar = ({room}) => (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online"/>
                <h3>Welcome to {room}!</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/" className="leave-btn">Leave Room</a>
            </div>    
        </div>
    );


export default InfoBar;
