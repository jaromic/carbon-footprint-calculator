import React, { Component } from 'react';

export default class House extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Emissions from household electricity and heatin</div>

                            <div className="panel-body">
                                Enter your house emissions below
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
