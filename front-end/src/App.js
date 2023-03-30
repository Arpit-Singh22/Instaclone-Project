import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './component/LandingPage';
import PostView from './component/PostView';
import ProfileUpload from './component/ProfileUpload';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/post-view' element={<PostView />} />
          <Route path='/profile-upload' element={<ProfileUpload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
