import React from 'react'
import Login from './components/login/Login'
import logo from './images/myntra-logo.png'
import './App.css';


function App() {

  const [userData, setUserData] = React.useState(localStorage.getItem('user') || null)

  // const [name, setName] =  React.useState('aviral')

  function changeUserData(data) {
    setUserData(data) 
    // console.log(data)
  }

  function handleLogout() {
    localStorage.removeItem('user');
    setUserData(null)
  }

  return (
    <div className="App">
       {userData ? <><header>
        <img src={logo} alt="img" />
        <div className="right-header">
          {/* <Offer />
          <Cart /> */}
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
          <button href="" className="logout-linkButton" onClick={handleLogout}>Logout</button>
        </div>
      </header>
        <div className="body-container">
          {/* <List /> */}
        </div></>: <Login changeUserData={changeUserData} /> }
       {}
    </div>
  );
}

export default App;
