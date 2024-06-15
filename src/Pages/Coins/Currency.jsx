import React from 'react'

const Currency = ({setCurrency}) => {
  return (
    <div className='currencyComp' style={{ padding:"1rem 0",textAlign:"right",display:"flex" , justifyContent:"flex-end" , gap:"1rem" }}>
         <label htmlFor="currency"> select the currency</label>
              <select
                name="currency"
                id="currency"
                onChange={(e) => setCurrency(e.target.value)}
                style={{padding:"0.3rem" }}
              >
                <option value="inr">inr</option>
                <option value="usd">usd</option>
              </select>
    </div>
  )
}

export default Currency