import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ThemeSelector from './components/Theme/selector.jsx';

let request_id = null;

function Snake(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

// class SnakeFactory {
//     constructor(ctx) {
//         this.ctx = ctx;
//         this.get_snake = this.get_snake.bind(this);
//         this.snake_map = {};
//     }
//
//     get_snake(color) {
//         const color_str = color.join('');
//         if (color_str in this.snake_map) {
//             return this.snake_map[color];
//         }
//
//         console.log('Not in map');
//         const snake = new Snake(color, this.ctx);
//         this.snake_map[color_str] = snake;
//         return snake;
//     }
// }

class Game {
    constructor(ctx, snakeList) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.w = 5;
        this.h = 5;
        this.eaten = false;
        this.current_direction = { x: 10, y: 0 };
        this.previousTimeStamp = 0;
        this.snakeList = snakeList;
        this.draw = this.draw.bind(this);
        this.boundry_reached = this.boundry_reached.bind(this);
        this.update_next = this.update_next.bind(this);
        this.get_random_food = this.get_random_food.bind(this);
        this.food_location = this.get_random_food();
        this.directions = {
            ArrowLeft: { x: -10, y: 0 },
            ArrowRight: { x: 10, y: 0 },
            ArrowUp: { x: 0, y: -10 },
            ArrowDown: { x: 0, y: 10 },
        };
        request_id = window.requestAnimationFrame(this.draw);
    }

    get_random_food() {
        let x = Math.random(1) * 500;
        let y = Math.random(1) * 500;
        return [x, y, 10, 10];
    }

    boundry_reached() {
        const { x, y, w, h } = this.snakeList[0];
        if (this.current_direction.x > 0 && x + 5 >= 500) {
            this.snakeList[0].x = 0;
        } else if (this.current_direction.x < 0 && x - 5 <= 0) {
            this.snakeList[0].x = 500;
        } else if (this.current_direction.y > 0 && y + 5 >= 500) {
            this.snakeList[0].y = 0;
        } else if (this.current_direction.y < 0 && y - 5 <= 0) {
            this.snakeList[0].y = 500;
        }
    }

    update_next() {
        const { x, y, w, h } = this.snakeList[0];
        const last = this.snakeList.pop();
        last.x = x + this.current_direction.x;
        last.y = y + this.current_direction.y;
        this.snakeList.unshift(last);
    }

    draw(timestamp) {
        if (this.eaten) {
            this.get_random_foor();
        }
        const elapsedTime = timestamp - this.previousTimeStamp;
        if (elapsedTime >= 20) {
            this.ctx.clearRect(0, 0, 500, 500);
            this.boundry_reached();
            this.ctx.fillStyle = 'rgb(250,250,250)';
            this.ctx.fillRect(...this.food_location);
            this.snakeList.forEach((snake) => {
                this.ctx.fillRect(snake.x, snake.y, snake.w, snake.h);
            });
            this.update_next();
            this.previousTimeStamp = timestamp;
        }
        window.requestAnimationFrame(this.draw);
    }
}

class Food {}

import { useEffect, useRef, useState } from 'react';
import { defaults } from 'autoprefixer';

function App() {
    const [gameState, setGameState] = useState('Ready');
    const canref = useRef(null);
    const game = useRef(null);

    const handleGameStateChange = (gameState) => {
        switch (gameState) {
            case 'Ready':
                setGameState('Playing');
                break;
            case 'Playing':
                setGameState('Stop');
                break;
            // case 'Pause':
            //     setGameState('Playing');
            //     break;
            case 'Stop':
                console.log(request_id);
                cancelAnimationFrame(request_id);
                setGameState('Ready');
                break;
            default:
                setGameState('Ready');
                break;
        }
    };

    useEffect(() => {
        console.log('UseEffet');
        const canvas = canref.current;
        const ctx = canvas.getContext('2d');
        ctx.globalCompositeOperation = 'destination-over';
        ctx.shadowBlur = 50;
        const start_snake = new Snake(0, 5, 20, 20);
        const second_snake = new Snake(20, 5, 20, 20);
        const third_snake = new Snake(40, 5, 20, 20);
        game.current = new Game(ctx, [start_snake, second_snake, third_snake]);
    }, []);

    const handleKeyPress = (e) => {
        e.preventDefault();
        if (game.current !== null) {
            const key = e.key;
            if (key in game.current.directions) {
                game.current.current_direction = game.current.directions[key];
            }
        }
    };

    return (
        <main
            className='mx-auto bg-black h-screen'
            onKeyDown={handleKeyPress}
            tabIndex={-1}>
            <div className='flex justify-center items-center h-full'>
                <div className='flex flex-col text-neutral-content text-lg font-bold border-2 border-neutral-content p-8 rounded'>
                    <div className='flex-1'>
                        <canvas
                            ref={canref}
                            className='h-full w-full'
                            height={'500px'}
                            width={'500px'}>
                            An alternative text describing what your canvas
                            displays.
                        </canvas>
                    </div>
                    <button
                        className='btn btn-sm btn-primary'
                        onClick={() => handleGameStateChange(gameState)}>
                        {gameState}
                    </button>
                </div>
            </div>
        </main>
    );
}
export default App;
