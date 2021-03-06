import React from 'react';
import {Link} from 'react-router-dom';


export default class CoursesList extends React.PureComponent {


  render() {
    const {courses} = this.props;
    let result;
    if (courses && courses.length > 1) {
      result = courses.map((course) => {
        return (
                <div className="grid-33" key={course.id}>
                    <Link to={`/courses/${course.id}`}>
                        <div className="course--module course--link" >
                        <h4 className='course--label'>Course</h4>
                        <h3 className='course--title'>{course.title}</h3>
                        </div>
                    </Link>
                </div>
                )       
      })
    } else {
      return (
        <div>
          ...
        </div>          
      )
    }
    const add = (
                <div className="grid-33" key={courses.length}>
                    <Link to='/courses/create'>
                        <div className="course--module course--add--module" >
                        <h3 className='course--add--title'>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 13 13" className="add">
                                <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                            </svg>
                            New Course   
                        </h3>
                        </div>
                    </Link>
                </div>
    );
    return (
      <div>
        {result}
        {add}      
      </div>
    )
 }
}
