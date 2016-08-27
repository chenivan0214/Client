import React from 'react';

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

        this.state = {
            clickCount: 0
        };
    }

    onClickAdd(e) {
        this.setState({
            clickCount: ++this.state.clickCount
        });


        var nextId = this.props.data.length + 1,
            nextText = "No." + nextId,
            nextData = { id: nextId, text: nextText };

        this.props.data.push(nextData);
    }

    onClickRedure(e) {
        this.setState({
            clickCount: ++this.state.clickCount
        });

        if (this.state.clickCount !== 0) {
            this.props.data.pop();
        }
    }

    onClickClear() {
        this.props.data.length = 0;
        this.setState({
            clickCount: ++this.state.clickCount
        });
    }

    render() {
        return (
            <div>
                <div>
                    Click count:{this.state.clickCount}
                </div>
                <div>
                    <button type="button" onClick={this.onClickAdd}>Add</button>
                    <button type="button" onClick={this.onClickRedure}>Reduce</button>
                    <button type="button" onClick={this.onClickClear}>Clear</button>
                </div>
                <List data={this.props.data}/>
            </div>
        )
    }
};

Sample.propTypes = {
    data: React.PropTypes.array,
}

Sample.defaultProps = {
    data: [],
}

module.exports = Sample;