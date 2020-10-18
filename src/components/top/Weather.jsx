import React from "react"

//import SunImage from "../../Resources/images/Sunn.png"


class Weather extends React.Component {
    constructor(){
        super();
        this.state = {
            
        };
    }    
    render(){
        const {name, temperature, humidity, visibility, weather_icons } = this.props;
        return(
            <div className="Weather-container">
                <div className="header">{name} </div>
                <div className="inner-container">
                    <div className = "image">
                        <img src={weather_icons} alt="Sun" />
                    </div>
                    <div className="currentWeather">{temperature}°</div>
                </div>
                <div className="footer">{humidity} {visibility}</div>
            </div>
            

        );
    }

}

export default Weather