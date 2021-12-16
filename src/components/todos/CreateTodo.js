import React, { Component } from 'react';
import { connect } from 'react-redux';


class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addToDo(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder='add todo' onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (formData) => dispatch({type: "ADD_TODO", payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
