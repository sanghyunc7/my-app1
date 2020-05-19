import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './images/logo.jpg';


class Time extends React.Component {
    constructor(props) {
        super(props);
        let newTime = setInterval(() => this.date(), 1000); //update date every 1000 ms


        this.state = { //initial date
            time: Date(),
            nT: newTime,
            num: 0,
        }

    }
    date() {
        this.setState({
            time: Date(),
            num: this.state.num + 1,
        });

        //console.log("msg " + this.state.num);
    }


    render() {
        const time = this.state.time;
        const numbers = ["Services", "Projects", "About"];
        const listItems = numbers.map((number, i) => {
            return <li key={i}><a href="https://www.google.com/">{numbers[i]}</a></li>;
        });


        return (
            <div className="body">
                <header className="header">
                    <img className="logo" src={logo} alt="logo"></img>
                    <nav className="nav__links">{listItems}</nav>
                    <a className="cta" href="https://reactjs.org/docs/rendering-elements.html">
                        <button>Contact</button>
                    </a>
                </header>


                <div className="time">{time}</div>
                
            </div>
        );
    }

}












ReactDOM.render(
    <Time />,
    document.getElementById('root')
);
