export default function App() {

    // https://api.openweathermap.org/data/2.5/weather?q=dublin&APPID=86bcfce152dd714021901d8484a429ac
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