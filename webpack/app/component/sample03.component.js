"use strict";

import React from 'react';
import {Link, IndexLink} from 'react-router';

const Sample = (props) => (
        <div>
            <p>-<IndexLink to="/">Home</IndexLink></p>
            <p>-<Link to="/store">Store</Link></p>
            <p>-<Link to="/store/me">Store Has Name</Link></p>
            <br/>
            <div>
                {props.children}
            </div>
        </div>
 
    )

Sample.propTypes = {
    children: React.PropTypes.object,
};

const Home = (props) => (
        <div>
            I am Home of Sample03
        </div>
    )

const Store = (props) => (
        <div>
            I am Store of Sample03
        </div>
    )

const StoreHasName = (props) => (
        <div>
            I am {props.params.name} store of Sample03
        </div>
    )

StoreHasName.propTypes = {
    params: React.PropTypes.object,
};

module.exports = {
    Sample03: Sample,
    Home: Home,
    Store: Store,
    StoreHasName: StoreHasName
};