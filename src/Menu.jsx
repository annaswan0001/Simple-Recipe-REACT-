import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/sketchy/bootstrap.css";

class Menu extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    const {title,recipes} = this.props;
    return (
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        <div className="recipes">
        {recipes.map((recipe, i) =>
                  <Recipe key={i} {...recipe} />
              )}
        </div>
      </article>
    );
  }
}

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    counter : 0
    }
  }
  
  counterLike = () => {
  this.setState(prevState => { 
    return {counter : prevState.counter + 1}
  })
  }
  
    
  render() {
    const {name,ingredients,steps} = this.props;
    const padding_Left = {
      paddingLeft: "30px"
    }
    return (
      <section id ={name.toLowerCase().replace(/ /g,"-")}>
        <h2>{name}</h2>
     
        <ul className="ingredients">
          {ingredients.map((item,i)=>(
            <li key={i}>
            {item.name}
            </li>
          ) )}
        </ul>
        <section className="instructions">
        <h5>Cooking Instruction</h5>
        <ul className="instructions">
          {steps.map((item,i)=>(
            <li key={i}>
            {item}
            </li>
          ) )}
        </ul>
        <button onClick = {this.counterLike}><img src="http://s1.iconbird.com/ico/2013/6/365/w256h2561372351008Gamehearts256.png" alt="" width="16px" /></button>
        <span>{this.state.counter}</span>  
        </section>
      </section>
      
    );
  }
}

export default Menu;
