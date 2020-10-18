import React from "react"
import "./style.scss"
import Weather from "./Weather.jsx"

import {Manager, Reference, Popper} from  "react-popper"; 

class TopSection extends React.Component {
    constructor(){
        super();
        this.state={
            isSelectLocation: false
        };
    }
onToggleSelectLocation(){
    this.setState((prevstate) => ({isSelectLocation: !prevstate.isSelectLocation }));
}

onLocationNameChange(e){
    this.setState({locationName: e.target.value})
}

onSelectCity(){
    const {locationName} = this.state;
    const {eventEmitter} = this.props;
    this.setState({isSelectLocation: false});

    eventEmitter.emit( "UpdateWeather", locationName );
}

    render(){
        const {isSelectLocation}= this.state;
                
        return (
                    <div className = "top">
                        <div className = "title"> WeatherUp </div>
                        <Weather  {...this.props}/>
                        
                        <Manager>
                            <Reference>
                                {({ref}) => { 
                                    return(
                                    <button className="btn btn-slelct-location"
                                    ref={ref}
                                    onClick = {this.onToggleSelectLocation.bind(this)}>
                                                Select-Location
                                    </button>)}
                                }
                            </Reference>
                            <Popper placement = "top">
                                {({ref, style, arrowProps, placement}) => {
                                    return (isSelectLocation && (
                                    
                                        <div className = "popup-container" ref = {ref} style = {{style, top: "268px"}} data-placement = {placement}>
                                        
                                            <div className="form-container">
                                                <label htmlFor="location-name">Location-Name</label>
                                                <input id="locationName" type="text" placeholder="cityName" onClick={this.onLocationNameChange.bind(this)}/>
                                                <button className = "btn btn-slelct-location" onClick={this.onSelectCity.bind(this)}>slelct</button>

                                            </div>

                                            <div ref = {arrowProps.ref} style = {arrowProps.style}/>
                                    
                                        </div>
                                    ))
                                }}
                            </Popper>
                        </Manager>

                    </div>
                );
    }
}
export default TopSection