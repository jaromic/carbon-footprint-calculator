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
    if (this.props.emissionData && this.props.emissionData.emissions) {
      return this.props.emissionData.emissions / 1000000
    } else {
      return 0
    }
  }

  handleInputChange() {
    this.props.updateCarForm({
      distance: this.refs.miles.value,
      mpg: tis.refs.mpg.value
    })
  }

  submitData() {
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
                    <input type="text" ref="miles" className="form-control" 
                           value={this.props.formData.distance}
                           onChange={this.handleInputChange.bind(this)} />
                  </p>

                  <p className="form-group">
                    <label>MPG</label>
                    <input type="text" ref="mpg" className="form-control"
                            value={this.props.formData.mpg} 
                            onChange={this.handleInputChange.bind(this)}/>
                  </p>

                  <button type="submit" className="btn btn-primary">Enter</button>

                  
                </form>

                <button className="btn btn-danger" onClick={this.submitData()}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return { emissionData: state.cars.emissionData, formData: state.cars.formData };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    calcEmissions: actions.calcEmissions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Car);