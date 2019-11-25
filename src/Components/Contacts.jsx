import React from "react";
import styled from "styled-components";
import Resume from "../Resume/artem_konstantinov_resume_front_end.pdf";

function Contacts() {
  return (
    <Wrapper>
      <span>Contacts</span>
      <section>
        <div className="container">
          <p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:artem.konst6@gmail.com"
            >
              Email: artem.konst6@gmail.com
            </a>
            <br /> <br />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/artem-konstantinov-57437a172/"
            >
              LinkedIn
            </a>
            <br /> <br />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/vito666"
            >
              Github
            </a>{" "}
            <br /> <br />
            <a download href={Resume}>
              Download my resume
            </a>
          </p>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80vw;
  margin-top: 20px;
  border: 5px solid transparent;
  border-image: linear-gradient(
    to bottom right,
    #b8fd33 0%,
    #b827fc 25%,
    #fec837 50%,
    #2c90fc 75%,
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
      p {
        font-size: 25px;
        text-align: center;
        a {
          color: #fff;
          :visited {
            color: #fff;
          }
          :hover {
            transition: all 0.5s linear;
            color: #a358cc;
          }
        }
        @media (max-width: 376px) {
          font-size: 18px;
        }
      }
    }
  }
`;
export default Contacts;
