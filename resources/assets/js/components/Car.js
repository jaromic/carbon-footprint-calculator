import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { connect } from 'react-redux';

import * as actions from '../actions';

class Car extends Component {
  handleSubmit(event) {
    event.preventDefault();

    let miles = parseInt(this.refs.miles.value);

    let mpg = parseInt(this.refs.mpg.value);

    this.props.calcEmissions(miles, mpg);
  }

  emissions() {
    if (this.props.cars && this.props.cars.emissions) {
      return this.props.cars.emissions / 1000000
    } else {
      return 0
    }
  }

  save() {
    axios.post('/api/activities', {cars: this.props.cars})
        .then(({data}) => {
          console.log(data);
        })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <p>Emissions from  driving</p>

                <p>Tons of CO2e: {this.emissions()}</p>
              </div>

              <div className="panel-body">
                Enter your emissions from driving 

                <form onSubmit={this.handleSubmit.bind(this)}>
                  <p className="form-group">
                    <label>Miles</label>
                    <input type="text" ref="miles" className="form-control" />
                  </p>

                  <p className="form-group">
                    <label>MPG</label>
                    <input type="text" ref="mpg" className="form-control" />
                  </p>

                  <button type="submit" className="btn btn-primary">Enter</button>

                  <button className="btn btn-danger" onClick={this.save()}>Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return { cars: state.cars };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    calcEmissions: actions.calcEmissions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Car);