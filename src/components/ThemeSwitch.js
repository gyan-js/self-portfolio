import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

function ThemeSwitch(props) {
  return (
    <div className="theme-switch" style={{marginTop: '16px', marginLeft: '5px', cursor: 'pointer'}}>
    <input type="checkbox" className="checkbox" id="checkbox" onChange={props.onChange} />
  <label for="checkbox" class="label">
  <FaSun style={{color: 'white'}} />
    <FaMoon style={{color: 'white'}} />
    <div class='ball' />
  </label>
</div>
  )
}

export default ThemeSwitch