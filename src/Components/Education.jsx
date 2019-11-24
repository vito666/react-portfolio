import React from "react";
import styled from "styled-components";

const Education = () => {
  return (
    <Wrapper>
      <span>Education</span>
      <section>
        <p>I started my Web Dev Career as a ...</p>
        <p>
          Fusce imperdiet suscipit posuere. Aliquam sed consectetur eros.
          Praesent nec malesuada est. Quisque vel turpis viverra, condimentum
          mauris at, imperdiet ex. Duis vitae velit vestibulum, bibendum justo
          vitae, pellentesque velit. Morbi quis posuere ante. Nulla consequat
          condimentum dolor, sed ullamcorper mi condimentum et. Sed vitae
          efficitur metus. Donec vitaeEducation bibendum metus. Maecenas
          ultrices hendrerit enim a porttitor. Mauris vitae ante vel metus
          fermentum lacinia. In non placerat metus, vitae laoreet felis. Cras
          aliquet erat ut placerat molestie. Ut tristique orci a leo tempus
          condimentum.
        </p>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  background-color: #00d38a;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default Education;
