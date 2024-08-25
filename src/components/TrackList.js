import React from 'react'
import {BsFillVolumeUpFill,BsMusicNoteList} from 'react-icons/bs'
import {FaDesktop} from 'react-icons/fa'
import Track from "../img/track.png"
function TrackList() {
  return (
    <div className='trackList'>
        <div className="top">
            <img src={Track} alt="" />
            <p className='trackName'>Simple Name <span className='trackspan'>Artist</span></p>
        </div>
        <div className="bottom">
            <i><BsFillVolumeUpFill></BsFillVolumeUpFill></i>
            <input type="range" />
            <i><BsMusicNoteList></BsMusicNoteList></i>
            <i><FaDesktop></FaDesktop></i>
        </div>
      
    </div>
  )
}

export { TrackList}
