import React, { Component } from 'react';
//import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class TimeChart extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = props;
    // }

    // updateBarchar(newData) {
    //     console.log("BarChart: " + newData);
    //     this.setState(newData.data);
    // };

    render() {
        console.log("RENDERING...");
        return <h1>HOLAAAAA</h1>;
        /*return (
            <div>
                <h1>CHART</h1>
                <BarChart width={600} height={300} data={this.state.data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
        );*/
    }

};

// TimeChart.propTypes = {
//     data: React.PropTypes.array
// };

export default TimeChart;