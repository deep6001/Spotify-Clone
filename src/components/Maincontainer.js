import React, { useEffect } from 'react';
import '../Styles/maincontainer.css';
import { Banner } from './Banner';
import { FaUser } from 'react-icons/fa';
import { Audio } from './Audio';

function Maincontainer() {
  useEffect(() => {
    const allLi = document.querySelectorAll('.menuList li');

    function changeMenuActive(event) {
      // Remove 'active' class from all li elements
      allLi.forEach((li) => li.classList.remove('active'));
      // Add 'active' class to the clicked li element
      event.currentTarget.classList.add('active');
    }

    allLi.forEach((li) => li.addEventListener('click', changeMenuActive));

    // Cleanup event listeners when the component unmounts
    return () => {
      allLi.forEach((li) => li.removeEventListener('click', changeMenuActive));
    };
  }, []);

  return (
    <div className='maincontainer'>
      <Banner />
      <div className="menuList">
        <ul>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Albums</a></li>
          <li><a href="#">Songs</a></li>
          <li><a href="#">Fans</a></li>
          <li><a href="#">About</a></li>
        </ul>

        <p>
          <i><FaUser /></i>
          12.3M <span>Followers</span>
        </p>
      </div>
      <Audio></Audio>    
    </div>
  );
}

export { Maincontainer };
