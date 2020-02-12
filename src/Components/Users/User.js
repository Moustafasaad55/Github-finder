import React, { Component } from 'react'
import Spinner from '../Layout/Spinner';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import Repos from '../Repos/Repos'

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }
    
    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,
    }
    
    render() {
        const { 
            name, avatar_url, location, bio, blog, company,login, html_url, followers, following, public_repos, public_gists, hireable
         } = this.props.user;
         const {loading} = this.props
         return (
         loading ? <Spinner /> : 
         <div>
             <Link to='/' className='btn btn-light'>Back to search</Link>
         Hireable: {" "}
         {hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger'/>}
            <div className='card grid-2'>
             <div className='all-center'>
                 <img  src={avatar_url} className='round-img' alt='' style={{width: '150px'}} />
                 <h1>{name}</h1>
                 <p>location: {location}</p>
             </div>
             <div>
                {bio && <div>
                <h3>Bio</h3>
                   <p>{bio}</p>
                   </div>}
                <a href={html_url} className="btn btn-dark my-1">Visit Github profile</a>
                <ul>
                    <li>
                        {login && (
                        <div>
                         <strong>Username: </strong> {login}            
                        </div>)
                        }
                    </li>
                    <li>
                        {blog && (
                        <div>
                         <strong>website: </strong> {blog}            
                        </div>)
                        }
                    </li>
                    <li>
                        {company && (
                        <div>
                         <strong>Company: </strong> {company}            
                        </div>)
                        }
                    </li>
                </ul>
             </div>
         </div>
         <div className="card text-center">
             <div className="badge badge-primary">Followers: {followers}</div>
             <div className="badge badge-success">Following: {following}</div>
             <div className="badge badge-light">Public repos: {public_repos}</div>
             <div className="badge badge-dark">Public Gists: {public_gists}</div>
         </div>
         <Repos repos={this.props.repos}/>
        </div>  
        )
    }
}

export default User
