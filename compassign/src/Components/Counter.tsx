import React, { Component } from 'react'

type counterProps={

}

type counterState={
    count: number
}

class Counter extends Component<counterProps,counterState> {
    constructor(props:counterProps) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
     
  
        this.setState(prevState => ({count:prevState.count+1}))
        
      }
      decrement(){
    
        this.setState((prevState, props) => ({count:prevState.count-1}))
        
      }

  render() {
    return (
      <div>
        <br></br>
        <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={()=>this.increment()}>Increment</button>
        <button onClick={()=>this.decrement()}>Decrement</button>
        </div>
      </div>
    )
  }
}

export default Counter
