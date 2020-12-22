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
  padding: 1rem 0;
  justify-content: flex-end;

  & button {
    margin-left: 1.5rem;
  }
`;

interface MovieModalProps {
  movie: Movie;
  open: boolean;
}

const MovieModal = ({ movie, open }: MovieModalProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalChange = useCallback(() => setModalOpen(!modalOpen), [
    modalOpen,
  ]);

  const activator = <Button onClick={handleModalChange}></Button>;

  return (
    <div style={{ height: '100vh' }}>
      <Modal onClose={handleModalChange} open={open} activator={activator}>
        <Modal.Section>
          <Card>
            <MovieCardContainer>
              <MovieInfo>
                <h3>{movie.title}</h3>
                <p>{movie.type}</p>
                <p>Released in {movie.year}</p>
                <p>iMDB id: {movie.imdbId}</p>
              </MovieInfo>
              <MovieImg src={movie.poster} alt={`poster for ${movie.title}`} />
            </MovieCardContainer>
            <ActionsContainer>
              <Link href={`https://www.imdb.com/title/${movie.imdbId}`}>
                iMDB page
              </Link>
            </ActionsContainer>
          </Card>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default MovieModal;
