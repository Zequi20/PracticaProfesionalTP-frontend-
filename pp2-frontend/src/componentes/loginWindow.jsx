import React, { Component } from 'react';
import './styles/loginWindow.css'

class LoginWindow extends Component {
    render() {
        return (
            <div className='window-login'>
                {this.props.children}
            </div>
        );
    }
}

export default LoginWindow;