import { Component, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';


// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }


const calcValue = () => {
    console.log('number');
    return Math.random() * (50 - 1) + 1;
}

const Slider = (props) => {
    const [slide, setSlide] = useState(calcValue);
    const [autoplay, setAutoplay] = useState(false);


    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay)
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br /> {autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


function App() {
    return (
        <Slider />
    );
}

export default App;







const App = (props) => {
    const [counter, setCounter] = React.useState(props.counter);

    incCounter = () => {
        setCounter(state => counter + 1)
    }

    decCounter = () => {
        this.setState(state => ({
            counter: state.counter - 1
        }))
    }

    rndCounter = () => {
        this.setState(state => ({
            counter: +((Math.random() * (50 - -50 + 1)) + -50).toFixed(0)
        }))
    }

    resetCounter = () => {
        this.setState(state => ({
            counter: this.props.counter
        }))
    }
    // Используйте только стрелочную форму методов
    // Почему? Подробный ответ будет в следующем уроке

    render() {
        const { counter } = this.state;

        return (
            <div class="app">
                <div class="counter">{counter}</div>
                <div class="controls">
                    <button onClick={this.incCounter}>INC</button>
                    <button onClick={this.decCounter}>DEC</button>
                    <button onClick={this.rndCounter}>RND</button>
                    <button onClick={this.resetCounter}>RESET</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App counter={10} />, document.getElementById('app'));

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов