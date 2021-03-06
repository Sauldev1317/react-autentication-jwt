import React, { Component } from 'react';
import Page from './page';
import AuthService from "../../services/auth.service";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            validationInputError: {
                username: {
                    error: false,
                    message: ""
                },
                password: {
                    error: false,
                    message: ""
                }
            }
        }
        
        this.onChangeInputUsername = this.onChangeInputUsername.bind(this);
        this.onChangeInputPassword = this.onChangeInputPassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    validationForm(){
        const {username, password} = this.state;
        let validationFormError = false;
        let validationInputError = {};

        if(!username){
            validationFormError = true;
            validationInputError = {
                ...validationInputError,
                username: {
                    error: true,
                    message: "Enter your username"
                }
            };
        }else{
            validationFormError = false;
            validationInputError = {
                ...validationInputError,
                username: {
                    error: false,
                    message: ""
                }
            };
        }

        if(password){
            if(password.length < 6){
                validationFormError = true;
                validationInputError = {
                    ...validationInputError,
                    password: {
                        error: true,
                        message: "Password is too short"
                    }
                }
            }else{
                validationFormError = false;
                validationInputError = {
                    ...validationInputError,
                    password: {
                        error: false,
                        message: ""
                    }
                };
            }
        }else{
            validationFormError = true;
            validationInputError = {
                ...validationInputError,
                password: {
                    error: true,
                    message: "Enter your"
                }
            };
        }

        this.setState({
            validationInputError: validationInputError,
        });

        return validationFormError;
    }

    onChangeInputUsername(text){
        let {validationInputError} = this.state;
        this.setState({
            username: text.target.value,
            validationInputError: {
                ...validationInputError,
                username: {
                    error: false,
                    message: ""
                }
            }
        });
    };

    onChangeInputPassword(text){
        let {validationInputError} = this.state;
        this.setState({
            password: text.target.value,
            validationInputError: {
                ...validationInputError,
                password: {
                    error: false,
                    message: ""
                }
            }
        });
    };

    handleLogin(e){
        e.preventDefault();
        if(!this.validationForm()){
            AuthService.login(this.state.username, this.state.password)
                .then((response) => {
                    this.props.history.push("/home");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();
                }
            );
        }else{
            
        }
    }

    render() {
        const { username, password, validationInputError } = this.state;
        console.log(validationInputError);
        return (
            <Page
                username = {username}
                password = {password}
                onChangeInputUsername = {this.onChangeInputUsername}
                onChangeInputPassword = {this.onChangeInputPassword}
                handleLogin = {this.handleLogin}
                validationInputError = {validationInputError}
            />
        );
    }
}


export default Login