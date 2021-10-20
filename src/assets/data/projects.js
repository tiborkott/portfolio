import { v4 as uuidv4 } from 'uuid';
import ElviraImg from '../images/elvira.png';
import SudokuImg2 from '../images/sudoku_solver_2.png';
import SnakeImg from '../images/snake.png';
import AsteroidImg from '../images/asteroid_game.png';
import TrainticketImg from '../images/trainticket.png';
import ChessImg from '../images/chess.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Sudoku Solver',
    desc: 'An application to generate and solve soduko tables written in C',
    img: SudokuImg2,
  },
  {
    id: uuidv4(),
    name: 'Train ticket',
    desc: 'A train ticket selling system written in C++',
    img: TrainticketImg,
  },
  {
    id: uuidv4(),
    name: 'Two Player Snake',
    desc: 'A two player snake game written in Java',
    img: SnakeImg,
  },
  {
    id: uuidv4(),
    name: 'Asteroid Game',
    desc: 'A team project, where we have built an asteroid mining game with agile software development technics',
    img: AsteroidImg,
  },
  {
    id: uuidv4(),
    name: 'Chess Puzzle Generator',
    desc: 'A program to generate chess puzzles',
    img: ChessImg,
  },
  {
    id: uuidv4(),
    name: 'Elvira',
    desc: 'An android app for tracking the trains based on the elvira site design.',
    img: ElviraImg,
  },
];

export default projects;
