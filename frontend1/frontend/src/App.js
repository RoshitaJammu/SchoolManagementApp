import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRouter from './Router';
import Home from './components/Home';
import Academics from './components/Academics';
import Grading from './components/Grading';
import Staff from './components/Staff';
import Fees from './components/Fees.js'
import TeacherDetailView from './components/TeacherDetailView';
import StudentDetailView from './components/StudentDetailView';
import ParentDetailView from './components/ParentDetailView';
import Auth from './components/auth.js';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/teacher-detail" element={<TeacherDetailView />} />
        <Route path="/home" element={<Home />} />
        <Route path="/app" element={<AppRouter />} />

        
        <Route path="/academics" element={<Academics />} /> 
        <Route path='/staff' element={<Staff/>}/>
        <Route path='/Fees' element={<Fees/>}/>
        <Route path ='/Grading' element={<Grading/>}/>
        <Route path="/student-detail" element={<StudentDetailView />} /> 
        <Route path="/parent-detail" element={<ParentDetailView/>} />

      </Routes>
    </Router>
  );
}

export default App;
