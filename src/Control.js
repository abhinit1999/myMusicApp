import { faBackward, faForward, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Control = () => {
  return (
    <div className='control'>
        <button className='control_skipBtn'>
            <FontAwesomeIcon icon={faBackward}/>
        </button>
        <button className='control_playButton'>
            <FontAwesomeIcon icon={faPause}/>
        </button>
        <button className='control_skipBtn'>
            <FontAwesomeIcon icon={faForward}/>
        </button>
    </div>
  )
}

export default Control;