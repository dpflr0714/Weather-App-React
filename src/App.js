import React from 'react'
import CloudIcon from '@material-ui/icons/Cloud'
import TextField from '@material-ui/core/TextField'
import cloudy from './weatherIcons/cloudy.svg'
import clear from './weatherIcons/clear.svg'
import drizzle from './weatherIcons/drizzle.svg'
import rainy from './weatherIcons/rainy.svg'
import snowy from './weatherIcons/snowy.svg'
import thunder from './weatherIcons/thunder.svg'
import { Switch, Paper , Button , Typography , FormControlLabel , FormGroup , makeStyles, AppBar , Toolbar , IconButton , Box, Icon} from '@material-ui/core/'
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'


const apiKey = "b2dc6d0fb2c25c99d7b90a281b8cedd3"

class WeatherApp extends React.Component{
  constructor(){
    super()
    this.state = {
      state: "CA",
      city: "Los Angeles",
      maxTemp: "",
      minTemp: "",
      temp: "",
      humidity: "",
      condition : "",
      darkModeToggle: true,
      message: ""
    }
  }

  
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  setDarkMode = () => {
    this.setState({
      darkModeToggle : !this.state.darkModeToggle
    })
  }
  
  getWeather = (event) => {
    let obj;
    event.preventDefault(); //this stops from the page from reloading everytime you submit the search
    
    let response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}`)
      .then(response => {
        if(response.status >= 200 && response.status <= 299){
          return response.json()
        } else {
          throw Error(response.statusText) 
        }
      })
      .then(data => obj = data)
      .then(() => 
      this.setState({
        maxTemp : obj.main.temp_max,
        minTemp: obj.main.temp_min,
        temp: obj.main.temp,
        humidity : obj.main.humidity,
        condition : obj.weather[0].main.toLowerCase(),
      })).catch((error) => alert("Are you sure the place exists on Earth?"))
  }

  componentDidMount(){
    let initial;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}`)
      .then((response) => response.json())
      .then(data => initial = data)
      .then(() => 
      this.setState({
        maxTemp : initial.main.temp_max,
        minTemp: initial.main.temp_min,
        temp: initial.main.temp,
        humidity : initial.main.humidity,
        condition : initial.weather[0].main.toLowerCase(),
      },))
  }


  render(){

    const theme = createMuiTheme({
      palette: {
        type: this.state.darkModeToggle ? "dark" : "light",
      },
    });


    let weatherIcon;

    if(this.state.condition === "clear"){
    weatherIcon = clear
  } else if (this.state.condition === "clouds"){
    weatherIcon = cloudy
  } else if (this.state.condition === "drizzle"){
    weatherIcon = drizzle
  } else if (this.state.condition === "rain"){
    weatherIcon = rainy
  } else if (this.state.condition === "snow"){
    weatherIcon = snowy
  } else if (this.state.condition === "thunderstorm"){
    weatherIcon = thunder
  } else {
    weatherIcon = clear
  }

    return(
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "100vh" }}>
          <Box>
            <AppBar>
              <Toolbar style={{flexGrow : "1" , justifyContent: "space-between" }}>
                <IconButton>
                  <GitHubIcon/>
                </IconButton>
                <Button>About Me</Button>
              </Toolbar>
            </AppBar>
          </Box>
            <div style={{
              position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'
            }}>
                <div style={{
                  display : 'flex' , justifyContent: 'space-between'
                }}>
                    <h1>Weather App</h1>
                        <FormControlLabel control ={
                          <Switch checked={this.state.darkModeToggle} onChange={this.setDarkMode}/>}
                          label="Dark Mode"
                        />
                </div>
                <div>
                  <form>
                      <TextField variant="filled" size="small" label="City" name="city" onChange={this.handleInputChanged} fullWidth/>
                      <TextField variant="filled" size="small" label="State" name="state" onChange={this.handleInputChanged} fullWidth/>
                      <Button variant="contained" size="medium" startIcon={<CloudIcon/>} color="primary" onClick={this.getWeather} fullWidth>Search</Button>
                  </form>
                  <div style={{
                    display : 'flex' , justifyContent : 'space-between' 
                  }}>    
                    <div>        
                      <p style={{fontSize: 30}}>{this.state.city}, {this.state.state}</p>
                      <p>{Math.round((parseInt(this.state.maxTemp)-273)*1.8)+32} / {Math.round((parseInt(this.state.minTemp)-273)*1.8)+32}</p>
                      <p>Humidity: {this.state.humidity + "%"}</p>
                      <p>Condition: {this.state.condition}</p>
                    </div>
                    <div style={{
                      display : 'flex' , justifyContent : 'space-evenly' , alignContent : 'flex-start' , flexGrow : '1' , alignItems : 'center'
                    }}>    
                      <p style={{fontSize: 60}}>{Math.round((parseInt(this.state.temp)-273)*1.8)+32}</p>
                      <img src={weatherIcon} style={{height: '100px', width: 'auto'}}></img>
                    </div>
                  </div>
                </div>
            </div>
          </Paper>
        </ThemeProvider>
    )
  }
}

export default WeatherApp;