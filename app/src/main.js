import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './chart';

class Main extends React.Component {
    render() {
        return (
            <Chart></Chart>
        );
    }
}
const app = document.getElementById('app');
ReactDOM.render(<Main/>, app);