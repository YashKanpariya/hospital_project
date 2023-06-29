import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Index from './Components/Index';
import Sign_In from './Components/Sign-In';
import Sign_Up from './Components/Sign-Up';
import AddDoctor from './Doctors/AddDoctor';
import AllDoctos from './Doctors/AllDoctos';
import SingleDoctorView from './Doctors/SingleDoctorView';
import AddPatients from './Patients/AddPatients';
import AllPatients from './Patients/AllPatients';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/dashboard' element={(window.localStorage.getItem('hs_user_id') == null) ? <Sign_In /> : <Index />} />
          <Route path='/home' element={(window.localStorage.getItem('hs_user_id') != null) ? <Index  /> : <Sign_In />} />
          <Route path='/sign-up' element={<Sign_Up />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/sign-in' element={<Sign_In/>}/>

          {/* Doctors */}
          <Route path='/add-doctor' element={<AddDoctor />} />
          <Route path='/all-doctors' element={<AllDoctos />} />
          <Route path='/doctor-profile/:doctor_id' element={<SingleDoctorView />} />

          {/* Patients */}
          <Route path='/add-patients' element={<AddPatients />} />
          <Route path='/all-patients' element={<AllPatients />} />
        </Routes>
      </div>
  );
}

export default App;

