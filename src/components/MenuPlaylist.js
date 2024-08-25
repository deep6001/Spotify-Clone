import React from 'react'
import {FaPlus} from 'react-icons/fa'
import {BsMusicNoteList,BsTrash} from 'react-icons/bs'

import { PlayList } from './PlayList'

function MenuPlaylist() {
  return (
    <div className='playltstContainer'>
      <div className="nameContainer">
            <p>PlayList</p>
            <i><FaPlus></FaPlus></i>
      </div>
      <div className="playListScroll">
        {
            PlayList && 
            PlayList.map((list)=>(
            <div className="PlayList" key={list.id}>

                <i className='list'><BsMusicNoteList></BsMusicNoteList></i>
                <p> {list.name}</p>
                <i className='trash'><BsTrash></BsTrash></i>
             </div>
            ))
        } 
       
      </div>
    </div>
  )
}

export { MenuPlaylist}
