import React, { useEffect } from 'react';

function Menu({ title, menuObject }) {
  useEffect(() => {
    const allLi = document.querySelectorAll('.menu-container ul li');

    function changeMenuActive(event) {
      allLi.forEach((li) => li.classList.remove('active'));
      event.target.parentNode.classList.add('active');
    }

    allLi.forEach((li) => li.addEventListener('click', changeMenuActive));

    // Cleanup event listeners when the component unmounts
    return () => {
      allLi.forEach((li) => li.removeEventListener('click', changeMenuActive));
    };
  }, []);

  return (
    <div className='menu-container'>
      <p className="title">{title}</p>
      <ul>
        {menuObject &&
          menuObject.map((menu) => (
            <li key={menu.id}>
              <a href="#">
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };
