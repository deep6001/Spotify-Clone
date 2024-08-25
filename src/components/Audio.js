import React ,{useEffect}from 'react'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa'
import { Songs } from './Songs'
import { useState } from 'react'
import { Musicplayer } from './Musicplayer'

function Audio() {
    const[songs,setSongs]=useState(Songs)
    const [song,setSong]=useState(Songs[0].song)
    const [img,setImg]=useState(Songs[0].imgSrc)

    useEffect(() => {
      const songs = document.querySelectorAll('.songs');
    
      function changeMenuActive(event) {
        songs.forEach((li) => li.classList.remove('active'));
        event.currentTarget.classList.add('active');
      }
    
      songs.forEach((li) => li.addEventListener('click', changeMenuActive));
    
      return () => {
        songs.forEach((li) => li.removeEventListener('click', changeMenuActive));
      };
    }, []);
    
    const changeFavourite= (id)=>{
        Songs.forEach(song=>{
          if(  song.id == id){
            song.favourite =!song.favourite;
          }
          
        })
        setSongs([...Songs])
    }
   

    const setmainsong=(songSrc,imgSrc)=>{
      setSong(songSrc);
      setImg(imgSrc);
    }


  return (

    <div className='audioList'>
      
      <h2 className="title">
        The List <span>{Songs.length} Songs</span>
      </h2>
      <div className="songsContainer">
        {
            Songs &&
            Songs.map((song,index)=>(
                <div className="songs" key={song.id} onClick={()=>setmainsong(song.song, song.imgSrc)}>
                    <div className="count">#{index + 1}</div>
                    <div className="song">
                        <div className="imgBox">
                            <img src={song.imgSrc} alt="" />
                        </div>

                        <div className="section">
                        <p className="songName">
                                {song.songName}
                                <span className='spanArtist'>
                                    {song.artist}
                                </span>
                        </p>
                        <div className="hits">
                                <p className="hit">
                                    <i><FaHeadphones></FaHeadphones></i>
                                    95,166,372
                                </p>
                                <p className="duration">
                                    <i><FaRegClock></FaRegClock></i>
                                    03.04
                                </p>
                                <div className="favourite"
                                onClick={()=>changeFavourite(song?.id)}
                                >
                                    {
                                        song.favourite ?
                                        <i><FaHeart></FaHeart></i> 
                                        :
                                        <i><FaRegHeart></FaRegHeart></i>
                                    }

                                 
                                </div>
                        </div>
                        
                        </div>
                    </div>
                </div>

            )) 
        }


      </div>
      <Musicplayer song={song} imgSrc={img}></Musicplayer>
    </div>
  )
}

export { Audio }
