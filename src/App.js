import React,{Component} from 'react';
import Message from './Message';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      number:1,
      min:1,
      max:99,
      display:false,
      lucky:0,
      count:0,
      item:0,
     show:false,
     isDisabled:false,
     unlucky:0
    }
    this.reveal = this.reveal.bind(this);
    
  }

  
  
  componentDidMount() {
   this.setState({ number: this.generateNumber(this.state.min, this.state.max)})
  }


   generateNumber = (min, max) => {
     return Math.floor(Math.random()*(max-min+1)+min)
  } 
  
  
  reveal(keep) {
    const open = this.state.display;
   
    const list=[1,2,3];
    const keys = Object.keys(list);
    const randomIndex = keys[Math.floor(Math.random() * keys.length)];
    
    if(this.state.count<=10){
      this.setState({ display:!open, item : list[randomIndex], isDisabled:true});
      
      
      if(keep === this.state.item ){
        this.setState({lucky: this.state.lucky + 1})
      }

    
    
  }
  else {
    
    this.setState({ count:0,lucky:0})
  }
}
  load = (value)=>{
    if(value===1){
    this.setState({count:0,lucky:0,display:false,unlucky:0})
  }
  }
  
  
  reset=()=>{
    this.setState({ number: this.generateNumber(this.state.min, this.state.max),display:false,count :this.state.count + 1 ,unlucky:this.state.count - this.state.lucky,isDisabled:false})
  }
  render(){
    let {ans2,ans1,ans3,ans4,dis} = this.props;
    if(this.state.display){
       ans1 = this.generateNumber(this.state.min, this.state.max);
       if(ans1 === this.state.number){
        ans1 = this.generateNumber(this.state.min, this.state.max);
       }
       ans2 = this.state.number;
       
       ans3 = this.generateNumber(this.state.min, this.state.max);
       if(ans3 === this.state.number){
        ans3 = this.generateNumber(this.state.min, this.state.max);
       }
       ans4 = this.generateNumber(this.state.min, this.state.max);
       if(ans4 === this.state.number){
        ans4 = this.generateNumber(this.state.min, this.state.max);
       }
      
    }
    else {
       ans2 = '?';
       ans1 = '?';
       ans3 = '?';
       ans4 = '?';
      
    }
   dis = true;

  return (
    <div className="App">
    <header id="grid" className="App-header blurred-box">
    <h1 data-text="LUCK CALCULATOR">
       LUCKALCULATOR
    </h1>
    <h8 style={{fontSize:15,color:"black",fontWeight:"bold"}}>Note: After selecting the box click on NEXT button for another attempt.</h8><br/>
    <div className="outer_box" >
      <span className="a1">
          <p className="place"> Total Attempts: {this.state.count}/10</p>
          <p className="place">Lucky: {this.state.lucky}</p>
          <p className="place">Unlucky: {this.state.unlucky }</p>
      </span>
      <center>
      <p style={{fontSize:50,color:"wheat"}}>{this.state.number}</p></center>
      <span className="a1">
          <button id="1" className="place_d" style={{backgroundColor: "transparent"}} onClick={()=>this.reveal(1)} {...this.state.isDisabled && {disabled:true}}>
          {this.state.item === 1 ? ans2 : ans4}<
          /button>
          <button id="2" className="place_d" style={{backgroundColor: "transparent"}} onClick={()=>this.reveal(2)} {...this.state.isDisabled && {disabled:true}}>
          {this.state.item === 2 ? ans2 : ans1}
          </button>
          <button id="3" className="place_d" style={{backgroundColor: "transparent"}} onClick={()=>this.reveal(3)} {...this.state.isDisabled && {disabled:true}}>
          {this.state.item === 3 ? ans2 : ans3}
          </button>
      </span>
      {this.state.count === 11 && 
     (<div className="" > <Message lucky = {this.state.lucky} disp = {this.load} /> </div>)}
    </div>
    
    <button className="place_d" 
    style={{backgroundColor:"transparent",borderColor:"red", marginTop:"2%", 
    boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"}} onClick={()=>this.reset()}>
    Next
    </button>
    
    
    </header>

    </div>
    );
  }
}

  export default App;
