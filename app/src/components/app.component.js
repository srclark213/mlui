import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SliderInput from './slider-input.component';

import DropdownInput from './dropdown-input.component';
import Gauge from './gauge.component';
import AppBar from 'material-ui/AppBar';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import InitialState from '../config/initialState.json';
import { debounce } from '../utilities';

import '../styles/app.css';

class App extends Component {

  state = {
    sliders: [],
    dropdowns: []
  };

  constructor(props) {
    super(props);

    this.state = InitialState;
    this.state.gauge = 0;
  }

  handleSlider = (id, value) => {
    let sliders = [...this.state.sliders];
    let index = sliders.findIndex(item => item.id === id);
    sliders[index].value = value;
    this.setState({sliders});

    this.debouncedApiHit();
  };

  handleDropdown = (id, value) => {
    let dropdowns = [...this.state.dropdowns];
    let index = dropdowns.findIndex(item => item.id === id);
    dropdowns[index].value = value;
    this.setState({dropdowns});

    this.debouncedApiHit();
  }

  fetchResult = () => {
    let dropdowns = [...this.state.dropdowns];
    let sliders = [...this.state.sliders];
    let inputs = dropdowns.map(dropdown => { return {id: dropdown.id, value: dropdown.value }})
      .concat(sliders.map(slider => { return { id: slider.id, value: slider.value }}))
      .concat([{id: 5, value: 0}])
      .sort((item1, item2) => item1.id - item2.id)
      .map(item => item.value);

    var url = "http://localhost:5000/api/process-inputs?inputs="+inputs.join(",");
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({ gauge: data.result }));
  }

  debouncedApiHit = debounce(this.fetchResult, 750);

  render() {

    var containerStyle = {
      width: '1200px',
      margin: '0 auto'
    }

    return (
      <MuiThemeProvider>
        <div className="App" style={containerStyle}>
          <AppBar
            title="Success Prediction Engine"
            showMenuIconButton={false}
          />
          <div className="App-intro">
            <Card>
              <CardTitle title="Inputs" />
              <CardText>
                <div style={{display: "flex"}}>
                  <div style={{flex: "50%", paddingTop: "25px" }}>
                  {this.state.sliders.map((slider) => {
                    return <div key={slider.id}><SliderInput label={slider.label} value={slider.value} minVal={slider.minVal} maxVal={slider.maxVal} onChange={(event, value) => this.handleSlider(slider.id, value)} /></div>;
                  })}
                  </div>

                  <div style={{flex: "50%" }}>
                  {this.state.dropdowns.map((obj) => {return <DropdownInput key={obj.id} options={obj.options} value={obj.value} label={obj.label} onChange={(event, index, value) => this.handleDropdown(obj.id, value)} />})}
                  </div>
                </div>
              </CardText>
            </Card>
            <Card>
              <CardText>
                <Gauge value={this.state.gauge} />
              </CardText>
            </Card>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
