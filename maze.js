let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let largeMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function singleSolution(maze) {
  let path = [];
  function findPath(x, y) {
    if (x < 0 || y < 0 || x >= maze[0].length || y >= maze.length) { // out-of-bounds
      return false;
    }
    
    if (maze[y][x] === '*') { // path blocked
      return false;
    }

    if (maze[y][x] === 'e') { // exit reached
      return true;
    }

    if (maze[y][x] === 9 || maze[y][x] === 8) { // already checked this space
      return false;
    }

    maze[y][x] = 9; // mark as part of path

    if (findPath(x + 1, y) === true) {
      path.push('R');
      return true;
    }
    if (findPath(x, y + 1) === true) {
      path.push('D');
      return true;
    }
    if (findPath(x, y-1) === true) {
      path.push('U');
      return true;
    }
    if (findPath(x - 1, y) === true) {
      path.push('L');
      return true;
    }

    maze[y][x] = 8; // unmark as part of path
    path.pop();
    return false;
  }
  
  findPath(0, 0);
  return path.reverse();
}

console.log(singleSolution(largeMaze));