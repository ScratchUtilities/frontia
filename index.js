// GET https://api.scratch.mit.edu/proxy/featured
(function sendAPIreq() {
  const url = "https://api.scratch.mit.edu/proxy/featured";
  const container = document.getElementById('result');
  fetch(url)
    .then(response => response.json())
    .then(function(data) {
        let projects = data;
        for(var project in projects){
            let ul = createNode('ul');
            let title = createNode('h3');
            title.innerHTML = project;
            append(container, title);
            append(container, ul);
            projects[project].map(function(data) {
              let li = createNode('li'),
                  img = createNode('img'),
                  span = createNode('span');
              img.src = 'https:' + data.thumbnail_url;
              span.innerHTML = `${data.title} by ${data.creator}`;
              append(li, img);
              append(li, span);
              append(ul, li);
            });
        }
        
    })
})();

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}