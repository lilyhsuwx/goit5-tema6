import styled from "styled-components";

export const List = styled.ul`
  width: 900px;
  margin: 0 auto;
  list-style: none;

  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  background-color: blanchedalmond;
  outline: 1px solid orange;
  border-radius: 15px;
  padding: 10px 30px;
  transition: all 0.5s;
  position: relative;
  top: 20px;

  &:hover{
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
    color: black;
`;

export const Subtitle = styled.p`
    color: black;
`;