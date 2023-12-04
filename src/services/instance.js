import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.schiphol.nl/public-flights',
  headers: {
    'app_id': process.env.REACT_APP_SCHIPHOL_APP_ID,
    'app_key': process.env.REACT_APP_SCHIPHOL_APP_KEYS,
    'Accept': 'application/json',
    'ResourceVersion': 'v4'
  },
});