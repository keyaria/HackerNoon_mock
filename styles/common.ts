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

export const Bar = styled.div`
  background: rgba(0, 0, 0, 0.1);
  width: 10px;
  height: 6px;
  margin: 1px 0px;
`

export const Bars = styled.div`
  height: 100%;
  width: 10px;
  margin-left: 30px;
  display: flex;
  margin-right: 10px;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`
export const BorderBox = styled.div`
  margin: 0px auto;
  background: rgb(33, 36, 40);
  border-style: solid;
  border-width: 16px;
  border-image: url(https://hackernoon.com/Devimg/hn-ad-green.png) 16 / 1 / 8px stretch;
  color: rgb(0, 255, 0);
  font-weight: bold;
  text-decoration: none;
  position: relative;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 1fr;
  -webkit-box-align: center;
  align-items: center;
`
