import React, { PureComponent} from "react";

class SongCreate extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            title: ""
        }
    }
    render(){
        return(
            <div>
                <h3>Create new song</h3>
                <form>
                    <label>Song Title: </label>
                    <input
                        onChange={event=>this.setState({title: event.target.value })}
                        value={this.state.value}
                    />
                </form>
            </div>
        )
    }
}

export default SongCreate;