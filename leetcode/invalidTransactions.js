/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
  const invalidTransactions = [];
  const transactionMap = {};

  transactions.forEach(transaction => {
    const transObj = parseTransaction(transaction);
    transObj.isValid = true;

    // Test if transaction amount is greater than 1000, add to map and push to invalid transactions
    if (transObj.amount > 1000) {
      transObj.isValid = false;
    }

    // Test if transaction occurs within 60 minutes of another transaction of same name in different city
    if (transactionMap[transObj.name]) {
      const namedTransactions = transactionMap[transObj.name];

      for (let i in namedTransactions) {
        if (
          Math.abs(namedTransactions[i].time - transObj.time) <= 60 &&
          namedTransactions[i].city != transObj.city
        ) {
          transObj.isValid = false;
          if (namedTransactions[i].isValid) {
            namedTransactions[i].isValid = false;
            invalidTransactions.push(
              stringifyTransaction(namedTransactions[i])
            );
          }
        }
      }
      transactionMap[transObj.name].push(transObj);
    } else {
      transactionMap[transObj.name] = [transObj];
    }

    if (!transObj.isValid) {
      invalidTransactions.push(stringifyTransaction(transObj));
    }
  });

  return invalidTransactions;
};

/**
 * @param {string} transaction
 * @return {object}
 */
var parseTransaction = function(transaction) {
  const transactionArr = transaction.split(",");
  const transObj = {};

  transObj.name = transactionArr[0];
  transObj.time = transactionArr[1];
  transObj.amount = transactionArr[2];
  transObj.city = transactionArr[3];

  return transObj;
};

/**
 * @param {object} transObj
 * @return {string}
 */
var stringifyTransaction = function(transObj) {
  const transactionArr = [
    transObj.name,
    transObj.time,
    transObj.amount,
    transObj.city
  ];

  return transactionArr.join(",");
};

//const testTransactions = ["alice,20,800,mtv", "bob,50,1200,mtv"];
//const testTransactions = ["alice,20,800,mtv", "alice,50,100,beijing"];
const testTransactions = [
  "bob,627,1973,amsterdam",
  "alex,387,885,bangkok",
  "alex,355,1029,barcelona",
  "alex,587,402,bangkok",
  "chalicefy,973,830,barcelona",
  "alex,932,86,bangkok",
  "bob,188,989,amsterdam"
];

console.log(invalidTransactions(testTransactions));
