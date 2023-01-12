import React from 'react'
import city from '../data.json'

const Sample = () => {
  return (
    <div>
    {city.map( citys => {
      return(
        <div key={
          citys.id

        }>
          {citys.name}
          <div>
            {citys.tours.map (data => {
              return(
                <div key={citys.id}>
                 -- {data.name}
                </div>
              )
            })}
          </div>
        </div>
      )
    })}
    </div>
  )
}

export default Sample