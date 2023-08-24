import React from "react";
import './scss/app.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import pizzas from "./assets/pizzas.json"

function App() {
    fetch("https://64e6daa0b0fd9648b78ef766.mockapi.io/pizzas");
    // console.log(pizzas)
    return (
        <div className="wrapper">
            <Header title="Даня Pizza"/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {
                            pizzas.map(obj => (
                                <PizzaBlock key={obj.id}  {...obj}/>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
