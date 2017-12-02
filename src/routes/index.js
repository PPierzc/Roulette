import React, { Component } from 'react';

import styled from 'styled-components';

import RaisedButton from 'material-ui/RaisedButton';

import {
    Link
} from 'react-router-dom';

class Index extends Component {
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

        const Footer = styled.section`
			    width: 100%;
			    text-align: left;
			    padding-left: 30px;
			    padding-top: 10px;
			    font-size: 10px;
			    background: #333333;
			   	display: flex;
			    font-family: Lato;
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
                <Head> Braintank </Head>
                <Content>
                    <Div>
                        <RaisedButton label="Zarejestruj się" href="/rejestracja" style={style}/>
                        <RaisedButton label="Zaloguj się" href="/logowanie" style={style}/>
                    </Div>
                </Content>
                <Footer><div><p>&copy; Braintank 2017</p><a href="mailto:kontakt@braintank.pl">kontakt@braintank.pl</a></div></Footer>
            </DefaultPage>
        )
    }
}

export default Index;

