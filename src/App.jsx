import React from "react";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 1,
      name : 'webbrain',
      selected : ''
    };
  }
  plus = () => {
    if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
  };
  minus = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        {/* counter */}
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
        <hr />
        {/* input value */}
        <h1>{this.state.name}</h1>
        <input type="text" placeholder="name" onChange={(e) => this.setState({name: e.target.value})}/>
        <hr />
        {/* select value */}
        <h1>selected framework : {this.state.selected }</h1>
        <select onChange={(e)=> this.setState({selected: e.target.value})}>
          <option value=""></option>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
          <option value="Angular">Angular</option>
        </select>
      </div>
    );
  }
}
export default App;
