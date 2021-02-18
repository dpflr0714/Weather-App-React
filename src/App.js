import React from 'react'
import Form from "./Form"

const apiKey = "b2dc6d0fb2c25c99d7b90a281b8cedd3"
// api.openweathermap.org/data/2.5/weather?q=Seoul&appid=b2dc6d0fb2c25c99d7b90a281b8cedd3
// handleSubmit(){
//   return (
//     <form onSubmit={this.}>
//       <input type="text" placeholder="City"/>
//       <input type="text" placeholder="State"/>
//       <button onClick={this.handleClick}>Search</button>
//     </form>
//   )
// }

class WeatherApp extends React.Component{
  constructor(){
    super()
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      state: "",
      city: "Placeholder",
      maxTemp: "test",
      minTemp: "test",
      temp: "test",
      humidity: "test"
    }
  }

  handleInputChanged = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  
  getWeather = (event) => {
    let obj;
    event.preventDefault(); //this stops from the page from reloading everytime you submit the search
    
    
    let response = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => obj = data)
      .then(() => 
      this.setState({
        maxTemp : obj.main.temp_max,
        minTemp: obj.main.temp_min,
        temp: obj.main.temp,
        humidity : obj.main.humidity
      }, console.log(obj.main)))
      .then(console.log(this.state.maxTemp))
     // .then(() => console.log(this.state.maxTemp))
  }
//temp, temp_max, temp_min, humidity

  componentDidMount(){
  }

  render(){
    return(
      <div>
            <div>
                <h1>Weather App</h1>
                <h3>Daily source of temperature, weather conditions and etc</h3>
            </div>
            <div>
                <form>
                    <input type="text" placeholder="City" name="city" onChange={this.handleInputChanged}/>
                    <input type="text" placeholder="State" name="state" onChange={this.handleInputChanged}/>
                   <button onClick={this.getWeather}>Search</button>
                   <p>{this.state.city} {this.state.state}</p>
                   <p>The Max: {this.state.maxTemp}</p>
                   <p>The Min: {this.state.minTemp}</p>
                   <p>Temp: {this.state.maxTemp}</p>
                   <p>Humidity: {this.state.maxTemp}</p>
                </form>
            </div>
        </div>
    )
  }
}

export default WeatherApp;
