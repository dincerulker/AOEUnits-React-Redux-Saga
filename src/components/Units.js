import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Units = ({ id, name, age, cost }) => {
    let unitCost = [];
    switch (cost) {
      case null:
        unitCost = "No Cost";
        break;
      default: {
        switch (cost.Wood) {
          case undefined:
            break;
          default:
            unitCost.push("Wood: " + cost.Wood);
        }
        switch (cost.Food) {
          case undefined:
            break;
          case null:
            break;
          default:
            unitCost.push("Food: " + cost.Food);
        }
        switch (cost.Gold) {
          case undefined:
            break;
          default:
            unitCost.push("Gold: " + cost.Gold);
        }
      }
    }
  
    const unitCostString =
      unitCost === "No Cost" ? "No Cost" : unitCost.join(", ");
  
    return (
      <tr>
        <td>{id}</td>
        <td>
          <Link to={`/details/${id}`}>{name} </Link>
        </td>
        <td>{age}</td>
        <td>{unitCostString}</td>
      </tr>
    );
}

Units.propTypes = {
    id: PropTypes.node.isRequired,
    name: PropTypes.node.isRequired,
    age: PropTypes.node.isRequired,
    cost: PropTypes.node.isRequired,
  };

export default Units