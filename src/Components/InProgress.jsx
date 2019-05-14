import React, { Component } from "react";
import "./InProgress.css";
import * as ROUTES from "../constants/routes";
import { withRouter } from 'react-router-dom';

class InProgress extends Component {
  state = {
    worker:{}
  };
  constructor(props) {
		super(props);
		console.log('Email is',this.props.email)
		console.log('requestid is',this.props.requestid)

  }
  

	changetofeedback=()=>{
		const self=this;
		self.props.history.push({
			pathname: ROUTES.FEEDBACK,
			state: { detail: this.props.email, id:this.props.requestid }
			
		})
  }
  



  componentWillMount(){
    
    let database=this.props.firebase.getdatabase()
    const self=this
    this.getworkerdetails(this.props.requestid)

		database.collection("CurrentRequests").doc(this.props.requestid).onSnapshot(function(snapshot){
		const datas=snapshot.data()
		if (datas['status']=="completed"){
			self.changetofeedback()
			console.log('here')
		}
})}

getworkerdetails=(requestid)=>{
  this.props.firebase.getworkerdetailid(requestid).then((workerdetails)=>{
    console.log("workerdetails are", workerdetails)
    this.setState({ worker:workerdetails })

  })
}


  render() {
    return (
      <div className="card bg-light text-dark c">
        <p className="text-center font-weight-bold heading">
          Request Status: In Progress
        </p>

        <div className="text-left font-weight-bold h"> Worker details:</div>
        <img src={require("./Worker.jpeg")} className="img-fluid x" />

        <div class="row a">
            <div class="text-left font-weight-bold h">Name: </div>
            <div class="text-left a">{this.state.worker['firstname']} {this.state.worker['lastname']} </div>
        </div>

        <div class="row b">
            <div class="text-left font-weight-bold h">Contact Number: </div>
            <div class="text-left a">{this.state.worker['contact']} </div>
        </div>
      </div>
    );
  }
}

export default withRouter(InProgress);
