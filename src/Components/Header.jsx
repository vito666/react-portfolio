import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const linksArr = ["Home", "Education-Cert", "Work-Tech", "Contacts"];

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

const PageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    @media (max-width: 900px) {
      flex-direction: column;
    }
    li {
      display: flex;
      justify-content: center;
      width: 15vw;
      list-style-type: none;
      @media (max-width: 1150px) {
        width: 23vw;
      }
    }
  }
`;
const LinkItem = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  color: #ededf3;
  cursor: pointer;

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
    transition: all 0.3s linear;
    color: #ebb3f2;
  }
  &:hover:after {
    transform: scale(1);
  }
  @media (max-width: 767px) {
    font-size: 23px;
  }
`;

export default Header;
