import { Component } from "react";
import { createConnection } from "./Chat";

export default class ChatRoom extends Component {
  state = {
    serverUrl: "https://localhost:1332",
  };

  componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.serverUrl !== prevState.serverUrl ||
      this.props.roomId !== prevProps.roomId
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }

  setupConnection() {
    this.connection = createConnection(this.state.serverUrl, this.props.roomId);
    this.connection.connect();
  }

  destroyConnection() {
    this.connection.disconnect();
    this.connection = null;
  }

  render() {
    return (
      <>
        <label>
          Server Url :
          <input
            value={this.state.serverUrl}
            onChange={(e) => {
              this.setState({ serverUrl: e.target.value });
            }}
          />
        </label>
        <h1>Welcome to the {this.props.roomId} room!</h1>
      </>
    );
  }
}
