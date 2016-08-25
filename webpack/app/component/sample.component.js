import React from 'react';

var props = {
        name: "me",
        age: "20"
    };

var Person = (
    <div {...props}>
        {/* 註解 */}
        <div>Name</div>
    </div>

);

module.exports = Person;