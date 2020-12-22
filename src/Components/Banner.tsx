import styled from "styled-components";
import Card from "./Card";

const AnimatedBanner = styled.div`
  position: fixed;
  top: 0;
  animation: slideUp 2s ease;
  animation-fill-mode: forwards;
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
      }}
    >
      {children}
    </Card>
  );

export default Banner;
