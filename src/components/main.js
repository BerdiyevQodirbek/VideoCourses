import React, { Component } from 'react';
import Side from './side/side'
import Header from './header/header'
import Exams from './exams/exams'
import PreHeader from './preHeader/preHeader'
import CardCourses from './courses/CardCourses/CardCourses'
import ListCourses from './courses/ListCourses/ListCourses'
// import Home from './home/home'
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
            <>
                <main>
                    {/* <Home /> */}
                    <Side />
                    <Header />
                    <Exams />
                    <PreHeader listHandler={this.listChanger} cardHandler={this.cardChanger}/>
                    {card ? <CardCourses />
                    : <ListCourses />}
                </main>
            </>
        )
    }
    
}


export default Main;