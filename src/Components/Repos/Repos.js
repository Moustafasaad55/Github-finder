import React, { Component } from 'react'
import Repo from './Repo';
import PropTypes from 'prop-types'

class Repos extends Component {
    static propTypes = {
        Repos: PropTypes.object.isRequired
    }
    render() {
        return (
            <div>
                {this.props.repos.map(repo =>  (
                    <Repo key={repo.id} repo={repo} />
                ))}
            </div>
        )
    }
}

export default Repos
