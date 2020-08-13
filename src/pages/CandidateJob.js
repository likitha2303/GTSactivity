import React, { Component } from 'react';
//import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import {FormGroup,  Row,NavLink,NavItem, Col, ButtonGroup} from 'reactstrap';
 import { Form,FormControl,FormLabel,FormRow, Button, FormCheck} from 'react-bootstrap';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload, faCalendar} from '@fortawesome/free-solid-svg-icons'
import Footer1 from '../components/Footer1';
import Header from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
//import { render } from 'node-sass';



  

 const data_people = {
columns: [
{
label: 'Edit',
field: 'id',
sort: 'asc',
},
{
label: 'Name of Candidate',
field: 'name',
sort: 'asc'
},
{
label: 'Candidate Email',
field: 'candidateemail',
sort: 'asc'
},
{
label: 'Candidate Mobile Number',
field: 'mobilenumber',
sort: 'asc'
},
{
label: 'Company Name',
field: 'companyname',
sort: 'asc'
},
{
label: 'Project Name',
field: 'projectname',
sort: 'asc'
},
{
label: 'Project Description',
field: 'desc',
sort: 'asc'
},
{
  label: 'Project Manager',
  field: 'managername',
  sort: 'asc'
  },
  {
    label: 'Project Manager Contact Number',
    field: 'managernumber',
    sort: 'asc'
    },
    {
      label: 'Joining Date',
      field: 'joiningdate',
      sort: 'asc'
      },
      {
        label: 'End Date',
        field: 'enddate',
        sort: 'asc'
        }  
],
rows: [
{
'id':  [<i  className="fa fa-edit mr-2 black-text" aria-hidden="true"></i>, ],
'name': 'Kushal Rao',
'candidateemail': 'kushalrao@gmail.com',
'mobilenumber': '+91 75 86053047',
'companyname': 'Cisco Systems',
'projectname': 'Dashboard Developer',
'desc': 'Developed dashboards for educational institutes on Visual Basic',
'managername': 'Pinky Animesh Issac',
'managernumber':'+91 98 38915931',
'joiningdate': '21 Jul 2020',
'enddate':'20 Aug 2020'
},
{
  'id':  [<i  className="fa fa-edit mr-2 black-text" aria-hidden="true"></i>, ],
  'name': 'Lata Aurora',
  'candidateemail': 'lataaurora@gmail.com',
  'mobilenumber': '+91 66 43710370',
  'companyname': 'Amazon',
  'projectname': 'Intern AWS architect',
  'desc': '-NIL-',
  'managername': 'Mayawati Dua',
  'managernumber':'+91 72 12152696',
  'joiningdate': '01 Jan 2019',
  'enddate':'20 Jun 2019'
  },
  {
    'id':  [<i  className="fa fa-edit mr-2 black-text" aria-hidden="true"></i>, ],
    'name': 'Naseer Mittal',
    'candidateemail': 'naseermittal@gmail.com',
    'mobilenumber': '+91-945-556-9273',
    'companyname': 'TCS',
    'projectname': 'Software Engineer',
    'desc': '-NIL-',
    'managername': 'Ajinkya Ram Mani',
    'managernumber':'+91-855-505-1911',
    'joiningdate': '01 Jan 2020',
    'enddate':'01 Jun 2020'
    },
    
      {
        'id':  [<i  className="fa fa-edit mr-2 black-text" aria-hidden="true"></i>, ],
        'name': 'Yogesh Rao',
        'candidateemail': 'yogeshrao@gmail.com',
        'mobilenumber': '+91-755-505-9334',
        'companyname': 'ZS',
        'projectname': 'Data Engineer',
        'desc': 'Develops, constructs, tests and maintains architectures such as databases and largescale processing systems.',
        'managername': 'Charu Ghalib Jaggi',
        'managernumber':'+91-855-507-1150',
        'joiningdate': '02 Feb 2020',
        'enddate':'14 Apr 2020'
        },
        {
          'id':  [<i  className="fa fa-edit mr-2 black-text" aria-hidden="true"></i>, ],
          'name': 'Tanay Agarwal',
          'candidateemail': 'tanayagarwal@gmail.com',
          'mobilenumber': '+91-935-556-4309',
          'companyname': 'Flipkart',
          'projectname': 'Supply Chain Manager',
          'desc': '-NIL-',
          'managername': 'Bishnu Kumar Meda',
          'managernumber':'+91-755-517-3402',
          'joiningdate': '14 Jan 2020',
          'enddate':'20 Jun 2020'
          },
        {
          'id':  [<i  className="fa fa-edit mr-2 black-text" aria-hidden="true"></i>, ],
          'name': 'Sunita Sankar',
          'candidateemail': 'sunitasankar@gmail.com',
          'mobilenumber': '+91-855-576-1007',
          'companyname': 'Myntra',
          'projectname': 'Sales Engineer',
          'desc': 'Prepare and deliver technical presentations explaining products or services to existing and prospective customers.',
          'managername': 'Pravin Devan',
          'managernumber':'+91-855-573-4679',
          'joiningdate': '01 Jan 2020',
          'enddate':'20 Jun 2020'
          },
          {
            'id':  [<i  className="fa fa-edit mr-2 black-text" aria-hidden="true"></i>, ],
            'name': 'Jawahar Sanghvi',
            'candidateemail': 'jawaharsanghvi@gmail.com',
            'mobilenumber': '+91 66 43710370',
            'companyname': 'HCL',
            'projectname': 'Electrical Designer',
            'desc': '-NIL-',
            'managername': 'Munaf Lal Sundaram',
            'managernumber':'+91-925-555-3771',
            'joiningdate': '14 Jan 2020',
            'enddate':'20 Jun 2020'
            },
            {
              'id':  [<i  className="fa fa-edit mr-2 black-text" aria-hidden="true"></i>, ],
              'name': 'Arun Thaman',
              'candidateemail': 'arunthaman@gmail.com',
              'mobilenumber': '+91-995-550-9155',
              'companyname': 'Zomato',
              'projectname': 'HR Manager',
              'desc': 'Develops policy and directs and coordinates human resources activities',
              'managername': 'Vicky Chopra',
              'managernumber':'+91-855-579-1635',
              'joiningdate': '01 Jan 2020',
              'enddate':'01 Jun 2020'
              },
              {
                'id':  [<i  className="fa fa-edit mr-2 black-text" aria-hidden="true"></i>, ],
                'name': 'Satishwar Chaudhry',
                'candidateemail': 'satishwarchaudhry@gmail.com',
                'mobilenumber': '+91-985-556-4381',
                'companyname': 'HCL',
                'projectname': 'Accountant',
                'desc': 'Provides financial information to management by researching and analysing accounting data',
                'managername': 'Nitika Qabool Gaba',
                'managernumber':'+91-855-548-9220',
                'joiningdate': '02 Feb 2020',
                'enddate':'14 Apr 2020'
                },
                                                                      
  


]
};
class CandidateJob extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle1=this.toggle1.bind(this);
    this.toggle2=this.toggle2.bind(this);
    this.toggle3=this.toggle3.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseEnter1=this.onMouseEnter1.bind(this);
    this.onMouseEnter2=this.onMouseEnter2.bind(this);
    this.onMouseEnter3=this.onMouseEnter3.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseLeave1 = this.onMouseLeave1.bind(this);
    this.onMouseLeave2=this.onMouseLeave2.bind(this);
    this.onMouseLeave3=this.onMouseLeave3.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpen1: false,
      dropdownOpen2:false,
      dropdownOpen3: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }
    ));
  }
    toggle1(){
    this.setState(prevState =>({
      dropdownOpen1: !prevState.dropdownOpen1
    }));
  }
  toggle2(){
    this.setState(prevState =>({
      dropdownOpen2: !prevState.dropdownOpen2
    }));
  }
  toggle3(){
    this.setState(prevState =>({
      dropdownOpen3: !prevState.dropdownOpen3
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }
  onMouseEnter1(){
    this.setState({dropdownOpen1: true});
  }
  onMouseEnter2(){
    this.setState({dropdownOpen2: true});
  }
  onMouseEnter3(){
    this.setState({dropdownOpen3: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }
  onMouseLeave1(){
    this.setState({dropdownOpen1: false});
  }
  onMouseLeave2(){
    this.setState({dropdownOpen2: false});
  }
  onMouseLeave3(){
    this.setState({dropdownOpen3: false});
  }
   


  
render()
{
return(
  <>
 <Header />
 <hr />
 <div className="container-fluid">
                  <div class="row">    {/* MAIN    ROW*/}
                 
                <div class="col">  {/*FRIST col START*/}
                      <label> <big><FontAwesomeIcon icon={faUser}/></big></label>

                    <div class="row">
                             <div class="col-3">
                                <label >Name:</label>
                              </div>
                             <div class="col-9"  >
                                <label class="text-primary">Aditya Mukund </label>
                             </div>
                      </div>

                    <div class="row">
                           <div class="col-7">
                              <label>Current Role:</label>
                           </div>
                           <div class="col--1">
                                <label class="text-primary"> Employer </label>
                          </div>
                    </div>

                    <div class="row"  >
                      <div class="col-3">
                          <button type="button" class="text-center" class="btn btn-primary btn-sm btn-center">Switch Role</button>
                    </div>
                    </div>


             </div> {/* Frist col ends*/}
               

                  
                    <div class="col">
                    <ul class="nav navbar-nav">
                    <li class="dropdown">
                    <Dropdown className="d-inline-block" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>  <DropdownToggle variant="primary" id="dropdown-basic" caret>
          PROFILE MANAGEMENT
        </DropdownToggle> 
        <DropdownMenu>
          <DropdownItem header>PROFILE MANAGEMENT</DropdownItem>
          <DropdownItem >UPDATE PROFILE</DropdownItem>
          <DropdownItem>PASSWORD</DropdownItem>
          <DropdownItem>WORK EXPERIENCE</DropdownItem> 
          <DropdownItem>YOUR PROFILE VIEWER</DropdownItem>
        </DropdownMenu>
      </Dropdown>
                    </li>
                    </ul>
                    </div>
                    <div class="col">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <Dropdown className="d-inline-block" onMouseEnter={this.onMouseEnter1} onMouseLeave={this.onMouseLeave1} isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>  <DropdownToggle variant="primary" id="dropdown-basic" caret>
          JOB DASHBOARD
        </DropdownToggle> 
        <DropdownMenu>
          <DropdownItem header>JOB DASHBOARD</DropdownItem>
          <DropdownItem href="/RecomendedJob" >RECOMMENDED JOBS</DropdownItem>
          <DropdownItem>JOBS IN PROGRESS</DropdownItem>
          <DropdownItem>CONSULT WITH EMPLOYER</DropdownItem> 
          <DropdownItem>CONSULT WITH RECRUITER</DropdownItem>
        </DropdownMenu>
      </Dropdown>
                    </li>
                    </ul>
                    </div>   
                    <div class="col">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <Dropdown className="d-inline-block" onMouseEnter={this.onMouseEnter2} onMouseLeave={this.onMouseLeave2} isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>  <DropdownToggle variant="primary" id="dropdown-basic" caret>
          JOB LOOKOUT
        </DropdownToggle> 
        <DropdownMenu>
          <DropdownItem header>JOB LOOKOUT</DropdownItem>
          <DropdownItem >RECOMMENDED JOBS</DropdownItem>
          <DropdownItem>JOBS IN PROGRESS</DropdownItem>
          <DropdownItem>CONSULT WITH EMPLOYER</DropdownItem> 
          <DropdownItem>CONSULT WITH RECRUITER</DropdownItem>
        </DropdownMenu>
      </Dropdown>
                    </li>
                    </ul>
                    </div>   

         <div class="col">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <Dropdown className="d-inline-block" onMouseEnter={this.onMouseEnter3} onMouseLeave={this.onMouseLeave3} isOpen={this.state.dropdownOpen3} toggle={this.toggle3}>  <DropdownToggle variant="primary" id="dropdown-basic" caret>
          PLACEMENT ACTIVITY
        </DropdownToggle> 
        <DropdownMenu>
          <DropdownItem header>PLACEMENT ACTIVITY</DropdownItem>
          <DropdownItem href="/CandidateAgreement" >CANDIDATE AGREEMENT</DropdownItem>
          <DropdownItem>CANDIDATE ON JOB</DropdownItem>
          <DropdownItem>CANDIDATE HISTORY</DropdownItem> 
          
        </DropdownMenu>
      </Dropdown>
                    </li>
                    </ul>
                    </div>                             
                   
                    </div>
                    </div>                                        
 
  <Form>
  <FormGroup as={Row} >
    <FormLabel column sm="3" >Enter Candidate Name in the Search Bar:</FormLabel>
    <FormControl  type="text"  />
    </FormGroup>
    </Form>
    <dl class="row ">
                 
                     <dd class="text-left">Order by: Candidate Name| Company Name| Joining Date| End Date|
                     <button class="btn btn-primary btn-sm float-right" 
                        type="info"> 
                     Add Candidate  
                </button> 
                      </dd>
                     
                  </dl>
    
<MDBTable  scrollX
    scrollY       
    maxHeight="50vh"
     
      bordered autoWidth >
  <MDBTableHead columns={data_people.columns} />
  <MDBTableBody rows={data_people.rows} />
</MDBTable>
<hr />
<Footer1 />
</>
);
}

}




export default CandidateJob;