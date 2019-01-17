import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getMessages } from './actions'
import { bindActionCreators } from 'redux';

import './App.css';

class Home extends Component {

  componentDidMount() {
    this.props.getMessages();
  }


  renderMessages = ({ messages }) => {
    if (messages) {
      return messages.map((item) => {
        return (
          <div key={item.id} className="item-list">
            <div className="title">{item.title}</div>
            <div className="sender">Message from:<span>{item.from}</span></div>
            <div className="body">{item.message}</div>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div className="Home">
      <div className="top">
        <h3>Messages</h3>
        <Link to="/form">Add</Link>
      </div>
      <div className="messages_container">
      {this.renderMessages(this.props.messages)}
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
