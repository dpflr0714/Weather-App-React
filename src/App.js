import React from 'react'
import Form from "./Form"
import Button from '@material-ui/core/Button'
import CloudIcon from '@material-ui/icons/Cloud'
import TextField from '@material-ui/core/TextField'

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
      state: "State",
      city: "City",
      maxTemp: "test",
      minTemp: "test",
      temp: "test",
      humidity: "test",
      condition : "",
      icon : "",
      imageSrc : ""
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
        humidity : obj.main.humidity,
        condition : obj.weather[0].main,
        icon : obj.weather[0].icon,
        imageSrc : "http://openweathermap.org/img/wn/" + obj.weather[0].icon + "@2x.png"
      }, console.log(obj.main)))
  }

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
                    <TextField variant="filled" size="small" label="City" name="city" onChange={this.handleInputChanged}/>
                    <TextField variant="filled" size="small" label="State" name="state" onChange={this.handleInputChanged}/>
                    <Button variant="contained" size="small" startIcon={<CloudIcon/>} color="primary" onClick={this.getWeather}>Search</Button>
                    <p>Here are the temperature for: {this.state.city}, {this.state.state}</p>
                    <p>The Max: {Math.round((parseInt(this.state.maxTemp)-273)*1.8)+32}</p>
                    <p>The Min: {Math.round((parseInt(this.state.minTemp)-273)*1.8)+32}</p>
                    <p>Temp: {Math.round((parseInt(this.state.temp)-273)*1.8)+32}</p>
                    <p>Humidity: {this.state.humidity + "%"}</p>
                    <p>Condition: {this.state.condition}</p> 
                </form>
                <img src={this.state.imageSrc} alt="Some Icon"></img>
            </div>
        </div>
    )
  }
}

export default WeatherApp;
