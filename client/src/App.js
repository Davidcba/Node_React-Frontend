import React from 'react';
import {Form} from "react-bootstrap";
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        apiResponse: "",
        post: "",
        responseToPost:"",

    };
  }
  componentDidMount() {
        this.callAPI()
            .then(res => this.setState({ apiResponse: res.backend }));
  }

  callAPI = async() => {
      const response = await fetch('http://localhost:9000/challengeApi');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;

  };
  handleSubmit = async e => {
      e.preventDefault();
      const response = await fetch('http://localhost:9000/challengeApi', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: this.state.post }),
      });
      const body = await response.text();
      this.setState({ responseToPost: body });
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
              <p>{this.state.apiResponse}</p>
              <Form onSubmit={this.handleSubmit} >
                  <p>
                      <strong>Post to Server:</strong>
                  </p>
                  <input
                      type="text"
                      value={this.state.post}
                      onChange={e => this.setState({ post: e.target.value })}
                  />
                  <button type="submit">Submit</button>
              </Form>
              <p>{this.state.responseToPost}</p>
          </header>
        </div>
    );
  }
}
export default App;
