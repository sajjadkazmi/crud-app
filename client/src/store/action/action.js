// import axios f/rom 'axios';
import axios from 'axios';
import actionTypes from '../constant/constant';

// export function changeStateEmail(updatedEmail){
//     return dispatch =>{
//         dispatch({
//             type: actionTypes.CHANGEEMAIL,
//             payload:updatedEmail
//         })
//     }
// }



export function changeState(obj) {
    console.log("updatedName", obj);
    return dispatch => {
        axios.post("/Users/AddUser/", obj)
            .then(res => {
                console.log("res", res)
                // localStorage.setItem("users", JSON.stringify(res.data.isLogin))

                dispatch({
                    type: actionTypes.CHANGENAME,
                    payload: res.data.recordset
                })
                // window.location.href="/";

            }

            )
    }
}



export function DeleteUser(object) {

    console.log("delete**", object);
    return dispatch => {
        axios.put("/Users/DeleteUser/", object)
            .then(res => {
                console.log("res", res)
                dispatch({
                    type: actionTypes.DELETE_USER,
                    payload: res.data.recordset

                })
            }
            )
    }


}

export function EditUser(object) {

    console.log("Edit**", object);
    return dispatch => {
        axios.post("/Users/EditUser/", object)
            .then(res => {
                console.log("res", res)
                dispatch({
                    type: actionTypes.EDIT_DETAILS,
                    payload: res.data.recordset

                })
            }
            )
    }


}





export function GetData() {
    console.log("GetData");
    return dispatch => {
        axios.get("Users/")
            .then(res => {
                console.log("res", res.data.recordset)
                // localStorage.setItem("users", JSON.stringify(res.data.isLogin))

                dispatch({
                    type: actionTypes.CHANGENAME,
                    payload: res.data.recordset
                })
                // window.location.href="/";

            }

            )
    }
}
