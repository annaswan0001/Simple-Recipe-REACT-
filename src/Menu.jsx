import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/sketchy/bootstrap.css";
import CheckboxLabels from './CheckboxLabels.jsx';




const Menu = ({title,recipes}) => {
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

const Recipe = ({name,ingredients,steps}) => {
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
      <CheckboxLabels style={padding_Left}/>
      </section>
    </section>
    
  );
}





export default Menu;
