
// // -1
// function displayAllArticles() {
// 	db.find().then(data => {
// 		console.log(data);
// 	});
// }
// 			//displayAllArticles();



// function displayArticleByName(articleName) {
// 	db.findOne({ name: articleName }).then(data => {
// 		console.log(data);
// 	});

// }
// 			//displayArticleByName("Aovopro");


// // -3
// function displayArticleByID(articleId) {
// 	db.findById(articleId).then(data => {
// 		console.log(data);
// 	});
// };
// 		//displayArticleByID();

// // -4
// function updateArticlePrice(articleId, newPrice) {
// 	db.updateOne (
// 		{ _id : articleId},
// 		{price : newPrice}
// 		).then(() => {
// 			console.log(`Price updated for ${articleID}`);
// 		});
// 	}

// 		//updateArticlePrice()

// // -5
// function updateArticleStock(articleId, newStock) {
// 	db.updateOne( 
// 		{ _id : articleId},
// 		{stock: newStock}
// 		).then(data => {
// 			console.log(data)
// 		});
// }

// 		//updateOne();

// // -6
// function resetStocks() {
// 	db.updateMany ( 
// 		{ },
// 		{stock: 0}
// 	).then(() => {
// 		db.find().then(data => {
// 			console.log(data);
// 		});
// 	});
// }

