import React from "react"
import "./style.scss"
import Location from './location.jsx'

class BottomSection extends React.Component {
    constructor(){
        super();
        this.state={};
    }
    render(){        
        return(
                <div className = "Bottom-Container">
                    <Location/>
               </div>
        );
                
    }
}
export default BottomSection