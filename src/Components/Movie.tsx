import styled from "styled-components";
import { Movie } from "../util/interfaces";
import Button from "./Button";
import plusIcon from "../assets/plus-icon.svg";
import crossIcon from "../assets/cross-icon.svg";

const MovieContainer = styled.div`
  display: flex;
  padding: 0.5rem 0;
  align-items: center;

  & p {
    margin-left: 0.5rem;
    max-width: 300px;
    cursor: pointer;
  }
`;

const ActionIcon = styled.img`
  display: flex;
`;

type MovieProps = {
  movie: Movie;
  action: "add" | "remove";
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const MovieComponent = ({ onClick, movie, action }: MovieProps) => (
  <MovieContainer>
    <Button
      secondary={action === "remove"}
      style={{ padding: "0.5rem", margin: 0 }}
      onClick={onClick}
    >
      <ActionIcon
        alt={action === "add" ? "add movie" : "remove movie"}
        src={action === "add" ? plusIcon : crossIcon}
      ></ActionIcon>
    </Button>
    <p onClick={() => console.log(movie)}>{`${movie.title} (${movie.year})`}</p>
  </MovieContainer>
);

export default MovieComponent;
