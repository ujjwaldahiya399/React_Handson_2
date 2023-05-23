import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      department:"",
      rating:"",
      data:[]
    }
  }
  submit = (e) => {
    e.preventDefault();
    const obj = {
      name:this.state.name,
      department:this.state.department,
      rating:this.state.rating
    }
    this.state.data.push(obj);
    this.setState({data:this.state.data,name:"",department:"",rating:""});
    console.log(this.state)
    // console.log("handle submit")
    // const {name,department,rating,data} = this.state;
    // console.log(name,department,rating);
    // const newObj = {name,department,rating};
    // console.log(newObj);
    // let abc =[]
    // abc.push(newObj)
    // console.log(abc)
    // this.setState(prevState => ({
    //   data:[...prevState.data,newObj],
    //   name:"",
    //   department:"",
    //   rating:""
    // }))
    // console.log(this.state);
    // this.setState({
    //   name: "",
    //   department: "",
    //   rating: ""
    // })
  }
  render() {
    return (
      <div className='App'>
        <h1 className='h1'>Employee Feedback Form</h1>
        <form onSubmit={this.submit}>
          <label htmlFor='name'>Name : </label>
          <input className="input" onChange={event => this.setState({name:event.target.value})} type='text' id='name' value= {this.state.name} htmlFor="name"></input>
          <br></br><br></br>
          <label htmlFor='department'>Department : </label>
          <input className='input' onChange={event => this.setState({department:event.target.value})} type='text' id='department' value={this.state.department} htmlFor="name"></input>
          <br></br><br></br>
          <label htmlFor='rating'>Rating : </label>
          <input className='input' onChange={event => this.setState({rating:event.target.value})} type='number' id='rating' value={this.state.rating}></input>
          <br></br><br></br>
          <button style={{width:"110px",height:"43px",borderRadius:"8px",backgroundColor:"skyblue",fontSize:"20px"}} id='btn' type='submit'>Submit</button>
          
          {/* <hr style={{backgroundColor:"black",marginTop:"200px",width:"70vw"}}></hr> */}
           <div className='ArrDiv'>
           {
            
            this.state.data ? this.state.data.map((item) => {
              return <div className='objDiv'>Name:{item.name} | Department: {item.department} | Rating: {item.rating}</div>
            }) :""
           }
            </div>
        </form>
      </div>
    )
  }
}
