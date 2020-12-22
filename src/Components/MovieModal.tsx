import styled from "styled-components";
import { Movie } from "../util/interfaces";
import Card from "./Card";
import Link from "./Link";
import Button from "./Button";
import { Modal } from "@shopify/polaris";
import { useCallback, useState } from "react";

const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieImg = styled.img`
  object-fit: contain;
  height: 164px;
  width: 120px;
  margin: 0 1rem 0 0;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  & button {
    margin-left: 1.5rem;
  }
`;

interface MovieModalProps {
  movie: Movie;
  open: boolean;
  handleModalChange: (e?: React.MouseEvent) => void;
}

const MovieModal = ({ movie, open, handleModalChange }: MovieModalProps) => {
  return (
    <Modal title="Movie details" onClose={handleModalChange} open={open}>
      <Modal.Section>
        <MovieCardContainer>
          <MovieImg src={movie.poster} alt={`poster for ${movie.title}`} />
          <MovieInfo>
            <h3>{movie.title}</h3>
            <p>{movie.type}</p>
            <p>Released in {movie.year}</p>
            <p>iMDB id: {movie.imdbId}</p>
          </MovieInfo>
        </MovieCardContainer>
      </Modal.Section>
      <Modal.Section>
        <ActionsContainer>
          <Link href={`https://www.imdb.com/title/${movie.imdbId}`}>
            iMDB page
          </Link>
          <Button onClick={handleModalChange}>done</Button>
        </ActionsContainer>
      </Modal.Section>
    </Modal>
  );
};

export default MovieModal;
