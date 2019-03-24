import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
 
class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []

        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }



    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now() 

            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem) 
                    //The concat() method is used to merge two or more arrays. 
                    //This method does not change the existing arrays, 
                    //but instead returns a new array.


                };
            });

        }

        this._inputElement.value ="";

        console.log(this.state.items);

        e.preventDefault();  //override the default behavior 

    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }


render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
                   delete={this.deleteItem}/>
      </div>
    );
  }
}
export default TodoList;