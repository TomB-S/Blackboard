const db = require('./database/setup'); // Do not edit/remove this line

// 1- 
const displayAllArticles = () => {
	// console.log('okay it/s coming'); log initial 
	db.find().then(data => {
		console.log('articles all good',data); // log données
	})
	.catch(err => {
		console.error('error, try again', err) // log error 
	});
};

displayAllArticles();

// 2-
const displayArticleByName = (articleName) => {
	db.find({name: articleName})
	.then(data => {
		console.log('articles are charged', data)
		return data;
	})
	.catch(err => {
		console.error('not charged', err)
	});
};

displayArticleByName();

//3-
const displayArticleByID = (articleId) => {
	db.findById(articleId)
	.then(data => {
		console.log('okay',data)
	})
	.catch(err => {
		console.error('not charged', err)
	});
};

displayArticleByID();

// 4-
const updateArticlePrice = (articleId, newPrice) => {
	db.updateOne(
		{_id: articleId},
		{price: newPrice}
	).then(data =>{
		console.log('charged search', data ,`price updates for ${articleId}`)
	})
	.catch(err => {
		console.error('not working baby', err)
	});
 };

 updateArticlePrice();
 
 // 5-
 const updateArticleStock = (articleId, newStock) => {
	db.updateOne (
		{_id: articleId},
		{stock: newStock}
	).then(data =>{
		console.log('stock charging', data ,`stock updates for ${newStock}`)
	})
	.catch(err => {
		console.error('not working baby', err)
	});
 };
updateArticleStock();

//6- 
const resetStocks = () => {
	db.updateMany (
		{stock: 0}
	).then(data =>{
		console.log('stock reseted', data)
	})
	.catch(err => {
		console.error('stock not working baby', err)
	});
};

resetStocks();

// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
};