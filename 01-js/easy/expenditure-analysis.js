/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let res = [];
  let maps = new Map();
  for (const transaction of transactions) {
    if (maps.has(transaction.category)) {
      maps.set(
        transaction.category,
        maps.get(transaction.category) + transaction.price
      );
    } else {
      maps.set(transaction.category, transaction.price);
    }
  }
  maps.forEach((totalSpent, category) => {
    res.push({ category: category, totalSpent: totalSpent });
  });

  return res;
}

module.exports = calculateTotalSpentByCategory;
