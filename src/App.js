import './App.css';
import HomePage from './Components/Pages/HomePage';
import Login from "./Components/Pages/Login"
import {auth} from "./Firebase"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { login, logout, selectUser } from './Components/userSlice';
import ProfileScreen from './Components/Pages/ProfileScreen';
function App() {
  const user=useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
      }
      else{
        dispatch(logout())
      }
      return unsubscribe;
    })
  },[dispatch])
  return (
    <div className="App">
    <Router>
    {!user ? (<Login/> ):
      <Switch>
           <Route path="/profile">
          <ProfileScreen/>
          </Route>
          <Route path="/">
          <HomePage/>
          </Route>
        </Switch>
      
    }
    </Router>
    </div>
  );
}

export default App;
