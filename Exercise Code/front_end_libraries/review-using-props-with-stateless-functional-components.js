class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line

class Camper extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
        hello
          <p>
            {this.props.name}
          </p>
        </div>
        
    );
  }
};
Camper.defaultProps = {name:'CamperBot'};
Camper.propTypes = {name: PropTypes.string.isRequired};
