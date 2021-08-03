import React from 'react';
import './index.css';
import cosmosIcon from '../../../assets/cosmos.svg';
import cosmos1Icon from '../../../assets/cosmos1.svg';
import playIcon from '../../../assets/play.svg';
import Logo1 from '../../../assets/player/player-right.svg';

const Player = () => {
    return (
        <div className="player_section">
            <div className="player">
                <div className="player_left_top">
                    <img alt="cosmos" src={cosmos1Icon}/>
                    <span> Code with us</span>
                </div>
                <div className="player_center">
                    <img alt="cosmos" src={cosmosIcon}/>
                    <img alt="play" src={playIcon}/>
                </div>
                <div className="player_left_bottom">
                    <span className="player_status"/>
                    <span> Live online workshops by cosmos</span>
                </div>
            </div>
            <img alt="logo1" className="player_right1" src={Logo1}/>
        </div>
    );
};

export default Player;
