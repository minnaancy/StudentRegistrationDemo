import React,{Component} from 'react'
import '../CSS/style.css'
import studentDetailsImage from '../images/studentDeatils.jpg'
import axios from 'axios';

class StudentDetailsForm extends Component
{
    state={
        student:[]
    };
    
    componentDidMount()
    {
   axios.get('http://localhost:8080/student/').then(res =>{
   console.log(res);    
   this.setState({student:res.data});
       
    
    });
   }
    render()
    {
       return(

        <div className="main ">
        <div className="container">
             <div className="signup-content">
             <div className="signup-img">
                  <img src={studentDetailsImage}  alt=""/>
            </div>      
               <div className="signup-form">
               <form onSubmit={this.handleSubmit}  class="register-form" id="register-form">
                  <center><h2>Student Details</h2></center> 
                    
        <table id="studentDetails">
             <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Class</th>
                <th>Division</th>
             </tr>
         
           
  {this.state.student.map(student=>
        <tr key={student.id}>     
        <td>{student.name}</td>
        <td>{student.gender}</td>
        <td>{student.dob}</td>
        <td>{student.grade}</td>
        <td>{student.division}</td>
       </tr>)}
</table>


              </form>
               </div>
             </div>
         </div>
     </div>


       
       )}
}
export default StudentDetailsForm;