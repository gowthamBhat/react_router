import React, { Component } from 'react'

class SongById extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
                <p>the ID of the Song is {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default SongById
