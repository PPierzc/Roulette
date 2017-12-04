import React, { Component } from 'react';

import styled from 'styled-components';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';


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
            width: '31vh',
        };

        const style1 = {
            height: '17vh',
            marginLeft: '60vh',
        };

        const style2 = {
            height: '17vh',
            marginLeft: '60vh',
            marginTop: '17vh',
        };

        const style3 = {
            height: '17vh',
            marginLeft: '60vh',
            marginTop: '34vh',
        };

        const style4 = {
            height: '9vh',
            marginLeft: '50vh',
        };

        const style5 = {
            height: '9vh',
            marginLeft: '50vh',
            marginTop: '9vh',
        };

        const style6 = {
            height: '9vh',
            marginLeft: '50vh',
            marginTop: '17vh',
        };

        const style7 = {
            height: '9vh',
            marginLeft: '50vh',
            marginTop: '26vh',
        };

        const style8 = {
            height: '9vh',
            marginLeft: '50vh',
            marginTop: '35vh',
        };

        const style9 = {
            height: '9vh',
            marginLeft: '50vh',
            marginTop: '42vh',
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
        const Box = styled.div`
          position: absolute;
          display: inline-block;
        `


        document.body.style.backgroundColor = "#4dd465"


        return (
            <DefaultPage>
                <Head> BIEDA </Head>
                <Content>
                    <Div>
                    <RaisedButton label="0" labelColor="white" onClick={this.handleOpen} backgroundColor="#8BC34A" style={style} />
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

                    <Box>
                    <RaisedButton label="First12" labelColor="white" onClick={this.handleOpen} backgroundColor="#43A047" style={style1} />
                    <Dialog
                        title="Obstaw dany numer"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        The actions in this window were passed in as an array of React objects.
                    </Dialog>
                    </Box>
                    <Box>
                        <RaisedButton label="Sec12" labelColor="white"  onClick={this.handleOpen} backgroundColor="#43A047" style={style2} />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                    </Box>
                    <Box>
                        <RaisedButton label="Thi12" labelColor="white"  onClick={this.handleOpen} backgroundColor="#43A047" style={style3} />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                    </Box>
                    <Box>
                        <RaisedButton label="1to18" labelColor="white"  onClick={this.handleOpen} backgroundColor="#43A047" style={style4} />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                    </Box>
                    <Box>
                        <RaisedButton label="ODD" labelColor="white"  onClick={this.handleOpen} backgroundColor="#43A047" style={style5} />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                    </Box>
                    <Box>
                        <RaisedButton  onClick={this.handleOpen} backgroundColor="#F44336" style={style6} />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                    </Box>
                    <Box>
                        <RaisedButton  onClick={this.handleOpen} backgroundColor="#212121" style={style7} />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                    </Box>
                    <Box>
                        <RaisedButton label="EVEN" labelColor="white"  onClick={this.handleOpen} backgroundColor="#43A047" style={style8} />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                    </Box>
                    <Box>
                        <RaisedButton label="19to36" labelColor="white"  onClick={this.handleOpen} backgroundColor="#43A047" style={style9} />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                    </Box>

                    <Div>
                        <RaisedButton label="1" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="2" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="3" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
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
                    <Div>
                        <RaisedButton label="4" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="5" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="6" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
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
                    <Div>
                        <RaisedButton label="7" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="8" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="9" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
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
                    <Div>
                        <RaisedButton label="10" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="11" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="12" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
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
                    <Div>
                        <RaisedButton label="13" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="14" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="15" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
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
                    <Div>
                        <RaisedButton label="16" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="17" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="18" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
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
                    <Div>
                        <RaisedButton label="19" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="20" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="21" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
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
                    <Div>
                        <RaisedButton label="22" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="23" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="24" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
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
                    <Div>
                        <RaisedButton label="25" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="26" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="27" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
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
                    <Div>
                        <RaisedButton label="28" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="29" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="30" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
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
                    <Div>
                        <RaisedButton label="31" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="32" labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="33" labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
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
                    <Div>
                        <RaisedButton label="34" labelColor="white" onClick={this.handleOpen} backgroundColor="#F44336" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="35"  labelColor="white"  onClick={this.handleOpen} backgroundColor="#212121" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="36"  labelColor="white"  onClick={this.handleOpen} backgroundColor="#F44336" />
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
                    <Div>
                        <RaisedButton label="2to1" labelColor="white" onClick={this.handleOpen} backgroundColor="#43A047" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="2to1" labelColor="white" onClick={this.handleOpen} backgroundColor="#43A047" />
                        <Dialog
                            title="Obstaw dany numer"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                        </Dialog>
                        <RaisedButton label="2to1" labelColor="white" onClick={this.handleOpen} backgroundColor="#43A047" />
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

