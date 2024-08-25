import React from 'react'
import check from '../img/blueTick.png'
import  artist from '../img/banner.jpeg'
import {FaEllipsisH,FaHeadphones,FaCheck} from 'react-icons/fa'

function Banner() {
  return (
    <div className='banner'>
      <img src={artist} alt=""  className='bannerImg'/>

      <div className="content">
        <div className="breadCrump">
            <p>Home <span>/Popular Artist</span></p>
            <i><FaEllipsisH></FaEllipsisH></i>
        </div>
        <div className="artist">
            <div className="left">
                <div className="name">
                    <h2>A-Ha</h2>
                    <img src={check} alt="" />
                </div>
                <p>
                    <i><FaHeadphones></FaHeadphones></i>11,184,1811 <span>monthly listeners</span></p>
            </div>
            <div className="right">
                <a href="#">Play</a>
                <a href="#"><i><FaCheck></FaCheck></i>Following</a>
            </div>
        </div>
      </div>
      <div className="bottomLayer"></div>
    </div>
  )
}

export { Banner}
