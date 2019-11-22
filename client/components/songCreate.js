import React, { PureComponent } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link , hashHistory } from "react-router";
import query from "../queries/fertchSongs";

class SongCreate extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
  }
  onSubmit(event) {
    event.preventDefault();
    // console.log(this.props);
    this.props.mutate({
      variables:{
        title: this.state.title
      },
      refetchQueries:[{
        query
      }]
    })
    .then(()=>{
      hashHistory.push("/");
    })
    .catch(()=>{

    })

  }
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create new song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title: </label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.value}
          />
        </form>
      </div>
    )
  }
}


const mutation = gql`
    mutation AddSong($title: String){
        addSong(title: $title){
          title,

        }
    }
`;

export default graphql(mutation)(SongCreate);