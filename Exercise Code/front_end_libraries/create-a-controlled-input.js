class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
    this.handleChange = this.handleChange.bind(this);
    // change code above this line
  }
  // change code below this line
  handleChange(event) {
    console.log( "event: " + event.target.value)
    let temp = event.target.value;
    this.setState(state => ({
      input: temp
    }));
  }
  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}

          <input value={this.state.input} onChange={this.handleChange}></input>
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

