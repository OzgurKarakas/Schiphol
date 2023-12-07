
import { useState } from 'react';
import './App.css';
import FlightListTab from './components/flightList/FlightListTab';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Search from './components/search/Search';

function App() {
  const [searchData, setSearchData] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const handleSearchChange = (term) => {
    setSearchData(term);
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };
  return (
    <>
      <Header />
      <Search onSearchChange={handleSearchChange} onDayChange={handleDayChange}/>
      <FlightListTab searchData={searchData} selectedDay={selectedDay}/>
      <Footer />
    </>
  );
}

export default App;
