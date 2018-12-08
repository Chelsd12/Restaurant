import React from 'react';

class ItemForm extends React.Component {
  state = {
    name: "",
    price: 0.00
  };//end of state

  handleChange = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    });
  };//end of handleChange

  handleSubmit = (e) => {
    let {add, id} = this.props;
    let {name, price}=this.state;
    e.preventDefault();
    add(id, name, price)
    this.setState ({
      name:"",
      price: 0.00
    });
  };//end of handleSubmit

  render (){
    let {name, price} = this.state
    return (
      <form className="dish-form" onSubmit ={this.handleSubmit}>
        <input 
          label="name"
          placeholder="Name"
          value={name}
          className="input"
          required
          onChange={this.handleChange}
        />
         <input 
          label="price"
          placeholder="Price:"
          value={price}
          className="input"
          required
          onChange={this.handleChange}
        />
        <button className="Submit">Add Item</button>
      </form>
    )
  };//end of render
};//end of Class ItemForm

export default ItemForm;