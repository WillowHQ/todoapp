import React, { Component } from 'react';

const MyReactComponent = (props) =>  (
      <div>
        <h3>{props.name}</h3>
      </div>
)  

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = { items: [], text: '' , something:"Rahul"};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  
  render() {
    return (
      <div>
        <MyReactComponent name={this.state.something} />
        <h3>TODO</h3>
        <TodoList color="papayawhip" name="first" items={this.state.items} />
        <TodoList name="second" items={this.state.items} />
        <TodoList items={this.state.items} />
        <TodoList items={this.state.items} />
        <TodoList items={this.state.items} />
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
    
  }

  handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

const TodoList = (props) => (
 
      <div>
        <h3 style={{color: props.color}}>{props.name} </h3>
      <ul>
        {props.items.map(item => (
          <li  key={item.id}>{item.text}</li>
        ))}
      </ul>
      </div>
)


export default TodoApp;