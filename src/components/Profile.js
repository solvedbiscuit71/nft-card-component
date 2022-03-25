import styled from "@emotion/styled";

export default styled.div({
  alignItems: "center",
  color: "hsl(215, 51%, 70%)",
  display: "flex",
  flexDirection: "row",
  gap: "1em",
  justifyContent: "flex-start",
  margin: "1em 0",
  
  img: {
    border: "1.5px solid hsl(0, 0%, 100%)",
    borderRadius: "50%",
    height: "2em",
    width: "2em"
  },
  span: {
    color: "hsl(0, 0%, 100%)",
    left: "-.75em",
    position: "relative",
    transition: "color 250ms ease-in-out",
    "&:hover": {
      color: "hsl(178, 100%, 50%)",
      cursor: "pointer"
    }
  }
})