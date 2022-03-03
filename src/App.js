import React, { useState } from "react";
import axios from 'axios';
import './App.css';

export default function App() {
    //States to consult the location and the data that is gonna come back from the api
    const [location, setLocation] = useState('');
    const [data, setData] = useState({
        name: '-',
        main: {
            temp: '-',
            humidity: '-'
        }
    });

    //consult API with axios
    const consultData = async () => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=86bcfce152dd714021901d8484a429ac`);
        console.log(response.data);
        setData(response.data);
        setLocation('');
    }

    //input to be able to add the city that we gonna consult
    const handleChange = (event) => {
        setLocation(event.target.value);
    }
    //show the main data on the app

    //Style the app
    return (
        <>
            <div className="container">
                <div className="searchCity">
                    <input type='text' onChange={handleChange} />
                    <button onClick={consultData}>Search</button>
                </div>

                <div className="top">
                    <div className="city">
                        City: {data.name}
                    </div>
                    <div className="temperature">
                        temperature: {data.main.temp}
                    </div>
                    <div className="description">
                    </div>
                    <div className="humidity">
                        humidity: {data.main.humidity}%
                    </div>
                </div>
                <div className="bottom">
                </div>
            </div>
        </>
    )
}