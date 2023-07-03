import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App=() =>{
  const [showAddTask, setShowAddTask] = useState (true)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2.30 pm',
        reminer: true,
    },
    {
        id: 2,
        text: 'Meeting with the Supervisor',
        day: 'July 5th at 1.30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'August 22nd at 2.30pm',
        reminder: false,
    }
])

//Add Task
const addTask = (task) =>{
 const id = Math.floor(Math.random() *
 1000)+1
const newTask = { id, ...task}
setTasks([...tasks, newTask])
}
//Delete Task
const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !==id))
}

//Toggle reminder
const toggleReminder = (id) => {
 setTasks
 (tasks.map((task)=> 
 task.id === id? { ...task, reminder: 
  !task.reminder} : task
  )
  )
}
  return (
    <div className='container'>
      
      <Header onAdd={() => setShowAddTask(
        (!showAddTask) )}/>
      {showAddTask && <AddTask onAdd={AddTask} /
      >}
      {tasks.length>0?
      <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle= {toggleReminder}/>
       : 
      'No tasks available'
}
      
    </div>
  );
}

export default App;
