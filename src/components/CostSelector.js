import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Row, Col, InputGroup, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';


const valuetext = (value) => {
  return `${value}`;
};

const CostSelector = ({ label }) => {
  const dispatch = useDispatch();
  const filterSelector = useSelector((state) => state[label]);

  const costTypeHandler = (costFilter) => {
    dispatch({
      type: "COST",
      payload: {
        costName: label,
        checked: costFilter.target.checked,
      },
    });
  }

  const costFilterHandler = (costFilter) => {
    dispatch({
      type: "COST_FILTER",
      payload: { costName: label, value: costFilter.target.value },
    });
  }

  return (
    <Container >
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              onChange={costTypeHandler}
              value={filterSelector.checked}
            />
            <InputGroup.Text className="checkbox">{label}</InputGroup.Text>
          </InputGroup>
        </Col>
        <Col>
          <Box sx={{ width: 400 }} className="mt-1">
            <Slider
              value={filterSelector.value}
              onChange={costFilterHandler}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              max={200}
              min={0}
              step={5}
              disabled={!filterSelector.checked}
            />
          </Box>
        </Col>
        <Col className="mt-2 ms-3">
          <h5>{`${filterSelector.value[0]} - ${filterSelector.value[1]}`}</h5>
        </Col>
        <Col />
        <Col />
      </Row>
    </Container>
  );
};

CostSelector.propTypes = {
  label: PropTypes.node.isRequired,
};

export default CostSelector;
