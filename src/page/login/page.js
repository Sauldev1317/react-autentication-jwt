import React, { Fragment } from 'react';
import Input from '../../component/input/input.js'
import './styles.css';

function Page(props) {
    const {
        username,
        password,
        onChangeInputUsername,
        onChangeInputPassword,
        handleLogin,
        validationInputError,
    } = props;

    return (
        <Fragment>
            <img className="wave" alt="Login" src={require("../../assets/img/wave.png")}/>
            <div className="container">
                <div className="img">
                    <img alt="Login" src={require("../../assets/img/bg.svg")}/>
                </div>
                <div className="login-container">
                    <form  onSubmit={handleLogin}>
                        <img className="avatar" alt="avatar" src={require("../../assets/img/avatar.svg")}/>
                        <h2>Welcome</h2>

                        <Input 
                            attributes = {{
                                placeholder: "Username",
                                type: "text",
                                text: username,
                                icon: "fas fa-user"
                            }}
                            validationInputError = {validationInputError.username}
                            onChangeInputText = {onChangeInputUsername}/>

                        <Input 
                            attributes = {{
                                placeholder: "Password",
                                type: "password",
                                text: password,
                                icon: "fas fa-lock"
                            }}
                            validationInputError = {validationInputError.password}
                            onChangeInputText = {onChangeInputPassword}/>

                        <a href="/#">Forgot Password?</a>
                        <input type="submit" className="btn" value="Login"/>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Page;