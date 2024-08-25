import React,{useState,useRef,useEffect} from 'react'
import '../Styles/musicplayer.css'
import { FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaShareAlt, FaStepBackward, FaStepForward } from 'react-icons/fa'
import {BsDownload} from 'react-icons/bs' 
function Musicplayer({song,imgSrc}) {

    const [isLove,setLoved]=useState(false)
    const [isplaying,setPlaying]=useState(false)
    const[duration,setDuration]=useState(0)
    const[currentTime,setCurrentTime]=useState(0)

    const audioPlayer=useRef();
    const progressBar=useRef();
    const animationRef=useRef();

    useEffect(() => {
        if (audioPlayer.current) {
            const seconds = Math.floor(audioPlayer.current.duration);
            setDuration(seconds);
        }
    }, [audioPlayer.current?.loadedmetadata, 
        audioPlayer.current?.readyState]);
    
    
    
    
    function changePlay(){
        const prevValue = isplaying;
            
            if(!prevValue){
                audioPlayer.current.play();
                animationRef.current=requestAnimationFrame(whilePlaying);

    
            }
            else{
                audioPlayer.current.pause();
                cancelAnimationFrame(animationRef.current);
            }
            setPlaying(!prevValue)
    
        }

    function changeLoved(){
        setLoved(!isLove)
    }

    function changeProgrssBar(){
        audioPlayer.current.currentTime=progressBar.current.value;
        changeCurrentTime();
        
    }

    function CalculateTime(sec){
        const minutes=Math.floor(sec/60);
        const returnMin=minutes<10 ?`0${minutes}`:`${minutes}`;
        const seconds=Math.floor(sec % 60);

        const returnSec=seconds<10 ?`0${seconds}`:`${seconds}`;

        return `${returnMin}:${returnSec}`;
    }

    function whilePlaying(){
        progressBar.current.currentTime=progressBar.current.value;
        changeCurrentTime();
        animationRef.current=requestAnimationFrame(whilePlaying);
    }
    
    function changeCurrentTime(){
        progressBar.current.style.setProperty('--player-played',`${(progressBar.current.value/duration)*100}%`);
        setCurrentTime(progressBar.current.value);
    }


  return (

    <div className='musicPlayer'>
      <div className="songImg">
            <img src={imgSrc} alt="" />
      </div>
      <div className="songAttributes">
            <audio src={song} preload='metadata' ref={audioPlayer}></audio>
            <div className="top">
                    <div className="left">
                       <div className="loved" onClick={changeLoved}>
                       {
                            isLove ?
                            (<i><FaHeart></FaHeart></i>) 
                            :
                            (<i><FaRegHeart></FaRegHeart></i>)
                        }
                       </div>
                       <div className="download">
                        <i><BsDownload></BsDownload></i>
                       </div>
                    </div>
                    <div className="middle">
                        <div className="back">
                            <i><FaStepBackward></FaStepBackward></i>
                            <i><FaBackward></FaBackward></i>
                        </div>
                        <div className="playpause" onClick={changePlay}>
                            {
                                isplaying ?
                                (<i><FaPause></FaPause></i>)
                                :
                                (<i><FaPlay></FaPlay></i>)
                            }
                        </div>
                        <div className="forward">
                            <i><FaForward></FaForward></i>
                            <i><FaStepForward></FaStepForward></i>
                        </div>

                    </div>
                    <div className="right">
                        <i><FaShareAlt></FaShareAlt></i>
                    </div>
            </div>
            <div className="bottom">
                <div className="cuurentTime">
                {
                    CalculateTime(currentTime)
                }
                </div>
                <input type="range"  className='progressBar' ref={progressBar} onChange={changeProgrssBar}
                style={{ background: `linear-gradient(to right, #848484 0%, #848484 ${(currentTime / duration) * 100}%, #fff ${(currentTime / duration) * 100}%, #fff 100%)` }}/>
                <div className="duration">
                    {(duration && !isNaN(duration) && CalculateTime(duration)) ?
                    CalculateTime(duration):'00:00'
                }
                </div>
            </div>
      </div>
    </div>
  )
}

export { Musicplayer}
