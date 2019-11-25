import React from "react";
import styled from "styled-components";
//import ImageZoom from "react-medium-image-zoom";

const Education = () => {
  return (
    <Container>
      <Wrapper>
        <span>Education</span>
        <section>
          <div className="container">
            <h4>University</h4>
            <hr />
            <p>
              Faculty of Information Technologies and Cyber security • September
              2014 | Odessa, Ukraine
            </p>
          </div>

          <div className="container">
            <h4>Main Academy</h4>
            <hr />
            <p>Front-end • November 2016 - June 2017 | Odessa, Ukraine</p>
          </div>

          <div className="container">
            <h4>Hillel</h4>
            <hr />
            <p>DevOps • November 2018 - February 2019</p>
          </div>
        </section>
      </Wrapper>

      <Wrapper>
        <span>Certificates</span>
        <section>
          <div className="container">
            <div className="title">
              <p>DevOps • Hillel</p>
              <hr />
              <p>English Upper-Intermediate • Hillel</p>
              <hr />
              <p>MongoDB Basics • MongoDB Online University</p>
              <hr />
              <p>MongoDB for Node.js • MongoDB Online University</p>
              <hr />
              <p>Front-End • Main Academy</p>
            </div>
          </div>
        </section>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  border: 5px solid transparent;
  border-image: linear-gradient(
    to bottom right,
    #2c90fc 0%,
    #b827fc 25%,
    #fec837 50%,
    #b8fd33 75%,
    #fd1892 100%
  );
  border-image-slice: 1;
  padding: 20px;
  @media (max-width: 1500px) {
    flex-direction: column;
  }

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
    div.container {
      border: 1px solid yellow;
      border-radius: 20px;
      padding: 0 15px;
      margin: 15px 0;
      h4 {
        font-size: 20px;
        margin: 13px 0;
      }
      p {
        font-size: 18px;
      }
    }
  }
`;

export default Education;
