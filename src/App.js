
import { useState } from 'react';
import './App.css';
import FlightListTab from './components/flightList/FlightListTab';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Search from './components/search/Search';

function App() {
  const [searchData, setSearchData] = useState('');

  const handleSearchChange = (term) => {
    setSearchData(term);
  };
  return (
    <>
      <Header />
      <Search onSearchChange={handleSearchChange}/>
      <FlightListTab searchData={searchData}/>
      <Footer />
    </>
  );
}

export default App;
