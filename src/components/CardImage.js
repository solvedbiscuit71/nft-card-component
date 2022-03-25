import styled from "@emotion/styled";

const onHover = {
  backgroundColor: "hsla(178, 100%, 50%,0.475)",
  borderRadius: 10,
  display: "grid",
  height: "100%",
  left: 0,
  opacity: 0,
  placeContent: "center",
  position: "absolute",
  top: 0,
  transition: "opacity 400ms ease-in-out",
  width: "100%",
}

export default styled.div(props => (
  {
    aspectRatio: "1",
    backgroundImage: `url(${props.image})`,
    backgroundSize: "contain",
    borderRadius: 10,
    position: "relative",
    width: "100%",

    '.on-hover': props.hover && onHover,
    '&:hover': {
      cursor: "pointer",
      '.on-hover': props.hover && { opacity: 1 }
    }
  }
))