"use strict";

import React from 'react';

const Sample = React.createClass({
        getInitialState: function() {
            return {isReload: false};
        },
        handleClick: function(event) {
            this.setState({isReload: !this.state.isReload});
        },
        render: function() {
            var text = null;

            if (this.state.isReload)
                text = "Default";
            else
                text = "Not Default";

            return (
                <div onClick={this.handleClick}>
                    <SampleChild data={this.props.data} text={text}/>
                </div>
            );
        }
    });

const SampleChild = React.createClass({
        render: function() {
            return (
                <span>
                    <h1>It is {this.props.data.firstName} {this.props.data.lastName}({this.props.text}).</h1>
                </span>
            );
        }
    });

export default Sample;