import styled from "styled-components";
import { Movie } from "../util/interfaces";
import Button from "./Button";
import plusIcon from "../assets/plus-icon.svg";
import crossIcon from "../assets/cross-icon.svg";
import { useCallback, useState } from "react";
import MovieModal from "./MovieModal";

const MovieContainer = styled.div`
  display: flex;
  padding: 0.5rem 0;
  align-items: center;

  & p {
    margin-left: 1rem;
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

const MovieComponent = ({ onClick, movie, action, disabled }: MovieProps) => {
  const [movieModalOpen, setMovieModalOpen] = useState(false);

  const handleModalChange = useCallback(
    () => setMovieModalOpen(!movieModalOpen),
    [movieModalOpen]
  );

  return (
    <MovieContainer>
      <MovieModal
        handleModalChange={handleModalChange}
        movie={movie}
        open={movieModalOpen}
      />
      <Button
        disabled={disabled}
        secondary={action === "remove"}
        style={{ padding: "0.5rem", margin: 0 }}
        onClick={onClick}
      >
        <ActionIcon
          alt={action === "add" ? "add movie" : "remove movie"}
          src={action === "add" ? plusIcon : crossIcon}
        ></ActionIcon>
      </Button>
      <p
        onClick={() => setMovieModalOpen(true)}
      >{`${movie.title} (${movie.year})`}</p>
    </MovieContainer>
  );
};

export default MovieComponent;
