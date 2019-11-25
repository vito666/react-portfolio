import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./Home";
import Education from "./Education";
import Work from "./Work";
import Contacts from "./Contacts";

function Container({ location }) {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path={["/Home", "/"]} component={Home} />
              <Route path="/Education" component={Education} />
              <Route path="/Contacts" component={Contacts} />
              <Route path="/Work" component={Work} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    justify-content: center;
    align-content: center;
    display: flex;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    @media (min-width: 1600px) {
      width: 70%;
    }
  }
`;

export default withRouter(Container);
