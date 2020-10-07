import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import ErrorMessage from "../errorMessage/errorMessage";

import "./app.css";

export default class App extends Component {
  state = {
    RandomChar: true,
    error: false,
    selectedChar: 120
  };

  toggleRandomChar = () => {
    this.setState({
      RandomChar: !this.state.RandomChar
    });
  };

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    const char = this.state.RandomChar ? <RandomChar /> : null;
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {char}
              <button onClick={this.toggleRandomChar} className="toggleBtn">
                Toggle Random Char
              </button>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ItemList onCharSelected={this.onCharSelected} />
            </Col>
            <Col md="6">
              <CharDetails charId={this.state.selectedChar} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
