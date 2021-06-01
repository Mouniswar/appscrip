import axios from 'axios';
import React, { Component} from 'react';

class ShowHistory extends Component {
    state = {trivias:[]}
    componentDidMount() {
        axios.get('http://localhost:3003/trivias')
            .then((res) => {
                console.log(res);
                this.setState({trivias: res.data})
            })
            .catch(e => console.log(e))
        
    }

    renderTrivias() {
        if(!this.state.trivias) {
            return <div>Loading....</div>
        }

        return this.state.trivias.map((trivia) => {
            return <div className="item" key={trivia.id}>
                <div className="header">{trivia.username}</div>
                <p>Favourite Cricketer: {trivia.cricketer}</p>
            </div>
        })
    }
    render() {
        return (
            <div className="ui list">{this.renderTrivias()}</div>
        )
    }
}

export default ShowHistory;