import React, {Component} from 'react'
import Card from './cards/card'


class CardCourses extends Component {
    render() {
        return (
            <div id="cardCourses">
                <Card name='Front End' members='12' teacher='Q Berdiyev' price='250000' URL='https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png' />
                <Card name='Marketing' members='10' teacher='D Eliboyev' price='300000' URL='https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg' />
                <Card name='Back End' members='6' teacher='A Abdusamadov' price='350000' URL='https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png' />
                <Card name='Hacking Lessons' members='9' teacher='FR13NDS' price='150000'URL='https://cdn.pixabay.com/photo/2019/03/08/16/20/monkey-4042658_960_720.jpg' />
                <Card name='Front End' members='12' teacher='Q Berdiyev' price='250000' URL='https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png' />
                <Card name='Marketing' members='10' teacher='D Eliboyev' price='300000' URL='https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg' />
                <Card name='Back End' members='6' teacher='H Ergashev' price='350000' URL='https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png' />
                <Card name='Hacking Lessons' members='9' teacher='FR13NDS' price='150000'URL='https://cdn.pixabay.com/photo/2019/03/08/16/20/monkey-4042658_960_720.jpg' />
                <Card name='Graphic Design' members='11' teacher='F Abdullayev' price='20000' URL='https://cdn.pixabay.com/photo/2015/06/24/16/36/office-820390_960_720.jpg' />
            </div>
        )
    }
}

export default CardCourses;