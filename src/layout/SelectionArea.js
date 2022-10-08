import React from 'react';
import Ages from '../components/Ages';
import CostSelector from '../components/CostSelector';
import {Container, Row, Col, Table} from 'react-bootstrap';
import { useSelector } from "react-redux";
import Units from '../components/Units';

const SelectionArea = () => {
  const units = useSelector((state) =>
    state.filterOutput ? state.filterOutput : state.units
  );
  return (
    <Container className="mb-5">
      <h1>Units Page</h1>
      <Row className="mt-5">
        <Col className="mb-5">
          <h3 className='mb-5'>Ages</h3>
          <Ages/>
        </Col>
        <Row className="costs mb-5">
          <h3 className='mb-5'>Costs</h3>
          <CostSelector label="wood" />
          <CostSelector label="food" />
          <CostSelector label="gold" />
        </Row>
        <Table striped bordered hover responsive="lg" size="sm" className='text-center' >
          <thead>
            <tr>
              <th className='th-id-size'>Id</th>
              <th className='th-name-size'>Name</th>
              <th className='th-age-size'>Age</th>
              <th className='th-costs-size'>Costs</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {units.map((unit) => (
              <Units
                key={unit.id}
                id={unit.id}
                name={unit.name}
                age={unit.age}
                cost={unit.cost}
              />
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default SelectionArea;