import React, { Component } from 'react';
import styled from 'styled-components';

class Input extends Component {
    render() {
        const InputStyle = styled.input.attrs({
            margin: props => props.size || '1em',
            padding: props => props.size || '1em'
        })`
			color: #7A7A7A;
			font-size: 1em;
			border: 2px solid #C8C8C8;
			border-radius: 4px;
			padding: 10px;
			margin: 10px;
			width: 100%;
			color-background: none;

			/* here we use the dynamically computed props */
			margin: ${props => props.margin};
			padding: ${props => props.padding};

			&:focus{
			border: 2px solid #7A7A7A;
			color: #7A7A7A;
			outline: none;
			}

			&:hover{
			border: 2px solid #7A7A7A;
			color: #7A7A7A;
			}
		`



        return (
            <div>
                <InputStyle placeholder={this.props.text} type={this.props.type} name={this.props.name} id={this.props.id} ></InputStyle>
            </div>
        )
    }
}

export default Input;
