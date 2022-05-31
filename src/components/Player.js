import React from 'react'
import Control from '../Control';
import Details from '../Details';

const Player = () => {
  return (
    <div className='player'>
        <h3>Playing Song</h3>
    
    <Details/>
    <Control/>
    <audio
    className='player_audio'
    src=''
    controls

>
    </audio>
    <p>Next Up: <span>Next Song</span></p>


        </div>
  )
}

export default Player;