import logo from './logo.svg';
import './css/App.css';
import BaseRouter from './routes';
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";

const App = () => {
  return (
    <BaseRouter />
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);