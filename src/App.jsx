import React from 'react'
import TrackCard from './components/TrackCard'

const demoTracks = [
  { id: 1, title: "Epic Trailer", genre: "Cinematic", audio: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav" },
  { id: 2, title: "Urban Night Beat", genre: "Hip-Hop", audio: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav" },
  { id: 3, title: "Dreamwave Pop", genre: "Pop", audio: "https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav" }
]

export default function App(){
  return (
    <div style={{padding:'20px'}}>
      <h1 style={{color:'#C084FC'}}>GLOBAL SOUND — Demo</h1>
      <p>Поиск и предпросмотр музыки</p>
      <div style={{display:'flex', gap:'20px', marginTop:'20px'}}>
        {demoTracks.map(t => <TrackCard key={t.id} track={t} />)}
      </div>
    </div>
  )
}
