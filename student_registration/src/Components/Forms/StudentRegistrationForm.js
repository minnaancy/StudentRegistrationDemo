import React,{Component} from 'react'
import '../CSS/style.css'
import image from '../images/student.jpg'
import axios from 'axios';

class StudentRegistrationForm extends Component{
 
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            gender:'',
            dob:'',
            grade:'',
            division:'',    
                      };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);    
     }
    
     handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        console.log(name);
        console.log(value);
        this.setState({
           [name]: value
        });
     }

    handleSubmit =event=>{
         event.preventDefault();

         const student={
             name:this.state.name,
             gender:this.state.gender,
             dob:this.state.dob,
             grade:this.state.grade,
             division:this.state.division,
            };
            console.log(student);
                 
         axios.post('http://localhost:8080/student/save',student
        ).then( 
            res=>{ 
                console.log(res);
                console.log(res.data);
                alert(res.data);
            }
        );
    };

render(){
return(    
    <div className="main">
    <div className="container">
         <div className="signup-content">
         <div className="signup-img">
              <img src={image}  alt=""/>
        </div>      
           <div className="signup-form">
           <form onSubmit={this.handleSubmit}  class="register-form" id="register-form">
              <center><h2>Student Registration </h2></center> 
                <div className="form-group">
                        <label for="name">Name *</label>
                        <input type="text" placeholder="Your Name" pattern="[a-zA-Z][a-zA-Z ]{2,}"  name="name" id="name" value={this.state.name} onChange={this.handleChange} required/>
                 </div>
                 <div className="form-radio">
                     <label for="gender" class="radio-label">Gender *</label>
                        <div className="form-radio-item">
                            <input type="radio" name="gender" id="male" value="Male" onChange={this.handleChange} required />
                            <label for="male">Male</label>
                            <span className="check"></span> 
                        </div>
                        <div className="form-radio-item">
                            <input type="radio" name="gender" id="female" value="Female" onChange={this.handleChange} required />
                            <label for="female">Female</label>
                            <span className="check"></span>
                        </div>  
                        <div className="form-radio-item">
                            <input type="radio" name="gender" value="Other" onChange={this.handleChange} id="other" required/>
                            <label for="other">Other</label>
                            <span className="check"></span>
                        </div>      
                </div>
                <div className="form-group">
                        <label for="birth_date">Date of Birth *</label>
                        <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} id="dob" required/>
                </div>
                <div class="form-row">
                      <div className="form-group">
                            <label for="class">Class *</label>
                            <div className="form-select">
                                <select name="grade" id="grade" value={this.state.grade} onChange={this.handleChange} required>
                                     <option value="Select">Select</option>
                                     <option value="I"> I</option>
                                    <option value="II">II</option>
                                     <option value="III">III</option>
                                    <option value="IV">IV</option>
                                    <option value="V">V</option>
                                    <option value="V1">V1</option>
                                    <option value="V11">V11</option>
                                    <option value="V111">V111</option>
                                    <option value="1X">1X</option>
                                    <option value="X">X</option>
                                    <option value="X11">X11</option>
                                    <option value="X12">X12</option>
                                </select>
                                <span className="select-icon"><i className="zmdi zmdi-chevron-down"></i></span>
                            </div>
                       </div>
                         <div className="form-group">
                            <label for="division">Division *</label>
                            <div className="form-select">
                                <select name="division" id="division" value={this.state.division} onChange={this.handleChange} required>
                                     <option value="Select">Select</option>
                                     <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                                <span className="select-icon"><i className="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>
                </div>                
                <div className="form-submit">
                        <input type="submit" value="Submit Form" className="submit" name="submit" id="submit" />
                </div>
          </form>
           </div>
         </div>
     </div>
 </div>
);
}
}

export default StudentRegistrationForm