import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ForgotPw from './pages/entry-pages/ForgotPw'
import Login from './pages/entry-pages/Login'
import NewPw from './pages/entry-pages/NewPw'
import Register from './pages/entry-pages/Register'
import ProjectsPage from './pages/ProjectsPage'
import UsersPage from './pages/UsersPage'
import 'bulma/css/bulma.min.css'
import TimeTrackerPage from './pages/TimeTrackerPage'
/* import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css' */




export default function App () {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/NewPw' element={<NewPw/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/ForgotPw' element={<ForgotPw/>}></Route>
          <Route path='/Projects' element={<ProjectsPage/>}></Route>
          <Route path='/Users' element={<UsersPage/>}></Route>
          <Route path='/Tracker' element={<TimeTrackerPage/>}></Route>
        </Routes>
      </BrowserRouter>
     </div>
  )
}
