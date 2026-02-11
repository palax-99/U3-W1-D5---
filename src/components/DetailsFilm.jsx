import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, ListGroup, Spinner } from "react-bootstrap";

const DetailsFilm = () => {
  const { filmID } = useParams();

  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=7c443bde&i=${filmID}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovie(data);
        }
      })
      .catch((err) => console.log(err));
  }, [filmID]);

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${filmID}`, {
      headers: {
        Authorization:
          " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0OWQyODgwMjA2ODAwMTUwNGRjNjUiLCJpYXQiOjE3NzA4MjMxMTIsImV4cCI6MTc3MjAzMjcxMn0.wXmDnPKjGB0sLWmNRx1yxO9BVg9t5yHQN898ozZHvcw",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoadingComments(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingComments(false);
      });
  }, [filmID]);

  if (!movie) return <p className="text-white">Loading...</p>;

  return (
    <div className="container text-white mt-4">
      <Card className="mb-4">
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Plot}</Card.Text>
        </Card.Body>
      </Card>

      <h4>Commenti</h4>

      {loadingComments ? (
        <Spinner animation="border" />
      ) : comments.length === 0 ? (
        <p>Nessun commento disponibile.</p>
      ) : (
        <ListGroup>
          {comments.map((comment) => (
            <ListGroup.Item key={comment._id}>
              <strong>Voto: {comment.rate}/5</strong>
              <p>{comment.comment}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default DetailsFilm;
