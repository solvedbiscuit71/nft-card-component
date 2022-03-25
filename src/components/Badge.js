import styled from "@emotion/styled";

export default styled.div(props => (
  {
    alignItems: "center",
    color: props.bold ? "hsl(178, 100%, 50%)" : "hsl(215, 51%, 70%)",
    display: "flex",
    fontWeight: "500",
    gap: 5
  }
))