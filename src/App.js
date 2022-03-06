import React,{useState,useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TableComponent from './components/TableComponent'
import CarouselComponent from './components/CarouselComponent';
import {Container,Button, ProgressBar } from 'react-bootstrap'

function App() {
  const [show,setShow]=useState(true)//true is for show default value
  const [counter,setCounter]=useState(0)
  const[show1,setShow1]=useState(false)
  //const [show1,setShow1]=useState(false)
  //useState is just 

  //this.state={
  //  show:true
  //}
//const arr=[2,3]
//const []


//Replicating componentDidMount using useEffect hook
useEffect(()=>{
  console.log('Component Mounted!')
},[])

//Replicating componentDidMount using useEffect hook
useEffect(()=>{
  console.log('Counter and state was updated')
},[counter,show])
//what i will pass [counter,show](dipendency array) if these any one will update then useEffect will run



//Replicating componentWillMount using useEffect hook



  return (
    <div className="App">
      <Container>
      {show && <TableComponent />}
        <Button variant='dark' onClick={()=>setShow(!show)}>{show?'Hide':'Show'}</Button><hr/>
       <ProgressBar  now={10*counter}/><hr/>
       <Button variant='dark' onClick={()=>setCounter(counter-1)} >Decrement</Button>
        <Button variant='dark' onClick={()=>setCounter(counter+1)} >Increment</Button><br></br><br></br>
       {show1&&<CarouselComponent/> } 
       <Button variant='danger' onClick={()=>setShow1(!show1)}>GET CAROUSEL</Button>
      </Container>
    </div>
  );
}

export default App;
