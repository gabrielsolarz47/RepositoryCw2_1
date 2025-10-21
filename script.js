(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
  const ol = document.createElement('ol');
  answer.appendChild(ol);

  example.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function() {
    let p = document.createElement('p');
    p.innerHTML = "Loading...";
    answer.appendChild(p);
    fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.forEach(element => {
          let li = document.createElement('li');
          li.innerHTML = element.title;
          ol.appendChild(li);
        })
      }
      )
  })

  cw2.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'GET' })
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
