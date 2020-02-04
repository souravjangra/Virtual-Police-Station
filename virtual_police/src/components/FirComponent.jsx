import React, {Component} from "react";
import HomeComponent from "./HomeComponent";
var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('l', 'utf8');
var options = { format: 'Letter'};

class FirComponent extends Component{

    state= {
        backBtn: false,
    };

    submitFir = () => {
        console.log("submitted fir.");
        pdf.create(html, options).toFile('../../fir.pdf', function (err, res) {
            if(err) return console.log(err);
            console.log(res);
        });
    };

    render() {
        const styles = {
            marginTop: '50px',
        };

        return (
            <React.Fragment>
                {(this.state.backBtn) ? <HomeComponent/> :
                <div>
                    <button onClick={() => {
                        this.setState({backBtn: true})
                    }} id="backBtn" className="btn btn-info mt-4">Back</button>
                    <h4 style={{marginTop: '20px'}}>Fill up the details below: </h4>
                    <form>
                        <div className="form-group">
                            <label>
                                Name:<br/>
                                <input type="text" name="name" className="form-control" placeholder="Applicant’s Name or Father’s/Husband’s Name" size="80"/>
                            </label>
                            <br/>

                            <label>
                                Nature of Offence:<br/>
                            </label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>theft</option>
                                <option>murder</option>
                                <option>rape</option>
                                <option>vehicle theft</option>
                                <option>mobile thef</option>
                            </select>
                            <br/>

                            <label>
                                Details of the Incident:
                            </label><br/>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"/>
                            <br/>

                            <label>
                                Phone No:<br/>
                                <input type="text" name="phone" className="form-control" placeholder="Applicant’s Phone No." size="80"/>
                            </label>
                            <br/>

                            <label>
                                Address:<br/>
                                <input type="text" name="address" className="form-control" placeholder="Applicant’s Contact Address" size="80"/>
                            </label>
                            <br/>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label >City</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label >State</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label>Pin Code</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                            </div>

                            <label>
                                Email Address:<br/>
                                <input type="text" name="email" className="form-control" placeholder="Applicant’s Email Address(If Any)" size="80"/>
                            </label>
                            <br/>

                            {/*<label>*/}
                            {/*    Local Police station:<br/>*/}
                            {/*    <input type="text" name="local_police_station" className="form-control" placeholder="Name of Local Police station" size="80"/>*/}
                            {/*</label>*/}
                            {/*<br/>*/}

                            <div className="form-group">
                                <label>ID proof</label>
                                <input type="file" className="form-control-file" />
                            </div>

                        </div>
                        <div className="text-center mb-5">
                        <button onClick={this.submitFir} type="submit" className="btn btn-primary" formAction="">Submit</button>
                        </div>
                    </form>
                </div>
                }
            </React.Fragment>
        );
    }
}

export default FirComponent;