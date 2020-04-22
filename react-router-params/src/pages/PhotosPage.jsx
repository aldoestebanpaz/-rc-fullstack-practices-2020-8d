import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import querystring from 'query-string';

class PhotosPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  goBackHandler = () => {
    this.props.history.goBack();
  }

  componentDidMount() {
    const photoid = this.props.match.params.photoid;

    if (photoid !== undefined) {
      axios.get(`https://jsonplaceholder.typicode.com/photos/${photoid}`)
      .then(response => {
        this.setState({ data: response.data });
      });
    }
  }

  render() {
    console.log("Photos page");
    const photoData = this.state.data;
    const queryParams = querystring.parse(this.props.location.search);
    console.log(queryParams);

    return (
      <div className="col">

        {
          this.props.match.params.photoid ? '' : <Redirect to="/" />
        }

        <h1>Photos Page</h1>
        <div>
          <strong>The ID is: {this.props.match.params.photoid}</strong>
          

          <div className="card">
            <img src={photoData.url} className="card-img-top" style={{ width: queryParams.width + "px", height: queryParams.height + "px" }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{photoData.title}</h5>
            </div>
          </div>
          

          <button onClick={this.goBackHandler}>Go Back</button>
        </div>
      </div>
    );
  }
}

export default PhotosPage;
