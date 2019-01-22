import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeState,GetData, DeleteUser,EditUser  } from '../store/action/action';
import './style.css';

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isActive:true

            
        }
        this.changestate = this.changestate.bind(this);
    }
    
    componentWillMount(){
        this.props.isGetData();
    }
    
    
    
    changestate(ev) {
        this.setState({
            [ev.target.name]: ev.target.value,
            // email: ev.target.value.email,
            
        })
    }

    
    
    submit(){
        // console.log("checking idd",this.state.id)
        
        let obj={
            id:this.state.id,
            name:this.state.name,
            email:this.state.email,
            isActive: true,
            
        }
        console.log("obj",obj)
        this.props.ischangeName(obj);
        this.setState({
            name: '',
            email: '',
        })
     }

    

    del(val) {
        console.log('val',val);
        let object={
            id:val.id,
            name:val.name,
            email:val.email,
            isActive: false,
        }
        console.log("objectj",object);
        this.props.isDeleteUser(object);
    }

    edit(val){

        let EditName = prompt("Enter name", "");
        
        let EditEmail = prompt("Enter email", "");
        let Editing={
            id:val.id,
            name:EditName,
            email:EditEmail,
        }
        this.props.isEditUser(Editing);

        console.log('edit',Editing);
    }
    render() {
        // console.log("asas",this.props.user)
        return (
            <div>
                {/* <h1>Hello again {this.props.userName}</h1>
                <button onClick={this._changeState.bind(this)} >change state</button> */}
                <h2>Enter Name :</h2>
                <input name="name" type='text' value={this.state.name}
                    onChange={this.changestate} />
                <br />

                <h2>Enter Email  : </h2>
                <input name="email" type='text' value={this.state.email}
                    onChange={this.changestate} />
                <br />



                <button onClick={this.submit.bind(this)}>Submit</button> <br />
                <Link to='/about'>Go to About</Link>
                <center>
                <h1>Employee Record</h1>
                <table >
                    <tbody>
                    
                    <tr>
                         <th>Index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        
                    </tr>
                    {this.props.user.map((val,index)=>{
                        return(
                            <tr key={index} >
                            <td><center>{[index+1 ]}</center></td>
                        <td >{val.name}  </td>
                        <td>{val.email} </td>
                        <td ><button onClick={this.edit.bind(this,val)}>EDIT</button><button onClick={this.del.bind(this,val)}>DELETE</button></td>
                    </tr>
                    
                        )
                    })}
                </tbody>
                </table>
                </center>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return ({
        user: state.rootReducer.user,
        // email: state.rootReducer.email
    })
}
function mapDispatchToProps(dispatch) {
    return ({
        ischangeName: (obj) => {
            dispatch(changeState(obj))
        },
        isGetData: () => {
            dispatch(GetData())
        },
        isDeleteUser: (object) =>{
            dispatch(DeleteUser(object))
        },
        isEditUser : (Editing)=>{
            dispatch(EditUser(Editing))
        }
        
        
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

