import React from 'react';

import "./app.scss"

import TopSection from "./components/top/index.jsx"
import BottomSection from "./components/bottom/index.jsx"

import axios from "axios"

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        
      };
  }

  componentDidMount() {
    
    

    const URL = 'http://api.weatherstack.com/.netlify/functions/weather';
    const {eventEmitter} = this.props;
    
    axios
    .get(URL)
    .then (res => {
        return res.data;
    })
    
    .then((data) => {
        this.setState({temperature: data.current.temperature,
          name: data.location.name,
          humidity: data.current.humidity,
          visibility: data.current.visibility,
          weather_icons: data.current.weather_icons, 
          current: data.current.observation_time});
    })
    
    .catch(error => {
      if(error) console.error("API not found ",error);
    });

    eventEmitter.on("UpdateWeather", (data) => {
        console.log("locationName:", data);
    } )
  }


  render(){
    const {temperature, name, humidity, visibility, weather_icons, current} = this.state;
    return (
      <div className = "app-Container">
        <div className = "main-Container">
          <div className = "Top-Section">
            <TopSection temperature={temperature}
              name={name}
              humidity={humidity}
              visibility={visibility}
              weather_icons={weather_icons}
              eventEmitter = {this.props.eventEmitter}
            />
          </div>
          <div className = "Bottom-Section">
            <BottomSection current ={current}/>
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
