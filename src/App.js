import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //Part Start
    // var person = {
    //   name:"Dr. Mahfuj",
    //   job: "singer"
    // }

    // var person2 = {
    //   name:"Eva rahman",
    //   job: "singer"
    // }

    // var style={
    //   color:'red',
    //   backgroundColor:'yellow',
    //   padding:'20px'
    // }
  //PART END


  const nayoks = ['anwar', 'jafor', 'Alomgir']
  const products = [{name:'Photoshop', price:'$90.99'}, 
                     {name: 'Illustrator', price:'$60'},
                    {name:'PDF Reader', price:'$30'}]

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done<code> src/App.js</code> and save to reload.
        </p>
        <h1 style={style}>{person.name + " " + person.job}</h1>
        <h2 style={{backgroundColor:'cyan', padding:'20px' }}>{person2.name + " " + person2.job}</h2>
        <p>My first react paragraph</p> */}

        <p>I am a react Person</p>

       
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {/* Or aitar bodli agerta  */}
           <li>{nayoks[0]}</li>
           <li>{nayoks[1]}</li>
           <li>{nayoks[2]}</li>
           {/* ---------- */}
          {
           products.map(product => <li>{product.name}</li>)
          }
        </ul>
       
        <Person name={nayoks[1]} subname="khan"></Person>
        <Person name="Sakib"  subname="molla"></Person>




        {
          products.map(product => <Product product={product}></Product>)
        }
        {/* <Product name={products[0].name } price={products[0].price}></Product> */}
        <Product product={products[1]}></Product>


        <Counter></Counter>

        <Users></Users>
      </header>
    </div>
  );
}



function Person(props){
  const personStyle = {
    border:'2px solid red',
    margin:'2px'
  }
  return(
    // <div style={{border:'2px solid red',margin:'2px'}}>
    //    <h1>Name: Sakib Khan</h1>
    //    <h2>Name: Rahim Khan</h2>
    // </div> or,

    <div style={personStyle}>
        <h1>Name: {props.name}</h1>
        <h2>subName: {props.subname}</h2>
    </div>
  )
}




function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    color:'black'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}





function Counter(){
  const [count, setCount] = useState(0);
  
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={ () => setCount(count + 1 )}>Increase</button>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
    </div>
  )
}


function Users(){
  const[users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
