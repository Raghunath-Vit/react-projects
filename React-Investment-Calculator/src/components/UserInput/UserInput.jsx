import React from 'react'
import { useState } from 'react'

const UserInput = ({onChange,userInput}) => {
   

  return (
    <div id="user-input">
        <div className='input-group'>
            <p>
                <label htmlFor="">INITIAL INVESTMENT</label>
                <input onChange={(event)=>onChange('initialInvestment',event.target.value)} value={userInput.initialInvestment} type="number" required/>
            </p>
        
            <p>
                <label htmlFor="">ANNUAL INVESTMENT</label>
                <input onChange={(event)=>onChange('annualInvestment',event.target.value)} value={userInput.annualInvestment} type="number" required/>
            </p>
            </div>
        <div className='input-group'>
             <p>
                <label htmlFor="">EXPECTED RETURN</label>
                <input onChange={(event)=>onChange('expectedReturn',event.target.value)} value={userInput.expectedReturn} type="number" required/>
            </p>
            <p>
                <label htmlFor="">DURATION</label>
                <input onChange={(event)=>onChange('duration',event.target.value)} type="number" value={userInput.duration} required/>
            </p>
        </div>

    </div>
  )
}

export default UserInput