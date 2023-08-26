import React,{ Component } from "react";
import './addressRequest.css'

class addressRequest extends Component {
    constructor(props){
        super(props);
        this.state = {
            ipData: [],
        };
    }
    componentDidMount() {
        // below is the props to differentiate ipv4 and ipv6
        // props short for porperties 
        const {addressType} = this.props;
        const url = addressType === "ipv6" ? 'https://api64.ipify.org?format=json' : 'https://api.ipify.org?format=json';
        // this is the api call for ipv4
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("IP data received:", data);
                this.setState({ ipData: data });
            })
            .catch((error) => console.log(error));
        //why console not working?   
    }

    render(){
        const {ipData} = this.state;

        return(
            <div className="addressRequest">
                <p>IP Address</p>
                {ipData ? <p>{ipData.ip}</p> : <p>Loading...</p>}

            </div>
        );
    }
}

export default addressRequest;