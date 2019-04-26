import React, { Component } from 'react';
import './WorkersMain.css';


const INITIAL_STATE = {
 
  id: "1",
  workers:[],
};




class WorkersMain extends Component {
    state = {  }
    constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
      
    }

    componentWillMount(){
      var neworkers=this.state.workers.slice()
      const self=this
      this.props.firebase.doDisplayWorker().then(function (names){  
        console.log(self.state.workers)      
        names.map((each)=>{
          neworkers.push(each)
        }) 
        self.setState( {workers:neworkers} )
      })
      }

    
    render() { 
      const lists=this.state.workers.map((each)=>{
       return (
          <tr>
        <td>14356</td>
        <td>{ each }</td>
        <td><a href='#'>View Details</a></td>
        <td> <button type="submit" className="button-del" >Delete</button></td>
      </tr>)

      });
       
      
        return (  
          <React.Fragment>
            <br></br>
            <h2>Workers List</h2>
            <br></br>
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
   
        <table className="table1 table-hover">
        <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      { lists }
    </thead>
    <tbody>

     
    </tbody>
  </table>
</div>
<br></br>
<button type="submit" className="button_workers">Add Worker</button>
<br></br>
</React.Fragment>
      );
    }
}
 
export default WorkersMain;