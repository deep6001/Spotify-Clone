import React from 'react'
import {BsFillHouseFill,BsJournalAlbum} from 'react-icons/bs'
import {FaBroadcastTower,FaMicrophoneAlt,FaPodcast} from 'react-icons/fa'
import {BiPulse} from 'react-icons/bi'

const MenuList=[
    {
        id:1,
        icon: <BsFillHouseFill></BsFillHouseFill>,
        name:'Home',
    },
    {
        id:2,
        icon: <BiPulse></BiPulse>,
        name:'Discover',
    },
    {
        id:3,
        icon: <FaBroadcastTower></FaBroadcastTower>,
        name:'Radio',
    },
    {
        id:4,
        icon: <FaMicrophoneAlt></FaMicrophoneAlt>,
        name:'Artist',
    },
    {
        id:5,
        icon: <BsJournalAlbum></BsJournalAlbum>,
        name:'Albums',
    },
    {
        id:6,
        icon: <FaPodcast></FaPodcast>,
        name:'Podcasts',
    },
]
export {MenuList};

