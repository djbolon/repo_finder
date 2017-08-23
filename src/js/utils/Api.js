var axios = require('axios');

const fetchPopularRepos = (language) => {
	var URI = window.encodeURI('https://api.github.com/search/repositories?q=language:'+language+'&sort=stars&order=desc');
	return axios.get(URI).then(function (response){
		return response.data.items;		
	});
}

// fetchPopularRepos('Java').then(function(res){
// 	console.log(res);
// })

export default fetchPopularRepos;

