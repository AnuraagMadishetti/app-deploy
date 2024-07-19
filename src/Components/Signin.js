import {Component} from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
// import {toast} from 'react-toastify';
import { Button }  from "@material-ui/core"



import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login=()=>{
    const [username,usernameupdate]=useState('');
    const [password,passwordupdate]=useState('');

    const ProceedLogin=(e)=>{
        e.preventDefault();
        if(validate()){
            //console.log('proceed');
            fetch("http://localhost:3000/newCustomers/"+username).then((res)=>{
                return res.json();
            }).then((resp)=>{
                console.log(resp);
                if(Object.keys(resp).length===0){
                    toast.error('Please Enter valid userName')
                }else{
                    if(resp.password === password){
                        console.log(resp.password);
                        toast.success('success');
                        
                    }else{
                        toast.error('Please Enter valid Credentials')

                        
                    }
                }
            }).catch((err)=>{
                toast.error('Login Failed due to :'+ err.message)
            })
        }


    }


const validate=()=>{
    let result=true;
    if(username === '' || username ===null){
        result=false;
        toast.warning('Please Enter UserEmail')
    }
    if(password === '' || password ===null){
        result=false;
        toast.warning('Please Enter Password')
    }
    return result;
}

        return(
            <div className="container container-table" style={{padding:"90px"}}>
                <div className="row vertical-center-row">
                    <div className="col-md-6 offset-4 mt-5">
                        <div className="card" style={{width:"25rem",padding:"15px",background:"#FDEEF4"}}>
                            <div className="card-body" >
                                <h5 className="card-title"> <b>LOGIN</b> </h5>

                            </div>


                           <div className="login_div">
                            <form onSubmit={ProceedLogin} id="form_login"
                            style={{padding:"10px"}}>
                                <div className="form-group" style={{height:"4.5rem"}}>
                                    <label htmlFor="Username"><b>UserName</b></label>
                                    <input className="form-control"
                                    type="text"
                                    placeholder="Enter Your Email Id"
                                    value={username}
                                    name="username"
                                    onChange={e=>usernameupdate(e.target.value)}>
                                    </input>   
                                </div>
                               


                                <div className="form-group" style={{height:"4.5rem"}}>
                                    <label htmlFor="password"><b>Password</b></label>
                                    <input className="form-control"
                                   
                                    placeholder="Enter Your Password"
                                    value={password}
                                    name="password"
                                    type="password"
                                    onChange={e=>passwordupdate(e.target.value)}>
                                    </input>   
                                </div>
                                

                                
                               
                             {/* <button className="btn btn-info" disabled={!this.state.formValid.buttonActive}>Register</button> */}
                             <button className="btn btn-primary" style={{color:"black"}} component={Link} to={'/home'}>Login</button>
                            
                            {" "}<Link className="btn btn-success" to={'/Signup'}>New User</Link>

                            </form>
                            </div>
                            

                            
                        </div>

                    </div>
                </div>
            </div>
        )
    }





export default Login;