``` 
cd api/
npm run start
```

call to graphql with skus arr

https://localhost:9001/graphiql

example of how to do this:

function getDataWithKey() {

	const sku = someSku
	const data = encodeURIComponent(`{
			productBySKU(sku: "${sku}") {
            name
		    price
		    description
		    sku
		    url_key
				image_url
				images_url
		  }
		}`)

	return new Promise(function(resolve, reject) {
		axios.get(`https://localhost:9001/graphiql?query=${data}`).then(function(response){
			resolve(response.data ? response.data : {});
		});
	});
}