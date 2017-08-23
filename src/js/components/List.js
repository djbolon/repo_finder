import React from 'react';
import fetchPopularRepos from '../utils/Api.js';

class Listrepo extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage : 'Javascript',
			repos: [],
			isActive : 0,
		}
		this.updateLanguage = this.updateLanguage.bind(this);
	    this.toggleClass = this.toggleClass.bind(this);
	}

	componentWillMount (){
	}

	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage);
	}

	updateLanguage(lang){
		const _ = this;
		this.setState({
			selectedLanguage: lang,
			repos: null
		});
		fetchPopularRepos(lang).then(function(repos){
			_.setState({
				repos : repos
			});
		});
	}

    toggleClass(selectLang) {
	   	this.setState({
	   		isActive : selectLang
	   	});
    };

	handleClick(selectLang, event){
    	this.toggleClass(selectLang);
    	var toki = event.currentTarget.textContent;
    	this.updateLanguage(toki);
    };
   
	render(){
		console.log(this.state.repos);
		var languages = ['Javascript', 'PHP', 'CSS', 'Python'];
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

		if(!(this.state.repos))  {
			return (
				<div>
			  		<ul className='main-navigation h-list list--none'>
			  			{list}
			  		</ul>
			  		<div class="loader">
						<span class="loader-block"></span>
						<span class="loader-block"></span>
						<span class="loader-block"></span>
						<span class="loader-block"></span>
						<span class="loader-block"></span>
						<span class="loader-block"></span>
						<span class="loader-block"></span>
						<span class="loader-block"></span>
						<span class="loader-block"></span>
					</div>
			    </div>	

		    )
		}



		return(
			<div>	
				<div>
			  		<ul className='main-navigation h-list list--none'>
			  			{list}
			  		</ul>
			    </div>	
			    <div className="container popular-repos">
			    	<div className='grid'>
						{this.state.repos.map((repo, index) => (
							<div key={index} className="grid-cell">
								<div className="heading-list">
									<a href={repo.clone_url} target="_blank">
										<span>#{index + 1}</span>
										<h3>{repo.name}</h3>
									</a>
								</div>
								<img src={repo.owner.avatar_url}/>
								<p>{repo.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}


}

export default Listrepo;
