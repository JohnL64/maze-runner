import React, { Component } from 'react';
import '../styles.scss';

const eventHandlers = {};

// THE BOX ON THE BOARD WHERE THE MOUSE POINTER IS WHEN THE MOUSE BUTTON IS HELD DOWN THAT BOX'S 
  //VISITED AND WALL PROPERTY ARE CHANGED TO TRUE. THEN UPDATED TO STATE
  eventHandlers.handleMouseDown = (property) => {
    console.log(property);
    // IF APP IS NOT CURRENTLY IN WALL BUILDING MODE DO NOTHING
    if (this.state.wallMode === false) {
      return;
    }


    const board = { ...this.state.board };
    // CHANGES THE VISITED PROPERTY AND THE WALL PROPERTY TO TRUE IN THE GIVEN PROPERTY IN BOARD

    board[property].visited = true;
    board[property].wall = true;
    this.setState({ board: board, mouseIsPressed: true });
    console.log('MOUSE DOWN');
    console.log(board);
  }
  // <button onmousedown={() => {handleMouseDown(x,y); onmouseover={() => {handleMouseEnter(x,y)}}}
  // onmouseup={()=>{handleMouseUp(x,y)}}
  //}><button/>
  // <button2 onmousedown={() => {handleMouseDown(x,y); handleMouseEnter(x,y);}
  // onmouseup={()=>{handleMouseUp(x,y)}}
  //}><button/>

  // CHANGES THE VISITED PROPERTY AND THE WALL PROPERTY TO TRUE IN THE GIVEN PROPERTY IN BOARD ONLY IF THE WALL MODE
  //IN APP IS TRUE AND IF MOUSEISPRESSED IS TRUE
  eventHandlers.handleMouseEnter = (property) => {
    if (this.state.wallMode === false || this.state.mouseIsPressed === false) {
      // console.log('wtf this is false');
      return;
    }
    const board = { ...this.state.board };
    board[property].visited = true;
    board[property].wall = true;
    this.setState({ board: board });
    // console.log(board)
    //  if (!this.state.mouseIsPressed) return;
    //  const board = this.state.board.slice();
    //  board[`${x},${y}`].visited = true;
    //  board[`${x},${y}`].wall = true;
    //  this.setState({board: board});
    //  console.log("HOVERING")kjhkjhkjhkj
  }
  
  //Event Listener for releasing mouse, updated states "mouseIsPressed"
  eventHandlers.handleMouseUp = () => {
    console.log('mouseUP');
    if (this.state.wallMode === false) return;
    this.setState({ mouseIsPressed: false });
    // console.log("MOUSE UP")
  }

  //Event Listener for establishing position of the "head" node. Updates the state "headPosition" with value "coordinates" 
  eventHandlers.handleHead = (coordinates) => {
    if (this.state.entryNodeMode === false) return;
    this.setState({ headPosition: coordinates });
  }

  //Event Listener for establishing position of the "target" node. Updates the state "headPosition" with value "coordinates" 
  eventHandlers.handleTarget = (coordinates) => {
    //coordinates = '0,2'
    if (this.state.targetNodeMode === false) return;
    this.setState({ targetPosition: coordinates });
  }

  //Helper function to reset state to default position.
  eventHandlers.clearBoard = () => {
    const board = {};
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 30; j++) {
        board[`${i},${j}`] = {
          visited: false,
        };
      }
    }
    this.setState({
      board: board,
      mouseIsPressed: false,
      entryNodeMode: false,
      targetNodeMode: false,
      wallMode: false,
      path: [],
      onFire: [],
    });
  }

  export default eventHandlers