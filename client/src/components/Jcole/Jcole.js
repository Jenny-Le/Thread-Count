import React, { Component } from "react";
import Login from "../Login";
import Signup from "../Signup";

class Jcole extends Component {
    state = {
        form: 'login'
    }

    handleFormChange(form) {
        //Updating your components state
        this.setState({form: form});
    }

    renderForm() {
        if(this.state.form === 'login') {
            //Bind is telling us that this is referencing the Jcole component because there's so many being passed around
            return <Login handleFormChange={this.handleFormChange.bind(this)}/>
        } else {
            return <Signup handleFormChange={this.handleFormChange.bind(this)}/>
        }
    }

    render() {
        return (
            <div>
            {
                this.renderForm()
            }
            </div>
        )
    }
}



export default Jcole


