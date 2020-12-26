import styled from "styled-components";
import Card from "./Card";

const AnimatedBanner = styled.div`
  position: fixed;
  top: 0;
  right: 1rem;
  animation: slideDown 2s ease;
  animation-fill-mode: forwards;
  max-width: calc(100% - 2rem);
  z-index: 100;
`;

interface BannerProps {
  children?: React.ReactFragment | HTMLCollection | string;
  type: "alert" | "success";
}

const Banner = ({ children, type }: BannerProps) =>
  type === "alert" ? (
    <AnimatedBanner>
      <Card
        style={{
          width: "100%",
          color: "white",
          backgroundColor: "var(--black)",
          borderColor: "var(--black)",
          boxShadow: "var(--shadow)"
        }}
      >
        {children}
      </Card>
    </AnimatedBanner>
  ) : (
    <Card
      style={{
        width: "100%",
        color: "white",
        backgroundColor: "var(--green)",
        borderColor: "var(--green)",
        boxShadow: "var(--success)"
      }}
    >
      {children}
    </Card>
  );

export default Banner;
