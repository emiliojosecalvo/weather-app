import React, { useState } from "react";

export default function App() {
    //States to consult the location and the data that is gonna come back from the api

    // https://api.openweathermap.org/data/2.5/weather?q=dublin&APPID=86bcfce152dd714021901d8484a429ac

    //consult API with axios

    //input to be able to add the city that we gonna consult

    //show the main data on the app

    //Style the app
    return (
        <>
            <div className="container">
                <div className="top">
                    <div className="city">
                        Dublin
                    </div>
                    <div className="temperature">
                        10 C
                    </div>
                    <div className="description">
                        Raining
                    </div>
                </div>
                <div className="bottom">

                </div>
            </div>
        </>
    )
}