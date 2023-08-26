import './latencyComponent.css';
import React,{ Component} from 'react';

class LatencyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            latency: [],
        };
    }
    

    componentDidMount() {
        const date = new Date();
        const milisec = date.getMilliseconds();
        console.log({milisec});

        const ws = new WebSocket('ws://localhost:55455');

        ws.onmessage =  (event) => {
            const data = event.data;
            console.log('Data received from server:' + data );
            const date = new Date().getTime();
            console.log(data);
            console.log(date);
            const timeDifference = date - data ;

            this.setState({ latency: timeDifference});
        } 

    }


    render () {
        const {latency} = this.state;
        return(
            <div className='latency'>
                <p>Latency</p>
                {latency ? <p>{latency}</p> : <p>Loading...</p>}
            </div>
        );
    }
}

export default LatencyComponent;
