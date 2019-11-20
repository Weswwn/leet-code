const task1 = function(cb) {
  setTimeout(function(){
    cb('one');
  }, 200);
};

const task2 = function(cb) {
  setTimeout(function(){
    cb('two');
  }, 100);
}; 

// Use callbacks
const callbackMap = (arr, cb) => {
  let array = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i]((input) => {
      count++;
      array[i] = input;
      if (count === arr.length) {
        cb(array);
      }
    })
  }
}

const callbackPromises = (arr, cb) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let promise = new Promise((resolve, reject) => {
      arr[i]((input) => {
        resolve(input);
      })
    })
    console.log(promise);
    array.push(promise);
  }
  Promise.all(array)
    .then(values => {
      cb(values);
    }) 
}

// const callbackPromises = (arr, cb) => {
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     array = arr.map(task => {
//       let promise = new Promise((resolve, reject) => {
//         task(element => {
//           resolve(element);
//         })
//       })
//       return promise;
//     })
//     Promise.all(array)
//       .then(values => {
//         cb(values);
//       })
//   }
// }

const asyncMap = async (arr, cb) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array = arr.map(task => new Promise(task));
  }
  let result = await Promise.all(array);
  cb(result);
}

callbackMap([task1, task2], (x) => console.log(x)); // ['one', 'two']
// console.log(callbackPromises([task1, task2], (x) => console.log(x)));
// asyncMap([task1, task2], (x) => console.log(x));