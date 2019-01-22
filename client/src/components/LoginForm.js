import React, { Component } from "react";
import alert from "sweetalert";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: {
        username: "admin",
        password: "admin"
      },
      loginEmail: "",
      loginPassword: ""
    };
  }
  onLogin = ev => {
    ev.preventDefault();
    const { admin, loginEmail, loginPassword } = this.state;
    const { Login } = this.props;

    if (loginEmail === admin.username && loginPassword === admin.password) {
      Login();
    } else {
      alert("Error", "Email or Password is Incorrect !", "error");
      this.setState({ loginEmail: "", loginPassword: "" });
    }
  };

  render() {
    const { loginEmail, loginPassword } = this.state;
    return (
      <div className="form">
        <h2 className="App-title">Login</h2>
        <form onSubmit={this.onLogin}>
          <div className="form-group">
            <label htmlFor="userName">Username/Email</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              required
              placeholder="Enter email"
              value={loginEmail}
              onChange={e => {
                this.setState({ loginEmail: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="userPassword"
              required
              placeholder="Password"
              value={loginPassword}
              onChange={e => {
                this.setState({ loginPassword: e.target.value });
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary" to='/home'>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
