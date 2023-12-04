import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
  });

  const toggleMenu = (menuName) => {
    setMenuOpen((prevMenuOpen) => ({
      ...prevMenuOpen,
      [menuName]: !prevMenuOpen[menuName],
    }));
  };

  return (
    <footer className='footer-container w-full flex flex-col justify-start'>
      <div className='flex justify-center p-16 pr-16 pl-16 lg:flex-row flex-col lg:space-x-11'>
        <div className='flex flex-col menu lg:space-y-6  lg:mb-0'>
          <div className='space-y-6'>
            <div
              className={`menu-header cursor-pointer flex justify-between items-center ${menuOpen.menu1 && 'border-b-[0.01rem] border-white'
                }`}
              onClick={() => toggleMenu('menu1')}
            >
              <p className='font-bold'>Flights</p>
              <span className='flex lg:hidden'>
                <IoIosArrowDown />
              </span>
            </div>
            {(menuOpen.menu1 || window.innerWidth > 1024) && (
              <div className='menu-content space-y-3'>
                <p className='text-sm'>Departures</p>
                <p className='text-sm'>Arrivals</p>
                <p className='text-sm'>Transfers</p>
              </div>
            )}
          </div>
          <div>
            <div className='menu lg:pr-[4rem] lg:space-y-6  lg:mb-0'>
              <div
                className={`menu-header cursor-pointer flex justify-between items-center ${menuOpen.menu4 && 'border-b-[0.01rem] border-white'
                  }`}
                onClick={() => toggleMenu('menu4')}
              >
                <p className='font-bold'>Things to do at Schiphol</p>
                <span className='flex lg:hidden'>
                  <IoIosArrowDown />
                </span>
              </div>
              {(menuOpen.menu4 || window.innerWidth > 1024) && (
                <div className='menu-content space-y-3'>
                  <p className='text-sm'>Experience all</p>
                  <p className='text-sm'>Shop</p>
                  <p className='text-sm'>Taste</p>
                  <p className='text-sm'>Discover</p>
                  <p className='text-sm'>Plaza</p>

                </div>
              )}
            </div>
          </div>
        </div>
        <div className='menu lg:pr-[4rem] lg:space-y-6  lg:mb-0'>
          <div className='lg:space-y-6'>
            <div
              className={`menu-header cursor-pointer flex justify-between items-center ${menuOpen.menu2 && 'border-b-[0.01rem] border-white'
                }`}
              onClick={() => toggleMenu('menu2')}
            >
              <p className='font-bold'>Check-in</p>
              <span className='flex lg:hidden'>
                <IoIosArrowDown />
              </span>
            </div>
            {(menuOpen.menu2 || window.innerWidth > 1024) && (
              <div className='menu-content space-y-3'>
                <p className='text-sm'>Ways to check in</p>
                <p className='text-sm'>Baggage rules and checks</p>
                <p className='text-sm'>How busy is Schiphol</p>

              </div>
            )}
          </div>

          <div>
            <div className='menu space-y-6  lg:mb-0'>
              <div
                className={`menu-header cursor-pointer flex justify-between items-center ${menuOpen.menu5 && 'border-b-[0.01rem] border-white'
                  }`}
                onClick={() => toggleMenu('menu5')}
              >
                <p className='font-bold'>Parking at Schiphol</p>
                <span className='flex lg:hidden'>
                  <IoIosArrowDown />
                </span>
              </div>
              {(menuOpen.menu5 || window.innerWidth > 1024) && (
                <div className='menu-content space-y-3'>
                  <p className='text-sm'>All parking options</p>
                  <p className='text-sm'>Short-term Parking</p>
                  <p className='text-sm'>Long term parking</p>
                  <p className='text-sm'>Affiliate programme Parking</p>
                  <p className='text-sm'>Pick-up & drop-off (Kiss & Ride)</p>

                </div>
              )}
            </div>
          </div>

        </div>
        <div className='menu mb-4 space-y-6 lg:mb-0'>
          <div
            className={`menu-header cursor-pointer flex justify-between items-center ${menuOpen.menu3 && 'border-b-[0.01rem] border-white'
              }`}
            onClick={() => toggleMenu('menu3')}
          >
            <p className='font-bold'>All Schiphol websites</p>
            <span className='flex lg:hidden'>
              <IoIosArrowDown />
            </span>
          </div>
          {(menuOpen.menu3 || window.innerWidth > 1024) && (
            <div className='flex space-x-14 '>
              <div className='space-y-3'>
                <p className='text-sm'>Royal Schiphol Group</p>
                <p className='text-sm'>Schiphol as a neighbour</p>
                <p className='text-sm'>Careers at Schiphol Group</p>
                <p className='text-sm'>Work at Schiphol</p>
                <p className='text-sm'>Advertise at Schiphol</p>
                <p className='text-sm'>Real Estate</p>
                <p className='text-sm'>Cargo</p>
                <p className='text-sm'>Company Directory</p>
                <p className='text-sm'>Route Development</p>
              </div>
              <div className='space-y-3'>
                <p className='text-sm'>Airport Utilities</p>
                <p className='text-sm'>Aviation Solutions</p>
                <p className='text-sm'>Operations</p>
                <p className='text-sm'>APOC</p>
                <p className='text-sm'>You and Schiphol</p>
                <p className='text-sm'>Projects at Schiphol</p>
                <p className='text-sm'>Schiphol Telematics</p>
                <p className='text-sm'>Developer center</p>
                <p className='text-sm'>Innovation</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-col justify-start space-y-3 items-center'>
        <div>
          <p className='font-bold text-lg'>Download the Schiphol app</p>
        </div>
        <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 justify-center items-center'>
            <button className='bg-black flex justify-center items-center text-white p-1 space-x-2 rounded-md'>
              <div><FaApple fontSize="30px"/></div>
              <div className='flex flex-col justify-start items-start'>
                <p className='text-[8px]'>Download on the</p>
                <p className='text-md'>App Store</p>
              </div>
            </button>
            <button className='bg-black flex justify-center items-center text-white p-1 space-x-2 rounded-md'>
              <div><FaGooglePlay fontSize="20px"/></div>
              <div className='flex flex-col justify-start items-start'>
                <p className='text-[8px]'>GET IT ON</p>
                <p className='text-md'>Google Play</p>
              </div>
            </button>
        </div>
      </div>

      <div className='flex flex-col space-y-3 p-5 justify-between items-center'>
        <div className='hidden lg:flex'></div>
        <div className=''>
          <p>© Schiphol 2023</p>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center space-x-4'>
          <p className='text-sm'>Privacy</p>
          <p className='text-sm'>Schiphol regulations</p>
          <p className='text-sm'>Disclaimer</p>
          <p className='text-sm'>Newsletter</p>
          <p className='text-sm'>Contact us</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;