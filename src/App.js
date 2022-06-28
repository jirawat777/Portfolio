import './App.css';
import Layout from './components/Base';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home'
import ProfilePage from './components/Pages/ProfilePage'
import EducationPage from './components/Pages/EducationPage';
import WorkPage from './components/Pages/WorkPage';
import SkillPage from './components/Pages/SkillPage';
import WorkmanshipPage from './components/Pages/WorkmanshipPage';
function App() {
  return (
    <div className="App">
      <div className='empthy-block'></div>
      <Layout />
      <div className='Block-ALl'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/profile' element={<ProfilePage />} />
          <Route exact path='/education' element={<EducationPage />} />
          <Route exact path='/work' element={<WorkPage />} />
          <Route exact path='/skill' element={<SkillPage />} />
          <Route exact path='/workmanship' element={<WorkmanshipPage />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
