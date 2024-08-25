import React from 'react';
import '../Styles/leftmenu.css';
import { MenuList } from './Menulist';
import { FaSpotify ,FaEllipsisH} from "react-icons/fa";
import {BiSearchAlt} from 'react-icons/bi';
import { Menu } from './Menu';
import { MenuPlaylist } from './MenuPlaylist';
import { TrackList } from './TrackList';


function Leftmenu() {
  return (
    <div className='leftmenu'>
      <div className="logo-container">
        <i><FaSpotify></FaSpotify></i>
        <h2>Spotify</h2>
        <i><FaEllipsisH></FaEllipsisH></i>
      </div>
      <div className="search-box">
        <input type="text"  placeholder='Search..'/>
        <i className='search-icon'><BiSearchAlt></BiSearchAlt></i>
      </div>
      <Menu title={'Menu'} menuObject={MenuList}></Menu>
      <MenuPlaylist></MenuPlaylist>
      <TrackList></TrackList>
    </div>
  )
}

export {Leftmenu}
