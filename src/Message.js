import React,{Component} from 'react';
import './App.css';

export default class Message extends Component {
	constructor(props){
		super(props);
		this.state={
			pops:true,
			
		}
		this.tryagain = this.tryagain.bind(this);
		}
	tryagain(){
		this.setState({pops:false});
		this.props.disp(1)
	}
	render(){
		let{message} = this.props;
		if(this.props.lucky <= 4){
			 message = "BAD LUCK";
		}
		else if(this.props.lucky >= 5 && this.props.lucky <= 7){
			 message = "GOOD LUCK";

		}
		else {
			 message = "EXCELLENT LUCK";
		}
		return (this.state.pops ?
				<div className ="popup" 
				>
					<p>{message}</p>
					{message==="BAD LUCK" ? <span role="img" aria-labelledby="smile1">&#128532;</span>: message==="GOOD LUCK" ? <p><span role="img" aria-labelledby="smile">&#128077;</span></p> : <span role="img" aria-labelledby="smile2">&#128526;</span>} <br />
					
					<button className="place_d" style={{backgroundColor:"red",opacity:0.8,borderColor:"black"}} onClick={this.tryagain} >Try Again</button>
				</div> : null
			);
	}
}