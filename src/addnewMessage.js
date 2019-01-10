import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddnewMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div >
                <div className="top">
                    <h3>Messages</h3>
                    <Link to="/">Back</Link>
                </div>
            </div>
        );
    }
}

export default AddnewMessage;