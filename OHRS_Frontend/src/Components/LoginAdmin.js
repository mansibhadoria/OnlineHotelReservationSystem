import React, { Component } from 'react'
import "../App.css"
import "../css/register.css"
import AdminService from "../services/AdminService"
import NavBar from '../NavBar/NavBar'


export class LoginA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {},
      message: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  submitLoginForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let admin = {
        emailAddress: this.state.email,
        password: this.state.password,
      };
      AdminService.loginAdmin(admin).then(response => {
        let adminId=response.data.result.id;
        console.log("adminId :" +JSON.stringify(adminId));
        window.sessionStorage.setItem("adminId",adminId);
        alert("Login Successfully");
        this.props.history.push('/homeAdmin');
      }, error => {
        const resMessage =
            ( error.response.data)
          this.setState({
            message: resMessage
          });
      })
    }
  };


  cancel() {
    this.props.history.push("/");
  }
  validateForm() {
    const { email, password } = this.state;
    let errors = {};
    let formIsValid = true;

    if (!email) {
      formIsValid = false;
      errors["email"] = "*Please enter your email Address.";
    }

    if (typeof email !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(email)) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email Address.";
      }
    }
    if (!password) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof password !== "undefined") {
      if (!password.match(/^.*(?=.{6,})(?=.*[a-z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="signup-form" >
          <form method="post" onSubmit={this.submitLoginForm}>
            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <h2>Admin Login</h2>
            <div className="form-group">
              <input type="email" className="form-control" name="email" placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.email}</div>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password" placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.password}</div>
            </div>
            <div className="btn">
              <button className="btn btn-success" >Login</button>
              <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
            </div>
          </form>
         

        </div>
      </div>
    )
  }
}

export default LoginA
