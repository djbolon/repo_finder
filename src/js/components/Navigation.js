import React from 'react';
import {NavLink} from 'react-router-dom';


class Navigation extends React.Component{
	constructor(props) {
        super(props);
        this.state={
			isActive : 0,
			curLang : null
	    }
	    this.toggleClass = this.toggleClass.bind(this);
    };

	toggleClass(selectLang) {
	   	this.setState({
	   		isActive : selectLang
	   	});
    };

    componentDidMount(){
    	// console.log({this.state.curLang});
    }

    handleClick(selectLang, event){
    	this.toggleClass(selectLang);
    	this.handleSorting(event);
    };

	render() {  
		var languages = ['All', 'Javascript', 'PHP', 'CSS'];
		var list =  languages.map(function (item, i){
				        return (
				        	<li 
				        		key={i} 
				        		className={i == this.state.isActive ? 'active' : ''}
				        		onClick={this.handleClick.bind(this, i)}
			        		>
				        		{item}
			        		</li>
				        );
			      	}.bind(this));
		
	  	return (
		  	<div>
		  		<ul className='h-list list--none'>
		  			{list}
		  		</ul>
		    </div>
	 	);
	};

	
	
}


module.exports = Navigation;


