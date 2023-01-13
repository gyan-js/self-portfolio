import React from 'react'
import {Row} from 'react-bootstrap'


import GitHubCalendar from 'react-github-calendar'
const Github = () => {
  return (
    <div>
      <h1 className='projectHeading' style={{paddingBottom: '20px'}}>
        My Github <strong className='purple'>Contributions</strong>
      </h1>
      <GitHubCalendar
        blockMargin={15}
        blockSize={22}
        username='gyan-js'
        fontSize={17}
        color='orange'
      />
    </div>
  )
}

export default Github