import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Search extends Component {
    state = {
        text: ''
    }
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }
    
    onchange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }
    
    onsubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('please enter something','light')
        }else {
            this.props.searchUsers(this.state.text);
            this.setState({ text:''})
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onsubmit} className='form'>
                    <input type='text' name='text' placeholder="Search users..." value={this.state.text} onChange={this.onchange} /> 
                    <input type='submit' value='Search' className="btn btn-dark btn-block"/>
                </form>
                { this.props.showClear ? <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button> : null}
            </div>
        )
    }
}

export default Search
