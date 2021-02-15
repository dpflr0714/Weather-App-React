import React from 'react'
import Form from "./Form"

const apiKey = "b2dc6d0fb2c25c99d7b90a281b8cedd3"

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
      city: ""
    }
  }

  handleInputChanged = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  getWeather = (event) => {
    event.preventDefault(); //this stops from the page from reloading everytime you submit the search
    alert(this.state.city + ", " + this.state.state)
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
                    <input type="text" placeholder="City" name="city" onChange={this.handleInputChanged}/>
                    <input type="text" placeholder="State" name="state" onChange={this.handleInputChanged}/>
                   <button onClick={this.getWeather}>Search</button>
                   <p>{this.state.city} {this.state.state}</p>
                </form>
            </div>
        </div>
    )
  }
}


// class WeatherApp extends React.Component {
//     constructor(props){
//       super(props)
//       this.state={
//         error: null,
//         isLoaded: false,
//         items: []
//       };
//     }
    
//     componentDidMount(){
//       fetch('api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}')
//       .then(res => res.json()) //I think this formats the file into json?
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded : true,
//             items: result.items
//           });
//         },

//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
          
//       )
//     }

//     render(){
//       const {error, isLoaded, items} = this.state;
//       if(error){
//         return <div>
//           Error: {error.message}
//         </div>
//       } else if (!isLoaded) {
//         return <div>Loading...</div>
//       } else {
//         return (
//           <ul>
//             {items.map(item => (
//               <li key={item.id}>
//                 {item.name} {item.price}
//               </li>
//             ))}
//           </ul>
//         )
//       }
//     }

// }

export default WeatherApp;
