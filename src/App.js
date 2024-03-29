import React from 'react'
import Login from './components/login/Login'
import Offer from './components/Offer/Offer'
import Cart from './components/Cart/Cart'
import List from './components/List/List'
import { ThemeContext } from './context/themeContext'

import logo from './images/myntra-logo.png'
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from './redux/user/userActions'



function App() {
  const value = React.useContext(ThemeContext)
  const userData = useSelector((state) => state.user.userData)
  const dispatch = useDispatch()

  // const [userData, setUserData] = React.useState(localStorage.getItem('user') || null)

  //here also i can make the api call
  // const [name, setName] =  React.useState('aviral')

  // function changeUserData(data) {
  //   setUserData(data) 
  //   // console.log(data)
  // }

  function handleLogout() {
    localStorage.removeItem('user');
    // setUserData(null)
    dispatch(setUserInfo(null))
  }

  return (
    <div className={`App ${value.theme}`}>
       {userData ? <><header>
        <img src={logo} alt="img" />
        <div className="right-header">
        <Offer />
        <Cart /> 
          <label className="switch">
            <input type="checkbox" onChange={value.toggleTheme}/>
            <span className="slider round"></span>
          </label>
          <button href="" className="logout-linkButton" onClick={handleLogout}>{`Logout ${userData.name}`}</button>
        </div>
      </header>
        <div className="body-container">
        <List/>
        </div></>: <Login /> }
    </div>
  );
}

export default App;
