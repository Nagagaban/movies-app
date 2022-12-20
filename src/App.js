import { React, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getApi = async e => {

    // e.preventDefault();
    setLoading(true);
    console.log(loading);

    const apiKey ='api_key=118a1dc490ea54a28867c254a344c81c';
    const baseUrl ='https://api.themoviedb.org/3';
    const apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&' + apiKey;
    // const api_key = '23afab98195ae0b0ceb09b0f03a46162';
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    try {
      const res = await axios.get(apiUrl)
      const myArray = [1,2,3];
      setMovies(myArray);
      // setMovies(res.data.results);
      // console.log(res);
      // console.log(res.data);
      console.log(res.data.results);
      console.log(res.data.results[0]);
      console.log(typeof res.data.results);
    } catch(error) {
      console.log("Error message: ", error)
    } finally {
      setLoading(false)
    }

    console.log(loading);
    console.log(movies);
  }

  return (
    <div>
      <h1>Movies</h1>
      <button onClick={() => {getApi()}}>Fetch API</button>
    </div>
  )
}

export default App;
