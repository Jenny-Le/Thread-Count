import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./nav.css";
import { withCookies } from 'react-cookie';


//Creating a stateful Nav component
class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: null,
            cookies: null
        }
    }

    componentWillMount() {
        const { cookies } = this.props;
        this.setState({cookies: cookies})
    }

    //Creating a renderSearchBar function 
    renderSearchBar() {
        if(window.location.pathname === '/'){
            return (
                <form>
                    <div className="input-field">
                        <i className="material-icons prefix">search</i>
                        {/* onChange happens when someting is changed in the input field. */}
                        {/*  e.target.value will be whatever the user has in the input field at this time*/}
                        <input onChange={(e) => this.props.updateSearchQuery(e.target.value)} type="text" className="validate"></input>
                        <label>SEARCH</label>
                    </div>
                </form>
            )
        }
    }

    logOut() {
        this.state.cookies.remove('user');
        window.location.reload()
    }

    renderLoginLogout() {
        if(this.state.cookies.get('user') !== undefined){
            return (
                <ul id="nav-mobile" className="right-align">
                    <li className="nav-link">
                        <Link to="/listings/new">List an Item</Link>
                    </li>
                    <li className="nav-link">
                        <Link to={`/users/${this.state.cookies.get('user')._id}/edit`}>Account</Link>
                    </li>
                    <li className="nav-link"><a href="#" onClick={(e) => {e.preventDefault(); this.logOut()}}>Log Out</a></li>
                </ul>
            )
        } else {
            return (
                <ul id="nav-mobile" className="align-right">
                    <li className="nav-link right"><a href="/signup">Login / Sign Up</a></li>
                </ul>
            )
        }
    }
    
    render() {
        return (
            <div className="row valign-wrapper">
                <div className="col s6 m4">
                    {this.renderSearchBar()}
                </div>
                <div className="col s6 m8">
                    {this.renderLoginLogout()}
                </div>
            </div>
        )
    }
}

export default withCookies(Nav);