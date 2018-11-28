import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {


        firebase.initializeApp({
            apiKey: 'AIzaSyBIkfNi1OD3yIcoLNBGetMku4kGjvdJ3YY',
            authDomain: 'authudemy-ebd2c.firebaseapp.com',
            databaseURL: 'https://authudemy-ebd2c.firebaseio.com',
            projectId: 'authudemy-ebd2c',
            storageBucket: 'authudemy-ebd2c.appspot.com',
            messagingSenderId: '843293299503'
          });

          firebase.auth().onAuthStateChanged(( user ) => {

            if (user) {
                this.setState( { loggedIn: true });
            } else {
                this.setState( { loggedIn: false });
            }
          });
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={ () => firebase.auth().signOut() }> Log Out </Button>
                    </CardSection>

                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />
        }


        if (this.state.loggedIn) {
        } 


    }
    render() {
        return (
            <SafeAreaView>
                <Header headerText="Authentication" />
                    { this.renderContent() }
            </SafeAreaView>
        );
    }
}

export default App;