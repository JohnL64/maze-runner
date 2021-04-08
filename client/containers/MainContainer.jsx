/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
import Navbar from '../Navbar.jsx';
import '../styles.scss';
import Nissan from './Nissan.jsx';
import Board from './board.jsx';


// import from child components...

// const initialState = { // do we need this here?
// };

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: {},
      mouseIsPressed: false,
      entryNodeMode: false,
      targetNodeMode: false,
      wallMode: false,
      headPosition: '0,0',
      targetPosition: '9,9',
      path: [],
      onFire: [],
    };
    this.addWallMode = this.addWallMode.bind(this);
    this.entryNodeMode = this.entryNodeMode.bind(this);
    this.targetNodeMode = this.targetNodeMode.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.setState = this.setState.bind(this);
  }

  // [{x:0, y:0}, {x:0, y:1}, {x:0, y:2} {x:1, y:0}, {x:1, y:1}, {x:1, y:2}]

  // CREATES THE BOARD ON INITIAL MOUNT
  componentDidMount() {
    const board = {};
    // CREATES AN OBJECT AND ADDS A PROPERTY ON EACH ITERATION WHERE THE KEY IS THE CURRENT I AND J ITERATORS 
    //AND THE VALUE IS SET TO AN OBJECT WITH A KEY OF VISITED WITH THE VALUE OF FALSE
    this.setState({ onFire: []}); // a hack?
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 30; j++) {
        board[`${i},${j}`] = {
          visited: false,
        };
      }
    }
    // SETS THE BOARD PROPERTY'S VALUE IN STATE TO THIS NEWLY CREATED OBJECT
    this.setState({ board });
    console.log(this.state);
  }
  
  // CHANGES THE MODE OF THE APP TO WALL BUIDLING MODE
  addWallMode() { 
    this.setState(
      {
        entryNodeMode: false,
        targetNodeMode: false,
        wallMode: true,
      },
      function () {
        console.log('addwallmode', this.state);
      }
    );
  }
  
  // CHANGES THE MODE OF THE APP TO ENRTY NODE MODE
  entryNodeMode() {
    this.setState(
      {
        entryNodeMode: true,
        targetNodeMode: false,
        wallMode: false,
      },
      function () {
        console.log('entrynodemode', this.state);
      }
    );
  }

  //CHANGES THE MODE OF THE APP TO TARGET NODE MODE
  targetNodeMode() {
    this.setState(
      {
        entryNodeMode: false,
        targetNodeMode: true,
        wallMode: false,
      },
      function () {
        console.log('targetnodemode', this.state);
      }
    );
  }

  clearBoard() {
    const board = {};
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 30; j++) {
        board[`${i},${j}`] = {
          visited: false,
        };
      }
    }
  }


  // kicking off the render for the whole application
  render() {
    //Final Render
    return (
      <div>
        <div className="navbar">
          {/* Render Navbar, passing in functions for the buttons as props */}
          <Navbar
            clearBoard={this.clearBoard}
            runAlgo={() => Nissan.algorithm(this.state, this.setState)}
            addWallMode={this.addWallMode}
            entryNodeMode={this.entryNodeMode}
            targetNodeMode={this.targetNodeMode}
          />
        </div>
        {/* Gap div to ensure navbar does not overlap main body */}
        <div className="gap"></div>
        {/* Main grid container */}
        <div className="gridContainer">
          <Board state={this.state} setState={this.setState} />
        </div>
      </div>
    );
  }
}

export default MainContainer;
