import React, { Component } from 'react';

import styled from 'styled-components';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {
    Link
} from 'react-router-dom';



class Bieda extends Component {

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        const actions = [
            <FlatButton
                label="Anuluj"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Obstaw"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];

        const style = {
            margin: 12,
        };

        const Div = styled.div`
  			display: table;
 			margin: 0 auto;
			`

        const DefaultPage = styled.section`
				color: #FFFFFF;
				font-family: Lato;
				margin-top: 0;
				height: 100vh;
				`

        const Content = styled.div`
	   		min-height: 100%;
		`

        const Head = styled.p`
				color: #FFF;
				font-size: 5em;
				margin-top: 100px;
				margin-bottom: 100px;
				font-family: Lato;
				text-align: center;
			`

        document.body.style.backgroundColor = "#4dd465"


        return (
            <DefaultPage>
                <Head> BIEDA </Head>
                <Content>
                    <Div>
                        <RaisedButton label="1" onClick={this.handleOpen} backgroundColor="#F44336" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="2" onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="3" onClick={this.handleOpen} backgroundColor="#F44336" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>

                    </Div>
                </Content>
            </DefaultPage>
        )
    }
}

export default Bieda;

