import React, { useRef } from 'react'

export default function TrackCard({ track }){
  const audioRef = useRef(null)
  return (
    <div style={{background:'#1a002b', padding:'15px', borderRadius:'12px'}}>
      <h3>{track.title}</h3>
      <p>{track.genre}</p>
      <audio ref={audioRef} controls src={track.audio} />
    </div>
  )
}
