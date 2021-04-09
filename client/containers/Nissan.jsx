import React, { Component } from 'react';
import '../styles.scss';

const nissan = {};

//Start of the Dijkstra's algorithm
nissan.algorithm = (state, setState) => {
  /////
  if (state.path.length !== 0) {
    // BOARD - this tracks a state of the board - REMEMBER: Board is a GIANT obj {'0,0': {visted:false}, '0,1': {visted:false}, ...}
    const board = Object.assign(state.board);
    // console.log('1', JSON.stringify(board));
    for (const property in board) {
      // console.log(this.state.board[property])
      // Looks like we're resetting all visited values to false at the start of the Algo
      board[property].visited = false;
      // Resetting any previous board props that had a previousNode prop and 
      if (board[property].previousNode) delete board[property].previousNode;
    }
    // console.log('2', JSON.stringify(board));
    setState({
      board: board,
      path: [],
    });
  }
  
  // NODES - is a copy of the board state
  const nodes = Object.assign(state.board);
  // for (let i = 0; i < 10; i++) {
  //   for (let j = 0; j < 10; j++) {
  //     nodes[`${i},${j}`] = {
  //       visited: false,
  //     }
  //   }
  // }

  // HEAD - tracks start position, is a string 'x,y' which is also a prop in the board 
  const head = state.headPosition;
  // TARGET - tracks target position, is a string 'y,x' which is also a prop in the board 
  const target = state.targetPosition;
  // const target = nodes['2,1']

  // Changes the NodeBoard, head position visited defaulting to true
  nodes[head].visited = true;

  // Changes the NodeBoard, this is where we create a new property PREVIOUSNODE to the NodeBoard
  // Defaulting the head coordinates to have previousNode property to be null
  nodes[head].previousNode = null;

  // nodes['0,0'].head = true;
  // nodes['2,1'].target = true;

  // Creating QUEUE array
  // Each element is an object
  // We initialize to have 1 obj with a prop of the head coordinates from the regular Board. An array coerced into a string as the key
  // And it's value is the head coordinates from the NodeBoard

  /* example
  queue = [
    {
      'x,y': {
              visited: true,
              previousNode: null
              }  
    },
    ...
  ]
  */ 
  const queue = [{ [head]: nodes[head] }];

  // FIRE is a shallow copy of the onFire array from state 
  const fire = state.onFire.slice();

  // // console.log(nodes)

  // HELPER - function with two parameters, both are arrays.
  function helper(queue, fire) {
    // console.log('base queue every time helper is called', JSON.stringify(queue))
    // console.log('fireeee', fire);
    for (let i = 0; i < queue.length; i++) {
      // Looping through queue array to find the target coordinates
      if (Object.keys(queue[i]) == target) {
        const path = [];
        // console.log('queuei', JSON.parse(JSON.stringify(queue[i])));

        // PREVIOUSNODE variable to track what we just found in the loop
        // Used for ease of reading code in next few lines  
        let previousNode = queue[i][target].previousNode;

        // console.log('previousNode', previousNode)
        // console.log('previousNode', Object.keys(previousNode))

        // Creating path array
        while (previousNode !== null) {
          // let key = Object.keys(previousNode);
          path.push(previousNode);
          previousNode = nodes[previousNode].previousNode;
        }
        // console.log('inside base case', JSON.stringify(nodes));
        // console.log('path1', path);
        return path;
      }
    }
    // queue -------> [{'0,0': {visited: true}}]
    
    // **TPT** Daryl code section apart of the Algorithym, specifically the helper function
    // I'm assuming this to be the position handling logic
    // Queue is an array of objects with the keys being coordinates
    // Create's a const variable position, and assigns the keys of the zero index of the passed in queue
    // The zero position is expected to be an object, and the key is expected to be an string of a coordinate like '0,0'
    // position = ['0,0'] example
    const position = Object.keys(queue[0]);
    
    // Extracting value of the zero index of position. It was only an array with a single element anyway.
    // string -> '0,0' example
    const string = position[0];
    
    // Further conversion to turn the string of coordinates into a array of coordinates, using split
    // 'arrPosition -> ['0', '0']
    const arrPosition = position[0].split(',');
    // console.log('arrPosition', JSON.stringify(arrPosition))
    
    // For loop to specific coordinate positions
    // want to check [-1,0] [1,0] [0,1] [0,-1]
    // i = -1 and i = 1
    for (let i = -1; i < 2; i++) {
      // For loop only runs on -1 and 1. They are using the loop to simply check 4 coordinate sets.
      if (i !== 0) {
        // NewPosition & NewPosition2 are simply coordinate constructors in both the x and y direction
        const newPosition = `${Number(arrPosition[0]) + i},${Number(
          arrPosition[1]
        )}`; // <--- '-1,0'
        const newPosition2 = `${Number(arrPosition[0])},${
          Number(arrPosition[1]) + i
        }`; // <--- '0,-1'
        // console.log('new', 'i', i, newPosition, newPosition2)
        // console.log('check','i', i, nodes[newPosition])
        
        // This logic checks first that the newly constructed position exists on the board and that it has not been visited
        // The nodes object has been assigned the via Object.assign the value of the board
        // Board is an object containing all possible node coordinates of the board
        if (
          nodes[newPosition] !== undefined &&
          nodes[newPosition].visited === false
        ) {
          // if the node exists and it has not been visited, reassign visited to true
          nodes[newPosition].visited = true;
          // and push the new position into the fire array
          fire.push(newPosition);
          // console.log("WHY THE FUCK", nodes[newPosition])

          // for this newPosition node, assign the string variable to the previousNode property
          // nodes[newPosition].previousNode = {[position]: nodes[position]};
          nodes[newPosition].previousNode = string;

          // push this newPositionNode as a key/value pair into the queue
          queue.push({ [newPosition]: nodes[newPosition] });
        } 

        // this if for newPosition2 is a carbon copy of newPosition
        if (
          nodes[newPosition2] !== undefined &&
          nodes[newPosition2].visited === false
        ) {
          nodes[newPosition2].visited = true;
          fire.push(newPosition2);
          // nodes[newPosition2].previousNode = {[position]: nodes[position]};
          nodes[newPosition2].previousNode = string;
          queue.push({ [newPosition2]: nodes[newPosition2] });
        }
      }
    }
    
    // After the helper logic has been performed remove the first node from the queue with shift
    queue.shift();
    // console.log to check the new queue list
    // console.log('queue', queue);
    // Base case, if the queue is now empty, return undefined
    if (queue.length === 0) {
      return undefined;
    } // <--- removes first element from array
    // console.log('queueEEE', JSON.stringify(queue))
    // console.log('NODEEEEEE', JSON.stringify(nodes))
    
    // recursive call of the helper path finder function, pass in a slice copy of the queue and pass through the fire logic
    return helper(queue.slice(), fire);
  }

  // Initial invocation of the path finder helper function, assigns the return value to array
  const array = helper(queue, fire);
  
  // if array is undefined, it means that recursive finder made it to all the available positions on the board and couldn't reach the target
  if (array === undefined) {
    alert('No path found. Try again.');
  }

  // removes the ending position of the array, which would be the target. Don't need to do anything on the target square
  // that's our target
  array.pop();
  
  // reverse the array of nodes and assigns it to path
  const path = array.reverse();
  
  // console.log(helper(queue))
  // console.log('2', path)
  // console.log('path', path);
  // console.log('fire', fire);

  // removes the ending position of fire which would be the head. Don't need to do anything on the initial path finder head square
  // that's our character
  fire.pop();

  // assigns a slice copy of fire to finalFire
  const finalFire = fire.slice();

  // setTimeout to reset the state of onFire & path on the board. This is based on the length of the finalFire variable
  setTimeout(
    function () {
      console.log('settimeeout');
      return setState({
        onFire: [],
        path: path,
      });
    },
    finalFire.length * 25
  );
  
  // updates state with set state and passes in the assembled path and finalFire values
  setState({ path: path, onFire: finalFire });
};

export default nissan;