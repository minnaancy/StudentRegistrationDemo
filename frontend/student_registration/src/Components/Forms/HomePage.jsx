import React from 'react';
import {Tab,Tabs,AppBar} from '@material-ui/core';
import StudentRegistrationForm from './StudentRegistrationForm';
 import StudentDetailsForm from './StudentDetailsForm';

const HomePage =()=>
{
    const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
    return (
        
        <>
    <AppBar position="static"className="rootHome" style={{width:85+'rem'}} >
    <Tabs value={selectedTab} onChange={handleChange}>
    <Tab label="STUDENT REGISTRATION"  />
    <Tab label="STUDENT DETAILS"/>
    </Tabs>
    </AppBar>
    {selectedTab===0 && <StudentRegistrationForm />}
    {selectedTab===1 && <StudentDetailsForm />}
</>
    );
};
export default HomePage;