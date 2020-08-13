import React, { Component } from 'react';
import {  Row,NavLink,NavItem, Col, ButtonGroup} from 'reactstrap';
 import { Form,FormControl,FormLabel,FormRow, Button, FormCheck} from 'react-bootstrap';
 import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload, faCalendar} from '@fortawesome/free-solid-svg-icons'
import Header from '../components/NavBar';
import Footer1 from '../components/Footer1';
import 'bootstrap/dist/css/bootstrap.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

 //import { MDBDatePickerV5 } from 'mdbreact';
class CandidateAgreement extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle1=this.toggle1.bind(this);
    this.toggle2=this.toggle2.bind(this);
    this.toggle3=this.toggle3.bind(this);
    this.toggle4=this.toggle4.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseEnter1=this.onMouseEnter1.bind(this);
    this.onMouseEnter2=this.onMouseEnter2.bind(this);
    this.onMouseEnter3=this.onMouseEnter3.bind(this);
    this.onMouseEnter4=this.onMouseEnter4.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseLeave1 = this.onMouseLeave1.bind(this);
    this.onMouseLeave2=this.onMouseLeave2.bind(this);
    this.onMouseLeave3=this.onMouseLeave3.bind(this);
    this.onMouseLeave4=this.onMouseLeave4.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpen1: false,
      dropdownOpen2:false,
      dropdownOpen3: false,
      dropdownOpen4:false
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
  toggle4(){
    this.setState(prevState =>({
      dropdownOpen4: !prevState.dropdownOpen4
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
  onMouseEnter4(){
    this.setState({dropdownOpen4: true});
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
  onMouseLeave4(){
    this.setState({dropdownOpen4: false});
  }
   
    render() { 
        return(
            <>
            <Header />
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
         SKILLS EVALUATION
        </DropdownToggle> 
        <DropdownMenu>
          <DropdownItem header>SKILLS EVALUATION</DropdownItem>
          <DropdownItem >SELF-ASSESSMENT</DropdownItem>
          <DropdownItem>CHAKURI ASSESSMENT</DropdownItem>
          <DropdownItem>EXTERNAL ASSESSMENT</DropdownItem> 
          
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
          <DropdownItem >RESUME REVIEWED</DropdownItem>
          <DropdownItem >RESUME SHORTLISTED</DropdownItem>
          <DropdownItem >ROUND STATUS</DropdownItem>
          <DropdownItem >JOB OFFERED/REJECTED</DropdownItem>
          <DropdownItem >ON JOB DETAILS</DropdownItem>
          <DropdownItem >CANDIDATE AGREEMENT</DropdownItem>
          <DropdownItem>CANDIDATE ON JOB</DropdownItem>
          <DropdownItem>CANDIDATE HISTORY</DropdownItem> 
          
        </DropdownMenu>
      </Dropdown>
                    </li>
                    </ul>
                    </div>       

            <div class="col">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <Dropdown className="d-inline-block" onMouseEnter={this.onMouseEnter4} onMouseLeave={this.onMouseLeave4} isOpen={this.state.dropdownOpen4} toggle={this.toggle4}>  <DropdownToggle variant="primary" id="dropdown-basic" caret>
         TRAINING PROGRAMS DASHBOARD
        </DropdownToggle> 
        <DropdownMenu>
          <DropdownItem header>TRAINING PROGRAMS DASHBOARD</DropdownItem>
          <DropdownItem >RECOMMENDED TRAININGS</DropdownItem>
          <DropdownItem>TRAININGS IN PROGRESS</DropdownItem>
          <DropdownItem>CONSULT WITH TRAINER</DropdownItem> 
          <DropdownItem>CONSULT WITH RECRUITER</DropdownItem> 
          
        </DropdownMenu>
      </Dropdown>
                    </li>
                    </ul>
                    </div>                                                     
                   
                    </div>
                    </div>                                        

            <div className="container">
             <div className="mt-5 ml-2 mr-2">
                <div className="border m-4   border-dark" >
                <h4 className="underline">Candidate Agreement</h4>
                <Form>
  <Form.Row >
  <Form.Label column="sm" lg={2}>
      Enter Candidate Name:
    </Form.Label>

    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" srOnly>
        Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" />
    </Col></Form.Row>
    <Form.Row >
  <Form.Label column="sm" lg={2}>
      Enter Company Name:
    </Form.Label>

    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" srOnly>
        Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" />
    </Col></Form.Row>
    <Form.Row >
  <Form.Label column="sm" lg={2}>
      Enter Joining Date: 
    </Form.Label>
   
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" srOnly>
        Name 
      </Form.Label>
     
  
      <Form.Control id="inlineFormInputName" placeholder="DD/MM/YYYY"  />
     
     
    </Col>
    <Form.Label column="sm" lg={2}>
    <label> <FontAwesomeIcon icon={faCalendar} size="3x"  /></label>
    </Form.Label>

    </Form.Row>
    <Form.Row>
    <Form.Label column="sm" lg={2}>
      Duration of Contract:
    </Form.Label>

    <Col xs={1} className="my-1">
      
      <Form.Control id="inlineFormInputName" />
  
    <Form.Label row="sm" lg={2}>
     Yr(s)
    </Form.Label>
</Col>
    <Col xs={1} className="my-1">
      
      <Form.Control id="inlineFormInputName" />
    
    <Form.Label row="sm" lg={2}>
     Months(s)
    </Form.Label>
    </Col>
    </Form.Row>
    <Form.Row >
  <Form.Label column="sm" lg={2}>
     Enter Salary of Candidate
     (Total Cost of JobSeeker):
    </Form.Label>

    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" srOnly>
        Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" />
    </Col></Form.Row>
    <Form.Row >
  <Form.Label column="sm" lg={2}>
      Monthly Cost of Jobseeker:
    </Form.Label>

    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" srOnly>
        Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" />
    </Col></Form.Row>
    <Form.Row >
  <Form.Label column="sm" lg={2}>
     Bonus Cost of Jobseeker
     (optional):
    </Form.Label>

    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" srOnly>
        Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" />
    </Col></Form.Row>
    <Form.Row >
  <Form.Label column="sm" lg={2}>
     Enter Requester Name:
    </Form.Label>

    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" srOnly>
        Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" />
    </Col></Form.Row>
    <Form.Row >
  <Form.Label column="sm" lg={2}>
      Enter Approver Name:
    </Form.Label>

    <Col xs={2} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" srOnly>
        Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" />
    </Col>
    <Form.Label column="sm" lg={2}>
      Enter Approver Email ID:
    </Form.Label>

    <Col xs={2} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" srOnly>
        Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" />
    </Col>
    <Form.Label column="sm" lg={2}>
      Enter Approver Phone Number:
    </Form.Label>

    <Col xs={2} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" srOnly>
        Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" />
    </Col>
    </Form.Row>
    <br/>
    <Form.Row>
    <Col xs="auto" className="my-1">
    <Form.Check className="align-items-center" type="checkbox" id="customControlAutosizing" label="I have read and agreed to the terms and conditions and privacy policy" />
    <a href="#"  class="text-primary">terms and conditions</a>
    </Col>
    </Form.Row>
    <Form.Row>
    <Col xs="auto" className="my-1">
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Additional Comments:</Form.Label>
    <Form.Control as="textarea" rows="10" column="20"  />
  </Form.Group>
  </Col>
    </Form.Row>
    <div>
    <Button variant="primary" size="sm">
      Save Details
    </Button>
    </div>
    </Form>
                </div>
              </div>
            </div>  
    
<Footer1 />
      </>
        );
}
}
export default CandidateAgreement;