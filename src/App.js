import React, { Component } from 'react';
import './App.css';
import AddCarForm from './Component/AddCarForm';
import CarList from './Component/CarList';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        { name: 'Audi', model: 'A6', quantity: 3 },
        { name: 'bmw', model: 's6', quantity: 2 },
      ],
    };
  }

  handleAddCar = (newCar) => {
    const { cars } = this.state;
    const existingCarIndex = cars.findIndex((car) => car.name === newCar.name && car.model ===newCar.model);

    if (existingCarIndex !== -1) {
      
      const updatedCars = [...cars];
      updatedCars[existingCarIndex].quantity += 1;
      this.setState({ cars: updatedCars });
    } else {
     
      this.setState({ cars: [...cars, newCar] });
    }
  };

  render() {
    const { cars } = this.state;

    return (
      <div className="App">
        <h1>Car</h1>
        <CarList cars={cars} />
        <AddCarForm onAddCar={this.handleAddCar} />
      </div>
    );
  }
}

export default App;
