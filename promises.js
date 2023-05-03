// with fetch :
const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // do something with the data
  })
  .catch(error => {
    console.error('Error:', error);
  }); 

// with Promise():
function getPlaceholderData() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

getPlaceholderData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  }); 
