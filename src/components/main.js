import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    // Link
} from 'react-router-dom'
import Side from './side/Side'
import Header from './header/header'
import Exams from './exams/exams'
import PreHeader from './preHeader/preHeader'
import CardCourses from './courses/CardCourses/CardCourses'
import ListCourses from './courses/ListCourses/ListCourses'
import Home from './home/home'
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
                    {/* <Home /> */}
                    <Side />
                    {/* <Header />
                    <Exams />
                    <PreHeader listHandler={this.listChanger} cardHandler={this.cardChanger}/>
                    {card ? <CardCourses />
                    : <ListCourses />} */}
                    <Switch>
                        <Route path='/courses'>
                            <Header />
                            <Exams />
                            <PreHeader listHandler={this.listChanger} cardHandler={this.cardChanger}/>
                            {card ? <CardCourses />
                            : <ListCourses />}
                        </Route>
                        <Route path='/home'>
                            <Home />
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        )
    }
    
}


export default Main;