import React from "react";
import styled from "styled-components";

function Work() {
  return (
    <Container>
      <Wrapper>
        <span>Work</span>
        <section>
          <div className="container">
            <h4>Sofia Collection Autumn 2017</h4>
            <hr />
            <p>
              Description: Wordpress,Woocommerce, CSS. <br />
              Created online store, added Woocommerce, <br /> SQL Database, PHP
              My Admin
            </p>
          </div>
          <div className="container">
            <h4>EVO-Studio December 2017 - January 2019</h4>
            <hr />
            <p>
              Description: HTML5, CSS, JavaScript, Jquery, Pixel perfect.
              <br />
              Created websites and themes for Themeforest
            </p>
          </div>
          <div className="container">
            <h4>Cloudit LLC April 2019 - September 2019</h4>
            <hr />
            <p>
              Description: React, HTML, CSS, WordPress, PHP. <br />
              Helped team creating NDA project. After this project were
              developing PHP plugins and widgets.
              <br />
            </p>
          </div>
          <div className="container">
            <h4>University</h4>
            <hr />
            <p>
              Faculty of Information Technologies and Cyber security • September
              2014 | Odessa, Ukraine
            </p>
          </div>
        </section>
      </Wrapper>

      <Wrapper>
        <span>Technologies</span>
        <section className="technologies-section">
          <div className="container">
            <h4>Main</h4>
            <hr />
            <ul>
              <li>JavaScript(ES5-ES8)</li>
              <li>HTML5</li>
              <li>CSS(LESS, SCSS)</li>
              <li>React(Hooks,Functional)</li>
              <li>Redux(Redux Form)</li>
              <li>Node.js(CRUD)</li>
            </ul>
          </div>

          <div className="container">
            <h4>Additional Tools</h4>
            <hr />
            <p>
              Photoshop, Figma, Scetch,
              <br /> WordPress, Webpack, Bootstrap, <br /> Pixel perfect,
              MongoDB, React-router,
              <br /> Axios, yarn, MacOS.
            </p>
          </div>
        </section>
      </Wrapper>
    </Container>
  );
}

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
    #fec837 0%,
    #b827fc 25%,
    #2c90fc 50%,
    #b8fd33 75%,
    #fd1892 100%
  );
  border-image-slice: 1;
  padding: 20px;
  @media (max-width: 1280px) {
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
        font-size: 25px;
        margin: 15px 0 10px 0;
      }
      p {
        font-size: 19px;
      }
      ul {
        padding-inline-start: 30px;
        li {
          margin: 10px 0;
          font-size: 20px;
        }
        @media (max-width: 376px) {
          padding: 0 0 0 15px;
        }
      }
    }
  }
  .technologies-section {
    display: flex;
    flex-direction: row;
    @media (max-width: 769px) {
      flex-direction: column;
      width: 100%;
    }
    .container {
      margin-right: 32px;
      @media (max-width: 769px) {
        margin-right: 0px;
        flex-direction: column;
      }
    }
  }
`;

export default Work;
