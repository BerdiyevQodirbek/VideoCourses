import React, {Component} from 'react';
import List from './lists/list'
import  '../../home/home.css'
import  '../../home/courses/list-style.css'

class ListCourses extends Component {
    render() {
        return (
            <ul id="listCourses">
                <List duration='6h 12min' famous='4.5' type='Programming' percent='55'  name='Front End' members='12' teacher='Q Berdiyev' price='250000' URL='https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png' />
                <List duration='3h 45min' famous='4.8' type='Business' percent='12'  name='Marketing' members='10' teacher='D Eliboyev' price='300000' URL='https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg' />
                <List duration='15h 58min' famous='4.9' type='Programming' percent='40'  name='Back End' members='6' teacher='A Abdusamadov' price='350000' URL='https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png' />
                <List duration='24h/7' famous='0.1' type='Comics' percent='100'  name='Hacking Lessons' members='9' teacher='FR13NDS' price='150000'URL='https://cdn.pixabay.com/photo/2019/03/08/16/20/monkey-4042658_960_720.jpg' />
                <List duration='11h 4min' famous='4.2' type='Programming' percent='90'  name='Front End' members='12' teacher='Q Berdiyev' price='250000' URL='https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png' />
                <List duration='13h 1min' famous='4.7' type='Business' percent='23'  name='Marketing' members='10' teacher='D Eliboyev' price='300000' URL='https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg' />
                <List duration='4hour 45min' famous='4.3' type='Programming' percent='56'  name='Back End' members='6' teacher='H Ergashev' price='350000' URL='https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png' />
                <List duration='1min' famous='1.1' type='Mif' percent='99'  name='Hacking Lessons' members='9' teacher='FR13NDS' price='150000'URL='https://cdn.pixabay.com/photo/2019/03/08/16/20/monkey-4042658_960_720.jpg' />
                <List duration='21h 13min' famous='5' type='Designing' percent='67'  name='Graphic Design' members='11' teacher='F Abdullayev' price='20000' URL='https://cdn.pixabay.com/photo/2015/06/24/16/36/office-820390_960_720.jpg' />
            </ul>
            // <table id="listCourses">
            //     <thead>
            //         <tr className='table-rows'>
            //             <th> Course</th>
            //             <th>Course Name</th>
            //             <th>Course Teacher</th>
            //             <th>Students</th>
            //             <th>Course Prise</th>
            //             <th>Course Test</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         <List name='Front End' members='12' teacher='Q Berdiyev' price='250000' URL='https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png' />
            //         <List name='Marketing' members='10' teacher='D Eliboyev' price='300000' URL='https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg' />
            //         <List name='Back End' members='6' teacher='A Abdusamadov' price='350000' URL='https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png' />
            //         <List name='Hacking Lessons' members='9' teacher='FR13NDS' price='150000'URL='https://cdn.pixabay.com/photo/2019/03/08/16/20/monkey-4042658_960_720.jpg' />
            //         <List name='Front End' members='12' teacher='Q Berdiyev' price='250000' URL='https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png' />
            //         <List name='Marketing' members='10' teacher='D Eliboyev' price='300000' URL='https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg' />
            //         <List name='Back End' members='6' teacher='H Ergashev' price='350000' URL='https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png' />
            //         <List name='Hacking Lessons' members='9' teacher='FR13NDS' price='150000'URL='https://cdn.pixabay.com/photo/2019/03/08/16/20/monkey-4042658_960_720.jpg' />
            //         <List name='Graphic Design' members='11' teacher='F Abdullayev' price='20000' URL='https://cdn.pixabay.com/photo/2015/06/24/16/36/office-820390_960_720.jpg' />
            //     </tbody>
            // </table>
        )
    }
}

export default ListCourses;