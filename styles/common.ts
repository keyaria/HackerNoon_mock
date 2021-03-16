import styled from '@emotion/styled'
import { Avatar } from '@chakra-ui/react';


export const SquareAvatar = styled(Avatar)`
  & > img {
    border-radius: 0px;
    box-shadow: rgb(194 202 214) 0px 0.2em, rgb(194 202 214) 0px -0.2em, rgb(194 202 214) 0.2em 0px, rgb(194 202 214) -0.2em 0px;
  }
`
export const SectionDivider = styled.h4`
display:flex;
align-items: center;
font-size: 24px;
font-weight: 900px;
text-transform: uppercase;
grid-column: 1 / -1;
&:before {
  content: "";
    flex: 1 1 0%;
    border-bottom: 2px solid rgb(194, 202, 214);
}

&:after {
  content: "";
    flex: 1 1 0%;
    border-bottom: 2px solid rgb(194, 202, 214);
}
}
`;

export const CallToAction = styled.a`

color: rgb(0, 255, 0);
background-color: rgb(33, 36, 40);
padding: 0.25em 0.5em;
margin-bottom: 10px;
border: 4px solid rgb(0, 255, 0);
display: inline-block;
font-weight: bold;
`;

export const GreenLink = styled.a`
  padding: 2px 0px 1px;
  cursor: pointer;
  background-image: linear-gradient(
    transparent 0%,
    transparent calc(50% - 9px),
    rgba(0, 255, 0, 0.35) calc(50% - 9px),
    rgba(0, 255, 0, 0.35) 100%
  );
  background-size: 100% 200%;
  background-position: 0px 0px;
  word-break: break-word;
  transition: all 120ms ease-in-out 0s;
  &:hover {
    background-size: 100%;
    background-image: linear-gradient(
      transparent 0%,
      transparent calc(60% - 9px),
      rgba(0, 255, 0, 0.35) calc(60% - 9px),
      rgba(0, 255, 0, 0.35) 100%
    );
  }
`
