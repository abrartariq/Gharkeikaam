import React, { Component } from 'react';
import * as ROUTES from "../constants/routes";
import { withRouter } from 'react-router-dom';
import './Waiting.css';

class Waiting extends Component {
	state = {  }

	constructor(props) {
		super(props);
		console.log('Email is',this.props.email)
		console.log('requestid is',this.props.requestid)

	}

	
	changetoprocessing2=()=>{
		const self=this;
		self.props.history.push({
			pathname: ROUTES.PROCESSING_REQUEST2,
			state: { detail: this.props.email, id:this.props.requestid }
			
		})
	}


	componentWillMount(){
		let database=this.props.firebase.getdatabase()
		const self=this
		database.collection("CurrentRequests").doc(this.props.requestid).onSnapshot(function(snapshot){
		
		const datas=snapshot.data()
		if (datas['status']=="inprogress"){
			self.changetoprocessing2()
			console.log('here')
		}
})}


	render() { 
		return ( 
			<div className="card bg-light text-dark abc">
                <img src={require('./Spinner.gif')} className="img-fluid z"></img>
                <p className="text-center font-weight-bold">
                Request Status: Waiting for Approval
                </p>
            </div>
		);
	}
}
 
export default withRouter(Waiting);