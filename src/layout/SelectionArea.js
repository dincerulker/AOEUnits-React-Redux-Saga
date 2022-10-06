import React from 'react'
import Ages from '../components/Ages'
import CostSelector from '../components/CostSelector'

const SelectionArea = () => {
  return (
    <div className="units">
      <h1>Units Page</h1>
      <div className="units-container">
        <div className="ages">
          <h3>Ages</h3>
          <Ages />
        </div>
        <div className="costs">
          <h3>Costs</h3>
          <CostSelector label="wood" />
          <CostSelector label="food" />
          <CostSelector label="gold" />
        </div>
      </div>
    </div>
  )
}

export default SelectionArea