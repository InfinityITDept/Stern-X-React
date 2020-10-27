import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class ProductMenu extends Component {
  render() {
    return (
      <div className="Accordion-menu">

        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Ingredients
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li>Ingredient 1</li>
                  <li>Ingredient 2</li>
                  <li>Ingredient 3</li>
                  <li>Ingredient 4</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Uses
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              <ul>
                  <li>Use 1</li>
                  <li>Use 2</li>
                  <li>Use 3</li>
                  <li>Use 4</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
      </Accordion>
      </div>
    )
  }
}