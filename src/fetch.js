export const options = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': '73fc241cf3mshc69be0304e5b31ap191c92jsna03862dea3a8',
		'X-RapidAPI-Host': 'google-news.p.rapidapi.com'
	}
  };


export const fetchData = async(url, options) => {
    fetch(url, options)
	.then(response => response.json())
	.then(response => {return response})
	.catch(err => console.error(err));

    // const response = await fetch(url, options);
    // const data = await response.json();

    // return data;
}