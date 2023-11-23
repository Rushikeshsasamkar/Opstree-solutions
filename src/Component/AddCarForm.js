import React from "react";

class AddCarForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      model: '',
    };
  }

  handleAddCar = () => {
    const { name, model } = this.state;
    const { onAddCar } = this.props;

    if (name && model) {
      onAddCar({ name, model, quantity: 1 });
      this.setState({ name: '', model: '' });
    }
  };

  render() {
    const { name, model } = this.state;
    return (
      <div>
        <h2>Add New Car</h2>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => this.setState({ name: e.target.value })} />
          </label>
        </div>
        <div>
          <label>
            Model:
            <input type="text" value={model} onChange={(e) => this.setState({ model: e.target.value })} />
          </label>
        </div>
        <button onClick={this.handleAddCar}>Add Car</button>
      </div>
    );
  }
}

export default AddCarForm;