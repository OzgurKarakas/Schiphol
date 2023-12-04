
import './App.css';
import FlightListTab from './components/flightList/FlightListTab';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Search from './components/search/Search';

function App() {
  return (
    <>
      <Header />
      <Search />
      <FlightListTab />
      <Footer />
    </>
  );
}

export default App;
