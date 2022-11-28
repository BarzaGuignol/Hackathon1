import React, { useState } from 'react';
import './areYou.css';
import "../assets/sound/screamScarry.mp3";

export default function AreYou({ setPath }) {

    const [choice, setChoice] = useState(false);

    function handleChoice () {
        setChoice(!choice);
    }

  return (
    <div className='backgroundGlitch'>
        <h3 className="glitch" data-text="Are you still here ?">Are you still here ?</h3>
        <div className='spaceButtonAreYou'>
            <button className='buttonAreYou' onClick={() => setPath('/')}>Yes</button>
            <button className='buttonAreYou' onClick={handleChoice}>No</button>
            {choice ? <div>
                <audio autoPlay src="assets/screamScarry.1bbb4a1f.mp3"></audio>
            </div>: ""}
        </div>
    </div>
  )
}
