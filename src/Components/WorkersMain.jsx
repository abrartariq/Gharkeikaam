import React, { Component } from 'react';
import './WorkersMain.css';

class WorkersMain extends Component {
    state = {  }
    render() { 
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
    </thead>
    <tbody>
      <tr>
        <td>14356</td>
        <td>Abrar Tariq</td>
        <td><a href='#'>View Details</a></td>
        <td> <button type="submit" className="button-del" >Delete</button></td>
      </tr>
      <tr>
        <td>14356</td>
        <td>Abrar Tariq</td>
        <td><a href='#'>View Details</a></td>
        <td> <button type="submit" className="button-del">Delete</button></td>
      </tr>
      <tr>
        <td>14356</td>
        <td>Abrar Tariq</td>
        <td><a href='#'>View Details</a></td>
        <td> <button type="submit" className="button-del">Delete</button></td>
      </tr>
      <tr>
        <td>14356</td>
        <td>Abrar Tariq</td>
        <td><a href='#'>View Details</a></td>
        <td> <button type="submit" className="button-del">Delete</button></td>
      </tr>
      <tr>
        <td>14356</td>
        <td>Abrar Tariq</td>
        <td><a href='#'>View Details</a></td>
        <td> <button type="submit" className="button-del">Delete</button></td>
      </tr>
      <tr>
        <td>14356</td>
        <td>Abrar Tariq</td>
        <td><a href='#'>View Details</a></td>
        <td> <button type="submit" className="button-del">Delete</button></td>
      </tr>
      <tr>
        <td>14356</td>
        <td>Abrar Tariq</td>
        <td><a href='#'>View Details</a></td>
        <td> <button type="submit" className="button-del">Delete</button></td>
      </tr>
      
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