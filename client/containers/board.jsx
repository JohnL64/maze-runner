/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from 'react';
import Button from './Button.jsx';
//import '../styles.scss'; // Pretty sure we don't need to import this here anymore

const Board = (props) => {

  // passing in some intial state
  const board = props.state.board;
  const grid = [];

  // creates a for loop to go through every poperty on the board (all the nodes)
  for (const property in board) {
  // a new name assignment for each property to id
    const id = property;
    let className = '';
    // conditional check to see if the onFire array has this node and the onFire array is not empty
    if (
      props.state.onFire.includes(property) &&
        props.state.onFire.length !== 0
    ) {
      // if the node is in the onFire array then push it into the grid array as a button with several properties
      // give the button an id passing in the id variable, and a className by concatenating a string with the index of the property
      className = 'onFire' + ' ' + 'anim-delay-' + props.state.onFire.indexOf(property);
      //grid.push(
      //  <Button
      //    id={id}
      //    className={className}
      //    onMouseDown={() => { props.EventHandlers.handleMouseDown(property); }}
      //    onMouseOver={() => { props.EventHandlers.handleMouseEnter(property); }}
      //    onMouseUp={() => { props.EventHandlers.onMouseUp(property); }}
      //    onClick={() => {
      //      props.EventHandlers.handleHead(property);
      //      props.EventHandlers.handleTarget(property);
      //    }}
      //  />
      //);
    }
      
    // IF we are NOT currently on Fire (aka not searching for the destination)
    // ... but the current grid-square is contained within the found path array ...
    else if (props.state.path.includes(property)) {
    // Push a .path button to the grid
      className = 'path' + ' ' + 'anim-delay-2-' + props.state.path.indexOf(property);
      //grid.push(
      //  <button
      //    id={id}
      //    className={
      //      'path' + ' ' + 'anim-delay-2-' + props.state.path.indexOf(property)
      //    }
      //    onMouseDown={() => {
      //      this.handleMouseDown(property);
      //    }}
      //    onMouseOver={() => {
      //      this.handleMouseEnter(property);
      //    }}
      //    onMouseUp={() => {
      //      this.handleMouseUp(property);
      //    }}
      //    onClick={() => {
      //      this.handleHead(property);
      //      this.handleTarget(property);
      //    }}
      //  ></button>
      //);
    // IF we are NOT currently on Fire (aka not searching for the destination)
    // ... but we are looking at the starting square
    } else if (property === props.state.headPosition) {
    // push a .head square to the grid
      className = 'head';
      //grid.push(
      //  <button
      //    id={id}
      //    className="head"
      //    onMouseDown={() => {
      //      this.handleMouseDown(property);
      //    }}
      //    onMouseOver={() => {
      //      this.handleMouseEnter(property);
      //    }}
      //    onMouseUp={() => {
      //      this.handleMouseUp(property);
      //    }}
      //    onClick={() => {
      //      this.handleHead(property);
      //      this.handleTarget(property);
      //    }}
      //  ></button>
      //);
    // IF we are NOT currently on Fire (aka not searching for the destination)
    // ... but we are looking at the target square
    } else if (property === props.state.targetPosition) {
      // push a .target square to the grid
      className = 'target';
      //grid.push(
      //  <button
      //    id={id}
      //    className="target"
      //    onMouseDown={() => {
      //      this.handleMouseDown(property);
      //    }}
      //    onMouseOver={() => {
      //      this.handleMouseEnter(property);
      //    }}
      //    onMouseUp={() => {
      //      this.handleMouseUp(property);
      //    }}
      //    onClick={() => {
      //      this.handleHead(property);
      //      this.handleTarget(property);
      //    }}
      //  ></button>
      //);
    // IF we are NOT currently on Fire (aka not searching for the destination)
    // ... but we are looking at a section of the user input wall...
    } else if (board[property].wall === true) {
    // push a .wallGrid square to the grid
      className = 'wallGrid';
      //grid.push(
      //  <button
      //    id={id}
      //    className="wallGrid"
      //    onMouseDown={() => {
      //      this.handleMouseDown(property);
      //    }}
      //    onMouseOver={() => {
      //      this.handleMouseEnter(property);
      //    }}
      //    onMouseUp={() => {
      //      this.handleMouseUp(property);
      //    }}
      //    onClick={() => {
      //      this.handleHead(property);
      //      this.handleTarget(property);
      //    }}
      //  ></button>
      //);
    // IF we are NOT currently on Fire (aka not searching for the destination)
    // ... and we've determined that we're not looking at a start, target or wall square:
    } else {
    // push a .regularGrid square to the grid.
      className = 'regularGrid';

      //grid.push(
      //  <Button
      //    id={id}
      //    className={className}
      //    onMouseDown={() => { props.EventHandlers.handleMouseDown(property); }}
      //    onMouseOver={() => { props.EventHandlers.handleMouseEnter(property); }}
      //    onMouseUp={() => { props.EventHandlers.onMouseUp(property); }}
      //    onClick={() => {
      //      props.EventHandlers.handleHead(property);
      //      props.EventHandlers.handleTarget(property);
      //    }}
      //  />
      //);
    }

    // This is the one .push Button to rule them all
    grid.push(
      <Button
        id={id}
        key={id}
        className={className}
        onMouseDown={() => { props.EventHandlers.handleMouseDown(property); }}
        onMouseOver={() => { props.EventHandlers.handleMouseEnter(property); }}
        onMouseUp={() => { props.EventHandlers.onMouseUp(property); }}
        onClick={() => {
          props.EventHandlers.handleHead(property);
          props.EventHandlers.handleTarget(property);
        }}
      />
    );
  }
  console.log(grid);
  //console.log(Array.isArray(grid));
  return(
    <>
      {grid}
    </>
  );

};

export default Board;