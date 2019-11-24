import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    li {
      display: flex;
      justify-content: center;
      width: 15vw;
      list-style-type: none;
    }
  }
`;
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:visited {
    color: #fff;
  }
  &::after {
    content: "";
    height: 2px;
    width: 100%;
    display: flex;
    margin: 2px auto;
    transform-origin: center;
    transform: scale(0);
    transition: all 0.4s linear;
    background: #ebb3f2;
    box-shadow: #aa7aa3 0px 0px 10px, #aa7aa3 0px 0px 10px, #aa7aa3 0px 0px 10px;
  }
  &:hover {
    color: #ebb3f2;
  }
  &:hover:after {
    transform: scale(1);
  }
`;
const linksArr = ["Home", "Education", "Work", "Contacts"];

const Header = () => {
  return (
    <PageHeader>
      <ul>
        {linksArr.map((value, i) => {
          return (
            <li key={i}>
              <LinkItem to={`/${value}`}>{value}</LinkItem>
            </li>
          );
        })}
      </ul>
    </PageHeader>
  );
};

export default Header;
