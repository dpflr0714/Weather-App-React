import React from "react"

function Form(props){

    console.log(props)
    
    return (
        <div>
            <div>
                <h1>Weather App</h1>
                <h3>Daily source of temperature, weather conditions and etc</h3>
            </div>
            <div>
                <form>
                    <input type="text" placeholder="City"/>
                    <input type="text" placeholder="State"/>
                   <button onClick={props.getWeather}>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Form