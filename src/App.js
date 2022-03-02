import React, { useState } from "react";
import axios from 'axios';

export default function App() {
    //States to consult the location and the data that is gonna come back from the api
    const [location, setLocation] = useState('');
    const [data, setData] = useState({});

    //consult API with axios
    const consultData = async () => {
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
                <input type='text' onChange={handleChange} />
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
                    <button onClick={consultData}>CLICK ME</button>
                </div>
            </div>
        </>
    )
}