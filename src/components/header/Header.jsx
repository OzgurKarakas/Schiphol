import React, { useState } from 'react';
import { FaUser } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import './style.css';
import { TextField } from '@mui/material';
import { IconButton, InputAdornment } from '@mui/material';

const Header = () => {
  const [drawerContent, setDrawerContent] = useState(null);
  const [drawerType, setDrawerType] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)

  const menuData = {
    flights: ['Departures', 'Arrivals', 'Transfers', 'Preparing for your trip'],
    parking: ['Parking at Schiphol', 'Parking Privium Plus', 'Pick-up & drop-off', 'From Schiphol', 'To Schiphol', 'FAQ parking'],
    shop: ['Experience all', 'Shop', 'Taste', 'Discover', 'Plan your visit', 'Plaza'],
    services: ['Airport maps', 'Privium', 'VIP Service', 'Assistance', 'Lost & Found', 'Business travel', 'All services'],
    covid: ['Measures', 'Frequently asked questions']
  };

  const openDrawer = (key) => {
    setDrawerContent(menuData[key]);
    setDrawerType(key);
  };

  const openSearchDrawer = () => {
    setDrawerContent(null);
    setDrawerType('search');
  };

  const openMobilMenuDrawer = () => {
    setDrawerContent(null);
    setDrawerType('mobil');
  };

  const closeDrawer = () => {
    setDrawerContent(null);
    setDrawerType(null);
  };

  return (
    <header className="header-container p-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-2xl font-extrabold header-title">Schiphol</div>
        <nav className="hidden lg:flex items-center space-x-4">
          <ul className="flex space-x-16 cursor-pointer">
            <li className=" header-text font-semibold text-sm" onClick={() => openDrawer('flights')}>Flights</li>
            <li className=" header-text font-semibold text-sm" onClick={() => openDrawer('parking')}>Parking & Transport</li>
            <li className=" header-text font-semibold text-sm" onClick={() => openDrawer('shop')}>Shop,Taste & Discover</li>
            <li className=" header-text font-semibold text-sm" onClick={() => openDrawer('services')}>Services</li>
            <li className=" header-text font-semibold text-sm" onClick={() => openDrawer('covid')}>Covid</li>
          </ul>
        </nav>

        <div onClick={openMobilMenuDrawer} className='lg:hidden z-10'>
          {!nav && <>
            <div className='flex justify-center items-center space-x-1 cursor-pointer'>
              <FiMenu fontSize="large" /> <p>Menu</p>
            </div>
          </>  }
        </div>

        <div className="flex items-center space-x-4">
          <div className=" flex justify-center items-center space-x-1 header-text cursor-pointer">
            <FaUser />
            <p className='hidden lg:flex text-sm cursor-pointer'>Login</p>
          </div>
          <button className="text-sm header-text" onClick={openSearchDrawer}>
            <IoMdSearch fontSize="22px" />
          </button>
          <div className="hidden lg:flex text-sm header-text">
            <span className='font-semibold'>EN</span> <span className=' cursor-pointer'>| NL</span>
          </div>
        </div>
      </div>

      {drawerType === 'search' && (
        <div className={`drawer ${drawerType}`} onClick={closeDrawer}>
          <div className="drawer-content flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
            <form className="flex items-center space-x-2">
              <div className="relative">
                <TextField
                className='w-[100%] lg:w-[60rem]'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoComplete='off'
                placeholder='E.g. baggage,`KL897`,sandwich'
                variant="filled"
                InputProps={{
                  style: { backgroundColor: 'white', border: '1px solid lightGray', height: '50px' },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <IoMdSearch color='blue' />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              </div>
            </form>
          </div>
        </div>
      )}
      {drawerType === 'mobil' && (
        <div className={`drawer ${drawerType}`} onClick={closeDrawer}>
          <div className="drawer-content-mobil" onClick={(e) => e.stopPropagation()}>
          <ul>
          <li className='py-3 p-1 text-md bg-gradient-to-r from-purple-600 via-blue-600 to-blue-900 text-transparent bg-clip-text'>
            <div >
              Travellers
            </div>
          </li>
          <li className='flex justify-between items-center py-4 p-1 text-sm hover:text-blue-800'>
            <div>
              Flights
            </div>
            <IoIosArrowForward fontSize="large" />
          </li>
          <li className='flex justify-between items-center py-4 p-1 text-sm hover:text-blue-800'>

            <div>
              Parking & Transport
            </div>
            <IoIosArrowForward fontSize="large" />
          </li>
          <li className='flex justify-between items-center py-4 p-1 text-sm hover:text-blue-800'>

            <div>
              Services
            </div>
            <IoIosArrowForward fontSize="large" />
          </li>
          <li className='flex justify-between items-center py-4 p-1 text-sm hover:text-blue-800'>

            <div>
              Covid
            </div>
            <IoIosArrowForward fontSize="large" />
          </li>
          <li className=' py-10 p-1 text-md bg-gradient-to-r from-purple-600 via-blue-600 to-blue-900 text-transparent bg-clip-text'>
            <div>
              More about Schiphol
            </div>
          </li>
          <li className='flex justify-between items-center py-2 p-1 text-sm hover:text-blue-800'>

            <div>
              All Schiphol websites
            </div>
            <IoIosArrowForward fontSize="large" />
          </li>
        </ul>

        <div className='border-t-2 mt-10'>
<p className='p-2'>EN | NL</p>
<p className='hidden' onClick={handleClick}></p>
        </div>
         
          </div>
        </div>
      )}

      {drawerContent && (
        <div className={`drawer ${drawerType}`} onClick={closeDrawer}>
          <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
            <ul className='space-y-8 text-sm text-gray-600'>
              {drawerContent.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header