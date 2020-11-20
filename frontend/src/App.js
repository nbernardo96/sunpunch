import logo from './logo.svg';
import './css/App.css';
import BaseRouter from './routes';
import { Component } from 'react';
import Dashboard from './containers/dashboard';
import Navigation from './containers/navigation';
import Homepage from "./containers/home";
import Login from './containers/login';
import Signup from './containers/signup';
class App extends Component {

  state = {
    route: 'signin',
    isSignedIn: false,
    user: {
      department: '',
      email: '',
      name: ''
    }
  }

  loadUser = (res) => {
    
    this.setState({user: {
      department: res.data.department,
      email: res.data.employee_email,
      name: res.data.employee_name
    }})
    
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    
    this.setState({ route });
    
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'dashboard') {
      this.setState({ isSignedIn: true })
    }


  }


  selectComponent(){
    const {  user, route } = this.state;

    switch(route){
      case 'dashboard':
        return <Dashboard user={ user }/>
      case 'home':
        return <Homepage loadUser={ this.loadUser } onRouteChange={ this.onRouteChange } />
      case 'login':
        return <Login loadUser={ this.loadUser } onRouteChange={ this.onRouteChange } />
      case 'signout':
        return <Homepage loadUser={ this.loadUser } onRouteChange={ this.onRouteChange } />
      case 'signup':
        return <Signup loadUser={ this.loadUser } onRouteChange={ this.onRouteChange } />
      default:
        return <Homepage loadUser={ this.loadUser } onRouteChange={ this.onRouteChange } />
    }
  }

  render(){
    const { isSignedIn } = this.state;
    console.log('App:', isSignedIn)

    return (
      <div>
        <Navigation isSignedIn={ isSignedIn } onRouteChange={ this.onRouteChange } />
        { this.selectComponent() }
      </div>
    )
  }
}

export default App;