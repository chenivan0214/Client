"use strict";

import React from 'react';
import GlobalCSS from '!style!css!../resource/css/global.css';
import ButtonCSS from '!style!css!../resource/css/button.css';
import LogoImg from '!url!../resource/img/react.png';

const List = (props) => (
        <div>
            <ul>
                {
                    props.data.map((item) => (
                        <li key={item.id} data-id={item.id}>{item.text}</li>
                    ))
                }
            </ul>
        </div>
    )

class Sample extends React.Component {
    constructor(props) {
        super(props);

        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickRedure = this.onClickRedure.bind(this);
        this.onClickClear = this.onClickClear.bind(this);
        this.onClickRemove = this.onClickRemove.bind(this);

        this.state = {
            dataCount: 0
        };
    }

    onClickAdd(e) {
        let thisObj = this;
        let objAjaxOption = {
                method: "GET",
                url: "./ajax/sample2_data.json",
                success: function(data) {
                    _.map(data.data, function(item) {
                        let dataCount = thisObj.state.dataCount + 1,
                            nextId = thisObj.props.data.length + 1,
                            nextText = dataCount + "-" + item,
                            nextData = { id: nextId, text: nextText };

                        thisObj.props.data.push(nextData);

                        thisObj.setState({
                            dataCount: ++thisObj.state.dataCount
                        });
                    });
                }
            };

        $.ajax(objAjaxOption);
    }

    onClickRedure(e) {
        this.setState({
            dataCount: ++this.state.dataCount
        });

        if (this.state.dataCount !== 0) {
            this.props.data.pop();
        }
    }

    onClickClear() {
        this.props.data.length = 0;
        this.setState({
            dataCount: ++this.state.dataCount
        });
    }

    onClickRemove() {
    }

    componentWillMount() {
        console.log('Init: componentWillMount');
    }

    componentDidMount() {
        console.log('Init: componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('modify: componentWillReceiveProps');
        console.log(nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('modify: shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('modify: componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('modify: componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const bodyStyle = {marginLeft: "260px"};

        return (
            <div>
                <div><img src={LogoImg}/></div>
                <br/>
                <div style={bodyStyle}>
                    <span className={ButtonCSS.normal + " " + GlobalCSS.color_red}>
                        data count:{this.state.dataCount}
                    </span>
                    <br/>
                    <button type="button" onClick={this.onClickAdd}>Add</button>
                    <button type="button" onClick={this.onClickRedure}>Reduce</button>
                    <button type="button" onClick={this.onClickClear}>Clear</button>
                    <button type="button" onClick={this.onClickRemove}>Remove</button>
                    <List data={this.props.data}/>
                </div>
            </div>
        )
    }
};

Sample.propTypes = {
    data: React.PropTypes.array
}

Sample.defaultProps = {
    data: []
}

export default Sample;