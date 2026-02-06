import { Component } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

class AllTheMain extends Component {
  state = {
    trending: null,
    watchAgain: null,
    newReleases: null,
    error: false,
  };

  getMovies = (searchTerm, stateKey) => {
    fetch(`http://www.omdbapi.com/?apikey=26793b79&s=${searchTerm}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        this.setState({
          [stateKey]: data,
        });
      })
      .catch((error) => {
        console.log("Errore nella fetch:", error);
        this.setState({ error: true });
      });
  };

  componentDidMount() {
    this.getMovies("Naruto", "trending");
    this.getMovies("One Piece", "watchAgain");
    this.getMovies("Demon Slayer", "newReleases");
  }

  renderMovies = (data) => {
    if (this.state.error) {
      return <Alert variant="danger">Errore nel caricamento dei film.</Alert>;
    }

    if (!data || !data.Search) {
      return (
        <div className="text-center w-100 my-4">
          <Spinner animation="border" variant="light" />
        </div>
      );
    }

    const moviesToShow = data.Search.slice(0, 6);

    return (
      <Row className="mb-4">
        {moviesToShow.map((movie) => (
          <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={2} className="mb-2 text-center px-2">
            <img className="img-fluid" src={movie.Poster} alt={movie.Title} style={{ borderRadius: "4px", cursor: "pointer" }} />
          </Col>
        ))}
      </Row>
    );
  };

  render() {
    return (
      <Container fluid className="px-4 text-white">
        <Row className="justify-content-between align-items-center py-3">
          <Col xs="auto" className="d-flex align-items-center">
            <h2 className="mb-0">TV Shows</h2>
          </Col>

          <Col xs="auto">
            <div className="d-flex gap-3">
              <i className="bi bi-grid icons"></i>
              <i className="bi bi-grid-3x3 icons"></i>
            </div>
          </Col>
        </Row>

        <h4 className="mt-3">Trending Now</h4>
        {this.renderMovies(this.state.trending)}

        <h4 className="mt-3">Watch it Again</h4>
        {this.renderMovies(this.state.watchAgain)}

        <h4 className="mt-3">New Releases</h4>
        {this.renderMovies(this.state.newReleases)}
      </Container>
    );
  }
}

export default AllTheMain;
