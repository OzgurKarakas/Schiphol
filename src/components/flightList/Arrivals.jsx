import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaArrowDown, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from '../../store/reducers/flightListSlice';

const Arrivals = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('en-US', { month: 'long' });
  const [showEarlier, setShowEarlier] = useState(false);
  const [showEarlierLater, setShowEarlierLater] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.flights.data);

  const filteredArrivalFlights = Object.values(data).flatMap((flights) =>
    flights.filter(
      (item) =>
        item.publicFlightState &&
        item.publicFlightState.flightStates &&
        item.publicFlightState.flightStates.includes("ARR") &&
        new Date(item.scheduleDate).getDate() === day &&
        new Date(item.scheduleDate).getMonth() === currentDate.getMonth()
    )
  );

  const handleShowEarlier = () => {
    setShowEarlier(true)
  }

  const handleShowEarlierLater = () => {
    setShowEarlierLater(true)
  }

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    dispatch(fetchFlights());
  }, []);

  return (
    <div className='departures-container py-0 lg:py-10 space-y-12'>
      <div>
        <button onClick={() => handleShowEarlier()} className='show-earlier-container w-full p-[10px] bg-white border-none cursor-pointer flex justify-center items-center space-x-2'>
          <span>Show earlier flights</span>
          <FaArrowUp color='#1b60db' />
        </button>
      </div>

      <div className='space-y-2' >
        {showEarlier && (
          <div className='flex justify-center items-center'>
            <p className='text-red-600'>No flights for previous dates were found.</p>
          </div>
        )}
        <p className='font-semibold text-sm'>Today, {day} {month}</p>


        {filteredArrivalFlights.map((item, index) => (
          <button key={index} className='w-full bg-white p-[5px] md:p-[10px] border-none cursor-pointer flight-list-container'>
            <div className='p-2'>

              <div className='flex'>

                <div className='w-[20%] md:w-[20%] text-[#141251] font-semibold flex flex-col justify-start custom-border'>
                  <p>{formatTime(item.scheduleTime)}</p>
                  <p>{item.scheduleDate}</p>
                </div>

                <div className='flex flex-col md:flex-row w-[50%] md:w-[70%] space-y-2 pl-5 space-x-2'>
                  <div className='custom-border pr-20'>
                    <p className='flex justify-start text-[#141251] text-sm font-bold whitespace-nowrap'>{item.prefixIATA}-{item.mainFlight}</p>
                    <p className='flex justify-start text-[#141251] whitespace-nowrap'>{item.airlineCode}-{item.aircraftType.iataMain}</p>
                    <p className='flex justify-start text-[#141251] whitespace-nowrap text-xs'>Baggage: {item.baggageClaim.belts}</p>
                  </div>
                  <div className='h-6 p-1 bg-[#141251] text-white flex justify-center items-center rounded-md'>
                    <p className='text-xs '>GATE OPEN</p>
                  </div>
                </div>
                <div className='w-[10%] flex justify-end items-start'>
                  <div className='flex justify-center items-center space-x-2'>
                    <p className='text-[#1b60db]'> <span className='hidden lg:flex' >Details</span></p> <FaArrowRight color='#1b60db' />
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}

      </div>
      <div>
        {showEarlierLater && (
          <div className='flex justify-center items-center m-2'>
            <p className='text-red-600'>No flights for subsequent dates were found.</p>
          </div>
        )}
        <button onClick={() => handleShowEarlierLater()} className='show-earlier-container w-full p-[10px] bg-white border-none cursor-pointer flex justify-center items-center space-x-2'>
          <span>Show later flights</span>
          <FaArrowDown color='#1b60db' />
        </button>
      </div>
    </div>
  )
}

export default Arrivals