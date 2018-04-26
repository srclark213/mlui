import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SliderInput from './slider-input.component';
import Gauge from './gauge.component';
import AppBar from 'material-ui/AppBar';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import '../styles/app.css';

class App extends Component {

  state = {};

  constructor(props) {
    super(props);

    this.state.sliders = Array.apply(null, Array(20)).map(() => 60);
  }

  handleSlider = (index, value) => {
    let sliders = [...this.state.sliders];
    sliders[index] = value;
    this.setState({sliders});
  };

  render() {

    var containerStyle = {
      width: '800px',
      margin: '0 auto'
    }

    return (
      <MuiThemeProvider>
        <div className="App" style={containerStyle}>
          <AppBar
            title="Machine Learning Stuffz"
            showMenuIconButton={false}
          />
          <div className="App-intro">
            <Card>
              <CardTitle title="Inputs" />
              <CardText>
                {this.state.sliders.map((name, index) => {
                  return <div><SliderInput label={"Input "+(index+1)} value={this.state.sliders[index]} onChange={(event, value) => this.handleSlider(index, value)} /></div>;
                })}
              </CardText>
            </Card>
            <Card>
              <CardText>
                <Gauge value={75} />
              </CardText>
            </Card>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
