import React, { Component } from 'react';
import { Main, Subscribe, SubscribeWrapper, Nav, NavContainer, NavItem, Location, LocationTitle, LocationContainer, Text, City, ChangeCity, CityInput, Instructions, Button } from './styles'
import Header from '../Header';
import ImageContainer from '../Image';
import Start from '../Pages/Start/index';
import Elpris from '../Pages/Elpris/index';
import Utgifter from '../Pages/Utgifter/index';
import Bekrafta from '../Pages/Bekrafta/index';
import Notifications from '../Pages/Start/Notifications/index';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

class SubscibeApp extends Component {
    constructor(props) {
        super(props);

        this.onKeyPressed = this.onKeyPressed.bind(this);

        this.state = {
            progressValue: 1,
            city: 'Borås',
            showInput: false,
        };
    }

    setProgressValue = (progressValue, path) => {
        if ( path === 'elpris' ) {
            this.setState({
                progressValue: progressValue = 2,
            });
        } else if ( path === 'utgifter' ) {
            this.setState({
                progressValue: progressValue = 3,
            });
        } else if ( path === 'bekrafta' ) {
            this.setState({
                progressValue: progressValue = 4,
            });
        } else {
            this.setState({
                progressValue: progressValue = 1,
            });
        }
    }

    changeLocationHandler = () => {
        this.setState({
            showInput: true,
        });
    }

    myChangeHandler = (e) => {
        this.setState({
            city: e.target.value,
        });
    }

    onKeyPressed = (e) => {
        if( e.key === 'Enter' || e.key === 13 ) {
            this.setState({
                showInput: false,
            });
        }
    }

    render() {
        const { progressValue, city, showInput } = this.state;

        return(
            <Main>
                <Subscribe>
                    <SubscribeWrapper>
                        <Header progressValue={ progressValue } />

                        <Router>
                            <Nav>
                                <NavContainer>
                                    <NavItem>
                                        <Link to="/wallmander" onClick={ () => this.setProgressValue(progressValue, '') }>Start</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/elpris" onClick={ () => this.setProgressValue(progressValue, 'elpris') }>Elpris</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/utgifter" onClick={ () => this.setProgressValue(progressValue, 'utgifter') }>Utgifter</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/bekrafta" onClick={ () => this.setProgressValue(progressValue, 'bekrafta') }>Bekräfta</Link>
                                    </NavItem>
                                </NavContainer>
                            </Nav>

                            <Switch>
                                <Route exact path="/wallmander">
                                    <Start />
                                    <Location>
                                        <LocationTitle>Starta här</LocationTitle>
                                        <LocationContainer>
                                            <Text>Jag bor i </Text>
                                            <City onClick={ () => this.changeLocationHandler(showInput) }>
                                                { city }

                                                <ChangeCity showInput={ showInput }>
                                                    <CityInput
                                                        type="text"
                                                        onChange={ this.myChangeHandler }
                                                        onKeyDown={ this.onKeyPressed }
                                                    />
                                                </ChangeCity>
                                            </City>
                                            <Instructions>Klicka för att ändra postnummer</Instructions>
                                        </LocationContainer>
                                    </Location>
                                    <Link to="/elpris" onClick={ () => this.setProgressValue(progressValue, 'elpris') }>
                                        <Button>Beräkna ditt elpris</Button>
                                    </Link>
                                    <Notifications />
                                </Route>
                                <Route path="/elpris">
                                    <Elpris />
                                </Route>
                                <Route path="/utgifter">
                                    <Utgifter />
                                </Route>
                                <Route path="/bekrafta">
                                    <Bekrafta />
                                </Route>
                            </Switch>
                        </Router>
                    </SubscribeWrapper>
                </Subscribe>
                
                <ImageContainer />
            </Main>
        );
    };
};

export default SubscibeApp;
