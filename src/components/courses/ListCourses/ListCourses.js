import React, {Component} from 'react'
import List from './lists/list'

class ListCourses extends Component {
    render() {
        return (
            <table id="listCourses">
                <thead>
                    <tr className='table-rows'>
                        <th> Course</th>
                        <th>Course Name</th>
                        <th>Course Teacher</th>
                        <th>Students</th>
                        <th>Course Prise</th>
                        <th>Course Test</th>
                    </tr>
                </thead>
                <tbody>
                    <List name='Front End' members='12' teacher='Q Berdiyev' price='250000' URL='https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png' />
                    <List name='Marketing' members='10' teacher='D Eliboyev' price='300000' URL='https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg' />
                    <List name='Back End' members='6' teacher='A Abdusamadov' price='350000' URL='https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png' />
                    <List name='Hacking Lessons' members='9' teacher='FR13NDS' price='150000'URL='https://cdn.pixabay.com/photo/2019/03/08/16/20/monkey-4042658_960_720.jpg' />
                    <List name='Front End' members='12' teacher='Q Berdiyev' price='250000' URL='https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png' />
                    <List name='Marketing' members='10' teacher='D Eliboyev' price='300000' URL='https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg' />
                    <List name='Back End' members='6' teacher='H Ergashev' price='350000' URL='https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png' />
                    <List name='Hacking Lessons' members='9' teacher='FR13NDS' price='150000'URL='https://cdn.pixabay.com/photo/2019/03/08/16/20/monkey-4042658_960_720.jpg' />
                    <List name='Graphic Design' members='11' teacher='F Abdullayev' price='20000' URL='https://cdn.pixabay.com/photo/2015/06/24/16/36/office-820390_960_720.jpg' />
                </tbody>
            </table>
        )
    }
}

export default ListCourses;