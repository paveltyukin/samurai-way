import './style.sass';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';

export const App = (props: any) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route
            path='/dialogs'
            element={<Dialogs state={props.state.dialogsPage} />}
          />
          <Route
            path='/profile'
            element={<Profile state={props.state.profilePage} addPost={props.addPost} />}
          />
        </Routes>
      </div>
    </div>
  )
};
