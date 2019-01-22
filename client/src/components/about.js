// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {changeStateEmail} from '../store/action/action';
// class About extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             email:''
        
//         }
//     }

// handleEmail(e){
//     this.setState({
//         email:e.target.value
//     })
//     // console.log(e.target.value)
// }
// handleEmailButton(){
//     // console.log('n')
//     this.props.changeEmail(this.state.email);
//     this.setState({
//         email:''
//     })
// }

//     render() {
//         return (
//             <div>
//                 <h1>Your email address: {this.props.email}</h1>
//                 <input type='text' value={this.state.email} onChange={this.handleEmail.bind(this)} />
//                 <button onClick={this.handleEmailButton.bind(this)}>touch to change</button>
//                 <Link to='/'>Go to Home</Link>
//             </div>
//         )
//     }
// }

// function mapStateToProps(state){
//     return({
//         userName: state.rootReducer.userName,
//         email :state.rootReducer.email
//     })
// }
// function mapDispatchToProps(dispatch){
// return({
//     changeEmail: (updatedEmail)=>{
//         dispatch(changeStateEmail(updatedEmail))
//     }

// })
// }


// export default connect(mapStateToProps,mapDispatchToProps) (About);


