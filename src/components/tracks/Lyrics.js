import React, { Component } from 'react'
import axios from 'axios'

export default class Lyrics extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         id: this.props.match.params.id
    //     }
    // }

    state = {
        track: {},
        lyrics: {}
    }

    componentDidMount() {
        // const id = {id: this.state.id}

        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_LF_KEY}`)
            .then(res => {
                console.log(res.data)
                this.setState({ track_list: res.data.message.body.track_list })
            })
            .catch(err => console.log(err))
    }

    render = () => {
        return (
            <div>
                <h1>Lyrics</h1>
            </div>
        )
    }
}
