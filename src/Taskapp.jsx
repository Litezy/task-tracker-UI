import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function Taskapp() {
  const [tasks, settasks] = useState(
    [{
        id: 1,
        text: 'Doctors Appointment',
        day: 'Friday',
        reminder: true
    },
   
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Monday afternoon',
        reminder: false 
    },
]
)

  return (
    <div className='container'>
        <Header title='Task Tracker'/>
        <Tasks  tasks={tasks}/>
        </div>
  )
}

export default Taskapp