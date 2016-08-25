import React from 'react';

var attrs = {
       name: "me"
    };
var Person = (
    <div {...attrs} _age=>
        {/* 註解 */}
        <div>Name</div>
    </div>

);

module.exports = Person;