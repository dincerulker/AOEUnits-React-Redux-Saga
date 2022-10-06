import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Row, Col, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const valuetext = (value) => {
    return `${value}`;
  }

const CostSelector = ({ label }) => {
  const dispatch = useDispatch();
  const filterSelector = useSelector((state) => state[label]);

  const costChangeHandler = (costFilter) => {
    dispatch({
      type: "COST",
      payload: {
        costType: label,
        checked: costFilter.target.checked,
      },
    });
  }

  const costSlideHandler = (costFilter) => {
    dispatch({
      type: "COST_FILTER",
      payload: { costType: label, value: costFilter.target.value },
    });
  }

  return (
    <Row>
      <Col>
        <InputGroup className="mb-3">
          <InputGroup.Checkbox
            onChange={costChangeHandler}
            value={filterSelector.checked}
            className="checkbox"
          />
          <InputGroup.Text>{label}</InputGroup.Text>
        </InputGroup>
      </Col>
      <Col>
        <Box sx={{ width: 500 }} className="sliderBox">
          <Slider
            getAriaLabel={() => "Resource Cost"}
            value={filterSelector.value}
            onChange={costSlideHandler}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            max={200}
            min={0}
            step={5}
            disabled={!filterSelector.checked}
          />
        </Box>
      </Col>
      <Col>
        <h5>{`${filterSelector.value[0]} - ${filterSelector.value[1]}`}</h5>
      </Col>
      <Col />
      <Col />
    </Row>
  );
};

export default CostSelector;
