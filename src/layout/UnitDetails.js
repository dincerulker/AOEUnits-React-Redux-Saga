import React from "react";
import { useSelector } from "react-redux";
import { Table, Container } from "react-bootstrap";
import { useParams } from "react-router";



const UnitDetails = () => {
    const { unitId } = useParams();
    const unit =
      useSelector((state) =>
        state.units.find((unit) => unit.id === parseInt(unitId))
      ) || {};

  return (
    <Container>
      <h1 className="mb-5">Unit Detail Page</h1>
      <Table striped bordered hover responsive="lg" size="sm" className='text-center mb-5'>
        <tbody>
          <tr >
            <td className="tr-left">ID:</td>
            <td>{unit.id}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{unit.name}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{unit.description}</td>
          </tr>
          <tr>
            <td>Min. Required Age:</td>
            <td>{unit.age}</td>
          </tr>
          <tr>
            <td>Wood Cost:</td>
            <td>{unit.cost.Wood ? unit.cost.Wood : "---"}</td>
          </tr>
          <tr>
            <td>Food Cost:</td>
            <td>{unit.cost.Food ? unit.cost.Food : "---"}</td>
          </tr>
          <tr>
            <td>Gold Cost:</td>
            <td>{unit.cost.Gold ? unit.cost.Gold : "---"}</td>
          </tr>
          <tr>
            <td>Build Time:</td>
            <td>{unit.build_time}</td>
          </tr>
          <tr>
            <td>Reload Time:</td>
            <td>{unit.reload_time}</td>
          </tr>
          <tr>
            <td>Hit Points:</td>
            <td>{unit.hit_points}</td>
          </tr>
          <tr>
            <td>Attack:</td>
            <td>{unit.attack}</td>
          </tr>
          <tr>
            <td>Accuracy:</td>
            <td>{unit.accuracy}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default UnitDetails;
