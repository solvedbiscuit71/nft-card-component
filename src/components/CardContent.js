import styled from "@emotion/styled";

export default styled.div(props => (
  {
    "h1": {
      color: "hsl(0, 0%, 100%)",
      fontSize: "1.375rem",
      fontWeight: "600",
      margin: "1em 0 .6em",
      transition: "color 250ms ease-in-out",
      width: "fit-content",

      "&:hover": props.hover && {
        color: "hsl(178, 100%, 50%)",
        cursor: "pointer"
      }
    },
    "p": {
      fontSize: "1.10rem",
      fontWeight: "400",
      margin: 0,
      color: "hsl(215, 51%, 70%)"
    }
  }
))