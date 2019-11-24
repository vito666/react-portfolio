import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <div className="title">I'm Artem Konstantinov</div>
      <section>
        <p>
          I'm a Ukraine based <span>Junior Front-end Developer</span>, my object
          is to obtain an entry-level IT position where I can use my technical
          skills, education and passion for solving interesting problems.
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 40px;

  div.title {
    font-size: 40px;
    font-weight: bold;
  }
  section {
    p {
      color: #000;
      font-size: 20px;
    }
    span {
      color: white;
    }
  }
`;

export default Home;
