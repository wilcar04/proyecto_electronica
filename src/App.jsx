import './App.css'
import { IoIosPaper } from "react-icons/io";
import Card from './Card';
import { PiStudentFill } from "react-icons/pi";
import Attendance from './Attendance';
import { FaRegCalendarCheck } from "react-icons/fa";
import 

function App() {
  const students = [{
    name: "Jero",
    id: "1000548716",
    email: "jero@gmail.com"
  },
  {
    name: "Jero",
    id: "1000548716",
    email: "jero@gmail.com"
  }]

  const attendance = [{
    date: '12/04/2023',
    name: "Jero",
    id: "1000548716",
    email: "jero@gmail.com"
  },
  {
    date: '12/04/2023',
    name: "Jero",
    id: "1000548716",
    email: "jero@gmail.com"
  }]

  const studentsElements = students.map(student => 
    <Card
      key={student.id}
      name={student.name}
      id={student.id}
      email={student.email}
      />
  )

  const attendanceElements = attendance.map(student => 
    <Attendance
      key={student.id}
      date={student.date}
      name={student.name}
      id={student.id}
      email={student.email}
      />
  )

  return (
    <div className='h-screen flex flex-col'>
      <nav className='bg-neutral-900 h-20 flex items-center text-white pl-20 text-xl font-semibold'>
        < IoIosPaper className='text-white text-3xl' />
        <p className='pl-5'>Consulta de asistencias</p>
      </nav>
      <main className='flex flex-1 grow'>
        <div className='bg-neutral-600 w-1/3 pt-12 px-8'>
          <h2 className='font-bold text-2xl text-neutral-200 flex items-center'>
            <PiStudentFill className='size-8 text-neutral-200 inline mr-3'/>
            <span className=''>Alumnos</span>
          </h2>
          <div className='flex flex-col gap-y-5 px-20 mt-10'>
          {studentsElements}
          </div>
        </div>
        <div className='bg-neutral-200 grow pt-12 px-8'>
          <h2 className='font-bold text-2xl text-neutral-700 flex items-center'>
            <FaRegCalendarCheck className='size-8 text-neutral-700 inline mr-3'/>
            <span className=''>Asistencias</span>
          </h2>
          <div className='grid grid-cols-2 gap-5 mt-10 px-28'>
            {attendanceElements}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
