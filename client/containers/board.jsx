import React, { Component } from 'react';
import '../styles.scss';

    // passing in some intial state
    const { board } = this.state;
    const grid = [];

    // creates a for loop to go through every poperty on the board (all the nodes)
    for (const property in board) {
      // a new name assignment for each property to id
      let id = property;

      // conditional check to see if the onFire array has this node and the onFire array is not empty
      if (
        this.state.onFire.includes(property) &&
        this.state.onFire.length !== 0
      ) {
        // if the node is in the onFire array then push it into the grid array as a button with several properties
        // give the button an id passing in the id variable, and a className by concatenating a string with the index of the property
        grid.push(
          <button
            id={id}
            className={
              'onFire' +
              ' ' +
              'anim-delay-' +
              this.state.onFire.indexOf(property)
            }
            onMouseDown={() => {
              this.handleMouseDown(property);
            }}
            onMouseOver={() => {
              this.handleMouseEnter(property);
            }}
            onMouseUp={() => {
              this.handleMouseUp(property);
            }}
            onClick={() => {
              this.handleHead(property);
              this.handleTarget(property);
            }}
          ></button>
        );
        // }
      }
      
      // IF we are NOT currently on Fire (aka not searching for the destination)
      // ... but the current grid-square is contained within the found path array ...
      else if (this.state.path.includes(property)) {
        // Push a .path button to the grid
        grid.push(
          <button
            id={id}
            className={
              'path' + ' ' + 'anim-delay-2-' + this.state.path.indexOf(property)
            }
            onMouseDown={() => {
              this.handleMouseDown(property);
            }}
            onMouseOver={() => {
              this.handleMouseEnter(property);
            }}
            onMouseUp={() => {
              this.handleMouseUp(property);
            }}
            onClick={() => {
              this.handleHead(property);
              this.handleTarget(property);
            }}
          ></button>
        );
      // IF we are NOT currently on Fire (aka not searching for the destination)
      // ... but we are looking at the starting square
      } else if (property === this.state.headPosition) {
        // push a .head square to the grid
        grid.push(
          <button
            id={id}
            className="head"
            onMouseDown={() => {
              this.handleMouseDown(property);
            }}
            onMouseOver={() => {
              this.handleMouseEnter(property);
            }}
            onMouseUp={() => {
              this.handleMouseUp(property);
            }}
            onClick={() => {
              this.handleHead(property);
              this.handleTarget(property);
            }}
          ></button>
        );
      // IF we are NOT currently on Fire (aka not searching for the destination)
      // ... but we are looking at the target square
      } else if (property === this.state.targetPosition) {
        // push a .target square to the grid
        grid.push(
          <button
            id={id}
            className="target"
            onMouseDown={() => {
              this.handleMouseDown(property);
            }}
            onMouseOver={() => {
              this.handleMouseEnter(property);
            }}
            onMouseUp={() => {
              this.handleMouseUp(property);
            }}
            onClick={() => {
              this.handleHead(property);
              this.handleTarget(property);
            }}
          ></button>
        );
      // IF we are NOT currently on Fire (aka not searching for the destination)
      // ... but we are looking at a section of the user input wall...
      } else if (board[property].wall === true) {
        // push a .wallGrid square to the grid
        grid.push(
          <button
            id={id}
            className="wallGrid"
            onMouseDown={() => {
              this.handleMouseDown(property);
            }}
            onMouseOver={() => {
              this.handleMouseEnter(property);
            }}
            onMouseUp={() => {
              this.handleMouseUp(property);
            }}
            onClick={() => {
              this.handleHead(property);
              this.handleTarget(property);
            }}
          ></button>
        );
      // IF we are NOT currently on Fire (aka not searching for the destination)
      // ... and we've determined that we're not looking at a start, target or wall square:
      } else {
        // push a .regularGrid square to the grid.
        grid.push(
          <button
            id={id}
            className="regularGrid"
            onMouseDown={() => {
              this.handleMouseDown(property);
            }}
            onMouseOver={() => {
              this.handleMouseEnter(property);
            }}
            onMouseUp={() => {
              this.handleMouseUp(property);
            }}
            onClick={() => {
              this.handleHead(property);
              this.handleTarget(property);
            }}
          ></button>
        );
      }
    }

export default board;