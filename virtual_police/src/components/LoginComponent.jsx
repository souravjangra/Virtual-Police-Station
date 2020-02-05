import React, {Component} from "react";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import {func} from "prop-types";

class LoginComponent extends Component{

    state = {
        aadhar_no: "",
        mobile_no: ""
    };
    componentDidMount() {
        const firebaseApp = firebase.initializeApp(firebaseConfig);

        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': function(response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit(response);
                console.log(response);
            }
        });
    }

    onSignInSubmit = () => {
        var code = getCodeFromUserInput();
        confirmationResult.confirm(code).then(function (result) {
            // User signed in successfully.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // User couldn't sign in (bad verification code?)
            // ...
        });
    }
// sendOtp = () => {
    //     var phoneNumber = getPhoneNumberFromUserInput();
    //     firebase.auth().signInWithPhoneNumber(phoneNumber)
    //         .then(function (confirmationResult) {
    //             // SMS sent. Prompt user to type the code from the message, then sign the
    //             // user in with confirmationResult.confirm(code).
    //             window.confirmationResult = confirmationResult;
    //         }).catch(function (error) {
    //         // Error; SMS not sent
    //         // ...
    //     });
    // };

    onHandleSubmit = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

        var phoneNumber = this.state.mobile_no;
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                console.log(confirmationResult);
            }).catch(function (err) {
                console.log(err)
        })
    };

    render(){
        return (
            <React.Fragment>
            <h1 style={{textAlign: 'center'}}>Login</h1>
                <div className="d-flex justify-content-center">
                    <form className="body">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAddress">Aadhar No</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder=""
                                   value={this.state.aadhar_no}
                                   onChange={(e) => { this.setState({aadhar_no: e.currentTarget.value})} }
                            style={{width: "500px"}}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAddress2">Mobile No.</label>
                            <input type="text" className="form-control" id="mobile_no" placeholder=""
                                   value={this.state.mobile_no}
                                   onChange={(e) => { this.setState({mobile_no: e.currentTarget.value})} }
                                   style={{width: "500px"}}/>
                        </div>
                        <div className="form-group">

                            <div style={{textAlign: 'center'}}>
                            <button id="sign-in-button" onClick={this.onHandleSubmit} type="button" className="btn btn-info col-md-2">Submit
                            </button>
                            </div>
                        </div>
                        <div id="recaptcha-container" style={{textAlign: 'center'}}>

                        </div>
                    </form>

                </div>
            </React.Fragment>


        );
    }
}

export default LoginComponent;