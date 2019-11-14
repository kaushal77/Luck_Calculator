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
			 message = "Bad Luck";
		}
		else if(this.props.lucky >= 5 && this.props.lucky <= 7){
			 message = "Good Luck";

		}
		else {
			 message = "Excellent Luck";
		}
		return (this.state.pops ?
				<div className ="popup" 
				>
					<p>{message}</p>
					<p><span role="img">&#128077;</span></p>
					
					<button className="place_d" onClick={this.tryagain} >Try Again</button>
				</div> : null
			);
	}
}