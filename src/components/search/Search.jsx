import React, { useState } from 'react';
import AirImg from '../../assets/AirFour.png';
import { IoMdSearch } from "react-icons/io";
import TextField from '@mui/material/TextField';
import './style.css';
import { IconButton, InputAdornment, MenuItem, Select } from '@mui/material';

const Search = ({ onSearchChange, onDayChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearchChange(term);
  };

  const handleDayChange = (event) => {
    const selectedDay = event.target.value;
    setSelectedDay(selectedDay);
    if (typeof onDayChange === 'function') {
      onDayChange(selectedDay);
    }
  };

  const currentDate = new Date();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  const options = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    return { value: `day${day}`, label: `${day} ${currentDate.toLocaleString('en-US', { month: 'long' })}` };
  });

  const [selectedDay, setSelectedDay] = React.useState('');

  
  return (
    <div className='search-container'>
      <div className='flex justify-center items-center space-x-0 lg:space-x-48'>
        <div className='space-y-4'>
          <div className='flex flex-col'>
            <p>Find a</p>
            <p>departing</p>
            <p>flight</p>
          </div>
          <div className='textfield-container flex space-x-0 lg:space-x-6'>
            <div>
              <Select
                value={selectedDay}
                onChange={handleDayChange}
                variant="filled"
                style={{ backgroundColor: 'white', width: '150px', border: '1px solid lightGray', height: '50px' }}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div>
              <TextField
                className='w-[100%] lg:w-[30rem]'
                autoComplete='off'
                placeholder='Enter destination, flight number or airline'
                variant="filled"
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  style: { backgroundColor: 'white', border: '1px solid lightGray', height: '50px', },
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

          </div>
        </div>
        <div className='hidden md:flex'>
          <img src={AirImg} alt="asd" width="300px" />
        </div>
      </div>
    </div>
  )
}

export default Search