import styled from "styled-components";
import Link from "./Link";
import Button from "./Button";
import { Modal } from "@shopify/polaris";
import { useEffect, useState } from "react";
import { getMovie } from "../services/movies.service";
import { MovieData } from "../util/interfaces";
import { genereateMovieData } from "../util/functions";

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
  height: 184px;
  width: 140px;
  margin: 0 1.5rem 0 0;

  @media (max-width: 768px) {
    margin: 1rem auto;
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

const MovieInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

interface MovieModalProps {
  imdbId: string;
  open: boolean;
  handleModalChange: (e?: React.MouseEvent) => void;
}

const MovieModal = ({ imdbId, open, handleModalChange }: MovieModalProps) => {
  const [movieData, setMovieData] = useState<MovieData>({} as MovieData);

  useEffect(() => {
    getMovie(imdbId).then((res) => {
      const formattedData = genereateMovieData(res);
      setMovieData(formattedData);
    });
  }, [imdbId]);

  return (
    <Modal title="Movie details" onClose={handleModalChange} open={open}>
      <Modal.Section>
        <MovieCardContainer>
          <MovieImg
            src={movieData.poster}
            alt={`poster for ${movieData.title}`}
          />
          <MovieInfo>
            <h3>{movieData.title}</h3>
            <p>Released in {movieData.year}</p>
            <MovieInfoSection>
              <p>Directed by {movieData.director}</p>
              <p>{movieData.actors}</p>
            </MovieInfoSection>
            <MovieInfoSection>
              <p>{movieData.plot}</p>
            </MovieInfoSection>
            <MovieInfoSection>
              <p className="detail">
                <b>{movieData.awards}</b>
              </p>
            </MovieInfoSection>
          </MovieInfo>
        </MovieCardContainer>
      </Modal.Section>
      <Modal.Section>
        <ActionsContainer>
          <Link href={`https://www.imdb.com/title/${imdbId}`}>iMDB page</Link>
          <Button onClick={handleModalChange}>done</Button>
        </ActionsContainer>
      </Modal.Section>
    </Modal>
  );
};

export default MovieModal;
