import React from "react";
class CarList extends React.Component {
  render() {
    const { cars } = this.props;

    return (
      <div>

        <h2>Car List</h2>
        <ul>
          {cars.map((car, index) => (
            <li key={index}>
              {car.name} - {car.model} Qty: {car.quantity}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default CarList;
