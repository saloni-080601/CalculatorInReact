import React, { Component } from 'react'

class Calculator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            result:""
        }
    }
    clickHandler=(event)=>{
        this.setState({
            result:this.state.result+event.target.value
        })
    }
    Calculation=()=>{
        this.setState({
            result:eval(this.state.result)
        })
    }
    clickClear=()=>{
        this.setState({
            result:" "
        })
    }
    clickC=()=>{
        this.setState({
            result:this.state.result.slice(0,-1)
        })
    }
    render() {  
        return (
        <div className='calc'>
        <input type='text' placeholder='0' id='answer' value={this.state.result} />     
        <input type='button' value='9' className='button1' onClick={this.clickHandler}/>
        <input type='button' className='button1' value='8' onClick={this.clickHandler}/>
        <input type='button' className='button1' value='7' onClick={this.clickHandler}/>
        <input type='button' className='button1' value='-' onClick={this.clickHandler}/>
        <input type='button' className='button1' value='6' onClick={this.clickHandler}/>
        <input type='button' className='button1' value='5' onClick={this.clickHandler}/>
        <input type='button' className='button1' value='4' onClick={this.clickHandler}/>
        <input type='button' className='button1' value='+' onClick={this.clickHandler}/>

        <input type='button' className='button1' value='3' onClick={this.clickHandler}/>
        <input type='button' className='button1' value='2' onClick={this.clickHandler}/>
        <input type='button' className='button1' value='1' onClick={this.clickHandler}/>
        <input type='button'className='button1'  value='/' onClick={this.clickHandler}/>
        <input type='button' className='button1' value='*' onClick={this.clickHandler}/>

        <input type='button' className='button1' value='0' onClick={this.clickHandler}/>
        <input type='button' className='button1' value='.' onClick={this.clickHandler}/>
        <input type='button' className='button1' value='C' onClick={this.clickC}/>

        <input type='button' className='button2' value='clear' onClick={this.clickClear}/>
        <input type='button' className='button2' value='=' onClick={this.Calculation}/>
        </div>
        )
    }
}
export default Calculator
