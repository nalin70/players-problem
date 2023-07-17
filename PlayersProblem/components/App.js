import React, { Component } from 'react';
import "./MyStyle.css"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            selected: this.props.data[0]
        }
        this.onChange = this.onChange.bind(this);
    }

    render() {

        return (
            <div >
                <SearchBar onItemChange={this.onChange} term={this.state.selected.id} />
                <PlayerList players={this.state.data} onItemChange={this.onChange} />
                <PlayerDetails player={this.state.selected} />
            </div>
        );
    }
    onChange(id) {

        var newArray = this.state.data.filter(ply => ply.id == id)
        if (newArray.length != 0) {
            this.setState({ selected: newArray[0] })
        }
    }
};


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: this.props.term };
    }


    componentWillReceiveProps(nextProps) {
        this.setState({ term: nextProps.term });
    }

    render() {
        return (
            <div style={{ float: 'left', clear: 'both', marginBottom: '20px', width: '400px', marginLeft: '50px', background: 'grey', padding: "10,10,10,10" }}>
                <p><span style={{ background: 'pink', marginLeft: '20px', marginRight: '20px' }}>ID to Search :  </span>
                    <input style={{ background: 'pink' }}
                        type="text"
                        value={this.state.term}
                        onChange={eve => this.onInputChange(eve.target.value)}
                    /> </p>

            </div>
        );
    }
    onInputChange(term) {
        this.setState({ term });
        this.props.onItemChange(term);
    }
}



class PlayerList extends Component {

    render() {
        var playersList = this.props.players.map((player, index) => <li onClick={() => { this.props.onItemChange(player.id) }} key={index}><a href="#"> {player.name}</a> </li>)
        return (
            <div style={{ float: 'left', clear: 'both', width: '100px', marginLeft: '50px', marginRight: '100px', background: 'grey' }}>
                <ul id="nav">
                    {playersList}
                </ul>
            </div>
        );
    }
}


class PlayerDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var talents = this.props.player.talent.map((talent, index) => <li key={index}>{talent}</li>)
        return (<div style={{ float: 'left', clear: 'right', background: 'grey', width: '200px', padding: "10px,10px,10px,10px" }}>
            <p> ID    : {this.props.player.id}</p>
            <p> Name  : {this.props.player.name}</p>
            <p> City  : {this.props.player.city}</p>
            <ol>
                {talents}
            </ol>
        </div>);
    }
}

export default App;