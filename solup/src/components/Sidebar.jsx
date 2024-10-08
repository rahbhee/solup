import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/solup.png'
import upgrade from '/gopro.png'
import { useLocation } from 'react-router-dom'
import { useState, useEffect} from 'react'
import Mobilesidebar from './mobileSIdebar'

const Sidebar = ({activeLink, setActiveLink, SIDEBAR_LINKS}) => {
  const location = useLocation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
   const handleResize = () => {
     setWindowWidth(window.innerWidth);
   };
   window.addEventListener('resize', handleResize);

   return () => {
     window.removeEventListener('resize', handleResize);
   };
 }, []);

 useEffect(() => {
  const currentPath = location.pathname;

  if (currentPath.includes('latest') || currentPath.includes('trending')) {
    const projectMarketIndex = SIDEBAR_LINKS.findIndex(link => link.name === 'Project Market');
    setActiveLink(projectMarketIndex);
  } else {
    const activeIndex = SIDEBAR_LINKS.findIndex(link => link.path === currentPath);
    setActiveLink(activeIndex !== -1 ? activeIndex : 0);
  }
}, [location.pathname, SIDEBAR_LINKS, setActiveLink]);


  return (
    <>
      {windowWidth <=767 ? (<Mobilesidebar/>) :
      <>
        <div className={`w-16 sidebar md:w-56 fixed main left-0 top-0 h-screen pl-0 md:pl-8 border-r pt-8 px-4 bg-white border-none`}>
      <div className='mb-8 flex'>
        <img src={logo} alt="LOGO" className='w-28 sidebar-logo ml-2 md:flex'/>
      </div>
      <ul className='mt-16 ml-2 md:ml-0 space-y-6'>
              {SIDEBAR_LINKS.map((link, index) => {
                const isSpecialRoute = link.path === '/latest' || link.path === '/trending';

                return (
                  <li
                    key={link.id}
                    onClick={() => setActiveLink(index)}
                    className={`sidebar-item text-gray-500 font-medium md:space-x-5 justify-between text-sm rounded-2xl py-2 px-5 hover ${
                      activeLink === index || (link.name === 'Project Market' && (location.pathname.includes('latest') || location.pathname.includes('trending')))
                        ? '' : ''
                    }`}
                  >
                    <Link className='flex items-center justify-center md:justify-start' to={link.path}>
                      <span className={`icon ${activeLink === index || (link.name === 'Project Market' && (location.pathname.includes('latest') || location.pathname.includes('trending'))) ? 'text-purple-600 border--2 border-purple-600' : ''}`}>
                        {link.icons}
                      </span>
                      {!isSpecialRoute && (
                        <span className={`ml-4 text ${activeLink === index || (link.name === 'Project Market' && (location.pathname.includes('latest') || location.pathname.includes('trending'))) ? 'text-black' : ''}`}>
                          {link.name}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
      <div className='align-center flex justify-center pt-20 text-xs'>
      <img className='w-30' src={upgrade} alt="" />
      </div>
    </div>
    </>
    }
      </>
  )
}

export default Sidebar;
