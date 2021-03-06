import React, { Component } from 'react';
import './input.css';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFocus: false,
        }
        this.onChangeFocus = this.onChangeFocus.bind(this);
    }

    onChangeFocus(){
        if(!this.props.attributes.text){
            this.setState({
                inputFocus: !this.state.inputFocus,
            });
        }
    };

    render() {
        const { attributes, onChangeInputText, validationInputError} = this.props;
        const {inputFocus } = this.state;
        return (
            <div className="inputContent">
                <div className={[
                    'input-div',
                    inputFocus === true ? 'focus' : '',
                    validationInputError.error === true ? 'error' : 'successful'
                ].join(' ')}>
                    <div className="i">
                        <i className={attributes.icon}/>
                    </div>
                    <div>
                        <h5>{attributes.placeholder}</h5>
                        <input 
                            className="input" 
                            type={attributes.type}
                            value={attributes.text}
                            onChange={onChangeInputText}
                            onFocus={this.onChangeFocus} 
                            onBlur={this.onChangeFocus}
                        />
                    </div>
                </div>
                <span className="inputError">{validationInputError.message}</span>
            </div>
        );
    }

}

export default Input; 