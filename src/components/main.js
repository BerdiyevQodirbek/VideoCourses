import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    // Link
} from 'react-router-dom'
import Side from './side/Side'
import Settings from './Settings/Settings'
import Dashboard from './Dashboard/Dashboard'
import Header from './header/header'
import Exams from './exams/exams'
import PreHeader from './preHeader/preHeader'
import CardCourses from './courses/CardCourses/CardCourses'
import ListCourses from './courses/ListCourses/ListCourses'
import Home from './home/home'
import SignUp from './Sign/Sign'
import Overview from './courses/Overview/Overview'
import './main.css'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state= {card: true, list: false}
    }

    cardChanger = () => {
        this.setState({card: true, list: false})
    }

    listChanger = () => {
        this.setState({card: false, list: true})
    }

    render() {
        const {card} = this.state
        return(
            <BrowserRouter>
                <main>
                    <Switch>
                        <Route path='/courses'>
                            <Side />
                            <Header />
                            <Exams />
                            <PreHeader listHandler={this.listChanger} cardHandler={this.cardChanger}/>
                            {card 
                            ? <CardCourses />
                            : <ListCourses />}
                        </Route>
                        <Route path='/dashboard'>
                            <Side />
                            <Dashboard />
                        </Route>
                        <Route path='/Settings'>
                            <Side />
                            <Settings />
                        </Route>
                        <Route path='/sign'>
                            <SignUp />
                        </Route>
                        <Route path='/courses/overview'>
                            <Side />
                            <Overview />
                        </Route>
                        <Route path='/'>
                            <Side />
                            <Home />
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        )
    }
    
}




export default Main;