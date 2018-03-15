import React, { Component } from 'react';



export default class Car extends Component {
  handleSubmit(event) {
    event.preventDefault();

    let miles = parseInt(this.refs.miles.value);

    let mpg = parseInt(this.refs.mpg.value);

    this.props.dispatch(calcEmissions(miles, mpg));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">Emissions from  driving</div>

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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
