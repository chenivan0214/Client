import React from 'react';

const List = (props) => (
        <div>
            Click count:{props.clickCount}
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

        this.onClick = this.onClick.bind(this);

        this.state = {
            isClick: false,
            opText: "Add",
            clickCount: 0
        };
    }

    onClick(e) {
        if (this.state.isClick) {
            this.setState({
                isClick: false,
                opText: "Add",
                clickCount: ++this.state.clickCount
            });
        } else {
            this.setState({
                isClick: true,
                opText: "Reduce",
                clickCount: ++this.state.clickCount
            });
        }
    }

    render() {
        if (this.state.isClick) {
            var nextId = this.props.data.length + 1,
                nextText = "No." + nextId,
                nextData = { id: nextId, text: nextText };

            this.props.data.push(nextData);
        } else {
            if (this.state.clickCount !== 0
                && this.state.clickCount % 3 === 0) {
                this.props.data.pop();
            }
        }

        return (
            <div>
                <List data={this.props.data} clickCount={this.state.clickCount}/>
                <button type="button" onClick={this.onClick}>{this.state.opText}</button>
            </div>
        )
    }
};

module.exports = Sample;