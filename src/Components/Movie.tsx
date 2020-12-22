import styled from "styled-components";
import { Movie } from "../util/interfaces";
import Button from "./Button";

const MovieContainer = styled.div`
  display: flex;
  padding: 0.5rem 0;
`;

const ActionIcon = styled.img`
  display: flex;
`;

interface MovieProps {
  movie: Movie;
  action: "add" | "remove";
  onClick: (e?: React.MouseEvent) => void;
}

const MovieComponent = ({ onClick, movie }: MovieProps) => (
  <MovieContainer>
    <Button style={{ padding: "0.5rem" }} onClick={onClick}></Button>
    <p>{`${movie.title} (${movie.year})`}</p>
  </MovieContainer>
);

export default MovieComponent;
