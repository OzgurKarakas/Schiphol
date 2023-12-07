import React, {useState } from 'react';
import Departures from './Departures';
import Arrivals from './Arrivals';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import './style.css';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const FlightList = ({ searchData,selectedDay }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 

  return (
    <Box className='w-full mt-14' >
      <Box className="tabs-container space-x-16" sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} >
        <Tabs sx={{ '.MuiTabs-indicator': { backgroundColor: '#1b60db' }, '& .MuiTab-root': { fontFamily: "'Sawarabi Gothic', sans-serif", color: '#1b60db' } }} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Departures" {...a11yProps(0)} />
          <Tab label="Arrivals" {...a11yProps(1)} />
        </Tabs>
        <Box className='hidden sm:flex'>
          <div></div>
        </Box>
      </Box>
      <Box className='tabs-content bg-[#f3f7fd] pl-[1%] xl:pl-[19%] pr-[1%] xl:pr-[19%]'>
        <CustomTabPanel value={value} index={0}>
          <Departures searchData={searchData} selectedDay={selectedDay}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Arrivals searchData={searchData} />
        </CustomTabPanel>
      </Box>
    </Box>
  )
}

export default FlightList