import React from 'react';

var Sample = React.createClass({
        render: function() {
            return (
                <div>
                    <SampleChild data={this.props.data}/>
                </div>
            );
        }
    });

var SampleChild = React.createClass({
        render: function() {
            return (
                <div>
                    <h1>It is {this.props.data.firstName} {this.props.data.lastName}.</h1>
                </div>
            );
        }
    });

module.exports = Sample;