import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Wrapper>
        <div className="title">I'm Artem Konstantinov</div>
        <section>
          <p>
            I'm a Ukraine based <span>Junior Front-end Developer</span>, my
            object is to obtain a <span>React Developer</span> position where I
            can use my technical skills, education and passion for solving
            interesting problems.
          </p>
        </section>
      </Wrapper>

      <Wrapper className="another-border-color">
        <div className="title">About Me</div>
        <section>
          <p>
            I started my <span>Web Dev</span> career when I moved to
            <span> USA</span> . My first project was Simple Website, I used
            Jquery, HTML, CSS. After that furniture company for whom I created
            website asked to create an online store, for this project i used
            <span> Wordpress and Woocommerce</span>
            , plus all Hosting tasks. <br />
            <hr />
            Then I returned back to Ukraine, and finished
            <span> Main Academy</span>, FrontEnd courses. In 2017 I had
            freelance order for online store on Wordpress. <br />
            <hr />
            Next in December 2017 I found my first job in
            <span> IT company - Evo-Studio</span>.I was creating there websites
            on <span> HTML, CSS, JS</span> and themes for Themeforest. After
            about a year of work there I decided to check DevOps course in
            Hillel. <br />
            <hr />
            In April 2019 I found my next job in company -
            <span> Cloudit LLC</span> . My responsibilities were, creating pages
            with React, creating forms with React and React-Formik, also a
            little tasks with <span>Redux</span>.
          </p>
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
  .another-border-color {
    border: 5px solid transparent;
    border-image: linear-gradient(
      to bottom right,
      #fd1892 0%,
      #2c90fc 25%,
      #fec837 50%,
      #b8fd33 75%,
      #b827fc 100%
    );
    border-image-slice: 1;
  }
`;
const Wrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;
  border: 5px solid transparent;
  border-image: linear-gradient(
    to bottom right,
    #b827fc 0%,
    #2c90fc 25%,
    #b8fd33 50%,
    #fec837 75%,
    #fd1892 100%
  );
  border-image-slice: 1;

  div.title {
    margin-top: 10px;
    font-family: "Quicksand", sans-serif;
    font-size: 60px;
    text-align: center;
    @media (max-width: 769px) {
      text-align: center;
    }
    @media (max-width: 530px) {
      font-size: 30px;
    }
  }
  section {
    text-align: center;
    p {
      color: #ededf3;
      font-size: 40px;
      @media (max-width: 530px) {
        font-size: 20px;
      }
    }
    span {
      color: #ebb3f2;
    }
  }
`;

export default Home;
