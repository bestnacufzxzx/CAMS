import React from 'react';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
// import MenuBar from './Layout/MenuBar';
// import MenuBar from './admin/Layout/MenuBar';
// import MenuBar from './teacher/Layout/MenuBar';
// import MenuBar from './coursecoordinator/Layout/MenuBar';
import MenuBar from './parent/Layout/MenuBar';


// import Containers from './Containers/containers';

// import Header from './Layout/Header';
// import Footer from './Layout/Footer';
// import Content from './Layout/Content';

// import Header from './admin/Layout/Header';
// import Footer from './admin/Layout/Footer';
// import Content from './admin/Layout/Content';

// import Header from './teacher/Layout/Header';
// import Footer from './teacher/Layout/Footer';
// import Content from './teacher/Layout/Content';


// import Header from './coursecoordinator/Layout/Header';
// import Footer from './coursecoordinator/Layout/Footer';
// import Content from './coursecoordinator/Layout/Content';


import Header from './parent/Layout/Header';
import Footer from './parent/Layout/Footer';
import Content from './parent/Layout/Content';


// import ShowCourse from './admin/course/ShowCourse';
// import Updatacourse from './admin/course/Updatacourse';
// import ImportCourse from './admin/course/ImportCourse';
// import Showlocation from './admin/setlocationmap/Showlocation';
// import Editlocation from './admin/setlocationmap/editlocatonmap/Editlocation';
// import Createlocation from './admin/setlocationmap/createlocation/Createlocation';
// import Showimportteacher from './admin/Importteacher/Showimportteacher';
// import Createimportteacher from './admin/Importteacher/importteacher/Createimportteacher';
// import Showimportstudent from './admin/Importstudent/Showimportstudent';
// import Createimportstudent from './admin/Importstudent/Importstudents/Createimportstudent';
// import EditImportteacher from './admin/Importteacher/EditImportteacher/EditImportteacher';
// import EditImportstudent from './admin/Importstudent/EditImportstudent/EditImportstudent';
// import ShowAccountStudent from './admin/AccountStudent/ShowAccountStudent';
// import CreateAccountStudent from './admin/AccountStudent/CreateAccountStudent/CreateAccountStudent';
// import ShowAccountTeacher from './admin/AccountTeacher/ShowAccountTeacher';
// import CreateAccountTeacher from './admin/AccountTeacher/CreateAccountTeacher/CreateAccountTeacher';
// import EditAccountTeacher from './admin/AccountTeacher/EditAccountTeacher/EditAccountTeacher';
// import EditAccountStudent from './admin/AccountStudent/EditAccountStudent/EditAccountStudent';

// import Attendancelocation from './teacher/Attendancelocation/Attendancelocation';
// import Course from './teacher/Course/Course';
// import CreateAttendencelocation from './teacher/Attendancelocation/CreateAttendencelocation/CreateAttendencelocation';
// import EditCourse from './teacher/Course/EditCourse/EditCourse';
// import CreateCourse from './teacher/Course/CreateCourse/CreateCourse';
// import Timetreatment from './teacher/Timetreatment/Timetreatment';
// import Profile from './teacher/Profile/Profile';
// import Showhistorycourse from './teacher/Showhistorycourse/Showhistorycourse';


// import CreateRegistrationlink from './coursecoordinator/CreateRegistrationlink/CreateRegistrationlink';
// import Showhistorycourse from './coursecoordinator/Showhistorycourse/Showhistorycourse';
// import Timetreatment from './coursecoordinator/Timetreatment/Timetreatment';
// import ShowRegistrationlink from './coursecoordinator/ShowRegistrationlink/ShowRegistrationlink';


import ShowStudenthistory from './parent/ShowStudenthistory';




// const store = configStore();

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <MenuBar></MenuBar>
        <Route exact path="/" component={Content}/>
          {/* <Route exact path="/admin/ShowCourse" component={ShowCourse} />
          <Route exact path="/admin/course/ImportCourse" component={ImportCourse} />
          <Route exact path="/admin/course/Updatacourse" component={Updatacourse} />
          <Route exact path="/admin/Showlocation" component={Showlocation} />
          <Route exact path="/admin/Editlocation" component={Editlocation} />
          <Route exact path="/admin/Createlocation" component={Createlocation} />
          <Route exact path="/admin/Showimportteacher" component={Showimportteacher} />
          <Route exact path="/admin/Createimportteacher" component={Createimportteacher} />
          <Route exact path="/admin/Showimportstudent" component={Showimportstudent} />
          <Route exact path="/admin/Createimportstudent" component={Createimportstudent} />
          <Route exact path="/admin/EditImportteacher" component={EditImportteacher} />
          <Route exact path="/admin/EditImportstudent" component={EditImportstudent} />
          <Route exact path="/admin/ShowAccountStudent" component={ShowAccountStudent} />
          <Route exact path="/admin/CreateAccountStudent" component={CreateAccountStudent} />
          <Route exact path="/admin/ShowAccountTeacher" component={ShowAccountTeacher} />
          <Route exact path="/admin/CreateAccountTeacher" component={CreateAccountTeacher} />
          <Route exact path="/admin/EditAccountTeacher" component={EditAccountTeacher} />
          <Route exact path="/admin/EditAccountStudent" component={EditAccountStudent} /> */}

          {/* <Route exact path="/admin/Attendancelocation" component={Attendancelocation} />
          <Route exact path="/admin/Course" component={Course} />
          <Route exact path="/admin/CreateAttendencelocation" component={CreateAttendencelocation} />
          <Route exact path="/admin/EditCourse" component={EditCourse} />
          <Route exact path="/admin/CreateCourse" component={CreateCourse} />
          <Route exact path="/admin/Timetreatment" component={Timetreatment} />
          <Route exact path="/admin/Profile" component={Profile} /> 
          <Route exact path="/admin/Showhistorycourse" component={Showhistorycourse} />  */}
{/* 
          <Route exact path="/admin/CreateRegistrationlink" component={CreateRegistrationlink} /> 
          <Route exact path="/admin/Showhistorycourse" component={Showhistorycourse} /> 
          <Route exact path="/admin/Timetreatment" component={Timetreatment} /> 
          <Route exact path="/admin/ShowRegistrationlink" component={ShowRegistrationlink} />  */}


          <Route exact path="/admin/ShowStudenthistory" component={ShowStudenthistory} /> 





 {/*    <Containers>

        </Containers> */}
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
