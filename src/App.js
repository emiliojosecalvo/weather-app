import React, { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

                <div className="top">
                    <div className="city">
                        <p>City: {data.name}</p>
                    </div>
                    <div className="temperature">
                        <p>Temperature: {data.main.temp}</p>
                    </div>
                    <div className="humidity">
                        <p>Humidity: {data.main.humidity} %</p>
                    </div>
                </div>
                <div className="searchCity">
                    <input type='text' onChange={handleChange} placeholder='Press enter to search' onKeyDown={(e) => (e.key === 'Enter') && consultData()} />
                </div>
            </div>
        </>
    )
}