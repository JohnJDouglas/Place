import React, { Component } from 'react';
import D3 from "d3";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { currentColor: "#FFFFFF", currentTimeout: 10, ready: true }
  }
  onUpdate(currentColor) {
    this.setState({ currentColor: currentColor }) 
  }
  readyUpdate() {    
    this.setState({ ready: this.state.ready === true ? this.state.ready = false : this.state.ready = true }) 
    console.log("this.state.ready="+this.state.ready)
  }
  render() {
    return (
      <div className="panel-container">
        <div className="panel-top">
          <div className="div-title">r/Place Remake</div>
          <div className="div-author">App by John Douglas</div>
          <div className="div-settings">
            <div className="div-settings-inner"></div>
          </div>
        </div>
        <div className="panel-middle">
          <SVG currentColor={ this.state.currentColor } readyUpdate={ this.readyUpdate.bind(this) }/>
        </div>
        <div className="panel-bottom">
          <div className="panel-bottom-inner">
            <ColorDisplay currentColor={ this.state.currentColor }/>
            <TimeDisplay currentTimeout={ this.state.currentTimeout } ready={ this.state.ready }/>
          </div>
          <div className="panel-bottom-inner">
            <ColorPanes onUpdate={ this.onUpdate.bind(this) }/>
          </div>
        </div>
      </div>
    );
  }
}

class ColorDisplay extends Component {
  render() {
    return <div className="div-color-display" style={{background: this.props.currentColor, color: this.props.currentColor === "#000000" || this.props.currentColor === "#0000FF" ? "#FFFFFF" : "#000000" }}>{this.props.currentColor}</div>
  }
}

class TimeDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = { secondsRemaining: this.props.currentTimeout, color: "green" }
  }
  tick = () => {
    if(this.props.ready === false) {
      this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
      if (this.state.secondsRemaining <= 0) {
        clearInterval(this.interval);
      }
      // Reset loop
      if (this.state.secondsRemaining === 0) {
        console.log("2")
        //this.setState({ secondsRemaining: this.props.currentTimeout })
        //this.interval = setInterval(this.tick, 1000);
      }
    }
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    this.state.secondsRemaining === this.props.currentTimeout ? this.state.color = "green" : this.state.color = "none"
    let available = this.state.secondsRemaining === this.props.currentTimeout ? true : false
    let status = available ? "Available" : this.state.secondsRemaining === 1 ? this.state.secondsRemaining +" second" : this.state.secondsRemaining +" seconds"
    //return <div className="div-time-display" style={{ background: this.state.color }}>{ this.state.secondsRemaining === 1 ? this.state.secondsRemaining +" second" : this.state.secondsRemaining +" seconds" }</div>
    return <div className="div-time-display" style={{ background: this.state.color }}>{ status }</div>
  }
}

class SVG extends Component {
  constructor() {
    super()
    this.state = { size: 20, x: 20, y: 20 }
  }
  onUpdate(x, y) {
    this.setState({ x: x, y: y }) 
  }
  updateReady() {
    this.props.readyUpdate()
  }
  render() {
    let items = [];
    for (let i = 0; i < 20; i++) {
      items.push(i);
    }
    return (
      <div className="div-model">
        <svg className="svg-model">
          { items.map((item, i) => <Square key={i+0} x={i*this.state.size+1} y={0*this.state.size+1} currentColor={this.props.currentColor} size={this.state.size} onUpdate={this.onUpdate.bind(this)} ready={this.updateReady.bind(this)}></Square>) }
          { items.map((item, i) => <Square key={i+1} x={i*this.state.size+1} y={1*this.state.size+1} currentColor={this.props.currentColor} size={this.state.size} onUpdate={this.onUpdate.bind(this)} ready={this.updateReady.bind(this)}></Square>) }
          { items.map((item, i) => <Square key={i+2} x={i*this.state.size+1} y={2*this.state.size+1} currentColor={this.props.currentColor} size={this.state.size} onUpdate={this.onUpdate.bind(this)} ready={this.updateReady.bind(this)}></Square>) }
          { items.map((item, i) => <Square key={i+3} x={i*this.state.size+1} y={3*this.state.size+1} currentColor={this.props.currentColor} size={this.state.size} onUpdate={this.onUpdate.bind(this)} ready={this.updateReady.bind(this)}></Square>) }
          { items.map((item, i) => <Square key={i+4} x={i*this.state.size+1} y={4*this.state.size+1} currentColor={this.props.currentColor} size={this.state.size} onUpdate={this.onUpdate.bind(this)} ready={this.updateReady.bind(this)}></Square>) }
          { items.map((item, i) => <Square key={i+5} x={i*this.state.size+1} y={5*this.state.size+1} currentColor={this.props.currentColor} size={this.state.size} onUpdate={this.onUpdate.bind(this)} ready={this.updateReady.bind(this)}></Square>) }
          { items.map((item, i) => <Square key={i+6} x={i*this.state.size+1} y={6*this.state.size+1} currentColor={this.props.currentColor} size={this.state.size} onUpdate={this.onUpdate.bind(this)} ready={this.updateReady.bind(this)}></Square>) }
          { items.map((item, i) => <Square key={i+7} x={i*this.state.size+1} y={7*this.state.size+1} currentColor={this.props.currentColor} size={this.state.size} onUpdate={this.onUpdate.bind(this)} ready={this.updateReady.bind(this)}></Square>) }
          { items.map((item, i) => <Square key={i+8} x={i*this.state.size+1} y={8*this.state.size+1} currentColor={this.props.currentColor} size={this.state.size} onUpdate={this.onUpdate.bind(this)} ready={this.updateReady.bind(this)}></Square>) }
          { items.map((item, i) => <Square key={i+9} x={i*this.state.size+1} y={9*this.state.size+1} currentColor={this.props.currentColor} size={this.state.size} onUpdate={this.onUpdate.bind(this)} ready={this.updateReady.bind(this)}></Square>) }
          <SquareOverlay size={this.state.size} x={this.state.x} y={this.state.y}/>
        </svg>
      </div>
    );
  }
}

class Square extends Component {
  constructor() {
    super()
    this.state = { color: "#FFFFFF", borderColor: "none" }
  }
  render() {
    return (
      <rect width={this.props.size} height={this.props.size} x={this.props.x} y={this.props.y} className="svg-square" onClick={ this.updateReady.bind(this) }
      style={{ fill: this.state.color, stroke: this.state.borderColor }} onMouseOver={ this.update.bind(this, this.props.x, this.props.y) }></rect>
    );
  }
  /*
  handleClick = () => {
    this.setState({ color: this.props.currentColor })
    this.updateReady()
  }
  */
  update(e, f) {
    this.props.onUpdate(e, f)
  }
  updateReady() {
    console.log("1")
    this.setState({ color: this.props.currentColor })
    this.props.ready()
  }
}

class SquareOverlay extends Component {
  render() {
    return <rect className="svg-overlay" width={this.props.size-1} height={this.props.size-1} x={this.props.x+0.5} y={this.props.y+0.5}></rect>
  }
}

class ColorPanes extends Component {
  constructor(props) {
    super(props)
    this.state = { currentColor: "#000000" }
  }
  update(e) {
    this.props.onUpdate(e)
  }
  render() {
    var colors = ["#FF0000","#FFA500","#FFFF00","#90EE90","#008000","#87CEFA","#0000FF","#FF69B4","#9400D3","#000000","#FFFFFF"];
    var colorList = colors.map(function(color, i) {
      return <button  key={"pane-color-"+i} className="btn-color" style={{background: color}} onClick={this.update.bind(this, color)}></button>
    }, this)
    return <div className="pane-color-container">{ colorList }</div>
  }
}

export default App;
