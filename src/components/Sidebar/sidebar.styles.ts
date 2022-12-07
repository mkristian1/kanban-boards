import styled from "styled-components"

const Logo = styled.img`
  width: 100px;
`;

const Wrap = styled.div`
    background-color: ${props => props.theme.darkBlue};
`;

export { Logo, Wrap }
