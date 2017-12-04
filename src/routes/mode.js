import React, { Component } from 'react';

import styled from 'styled-components';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import {
    Link
} from 'react-router-dom';

class Mode extends Component {
    render() {

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
                <Head> TRYB GRY </Head>
                <Content>
                    <Div>
                        <p>Saldo: </p>
                        <RaisedButton label="Bieda(min. 1k / max. 50k)" href="/bieda" style={style}/>
                        <RaisedButton label="Gitara Siema(min. 10k / max. 500k)" href="/" style={style}/>
                        <RaisedButton label="Lecimy Tutaj(min. 50k / max. 2,5m)" href="/" style={style}/>
                        <RaisedButton label="Grubo albo Wcale(min. 250k / max. 12,5M)" href="/" style={style}/>
                    </Div>
                </Content>
            </DefaultPage>
        )
    }
}

export default Mode;

