import React from 'react';
import LoginForm from './Login'

export class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loginHidden: false
    };
  }

  render() {
    document.body.style = "background-color: #e6e9ef;"
    return (
      <div>
        <nav className="navbar navbar-dark" id="navbar">
          <h2>Chitter</h2>
          <div className="login">
            <LoginForm
              loginHidden={this.state.loginHidden}
              />
          </div>
        </nav>
      </div>
    )
  }

}

export default Navigation;
