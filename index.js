// GET https://api.scratch.mit.edu/proxy/featured
(function sendAPIreq() {
  const url = "https://api.scratch.mit.edu/proxy/featured";
  const container = document.getElementById("result");
  fetch(url)
    .then(response => response.json())
    .then(function(data) {
      let projects = data;
      for (var project in projects) {
        let section = createNode("div");
        section.className = "section";
        append(container, section);
        let title = createNode("h3");
        title.className = "title";
        title.innerHTML = project.replace(/_/g, " ");
        append(section, title);
        let ul = createNode("ul");
        append(section, ul);
        projects[project].map(function(data) {
          let imageContainer = createNode("div");
          imageContainer.className = "imageContainer";
          let li = createNode("li"),
            img = createNode("img"),
            description = createNode("div");
          img.className = "thumbnail";
          img.src = "https:" + data.thumbnail_url;
          description.className = "desc";
          description.innerHTML = `${data.title} by ${data.creator}`;
          append(imageContainer, img);
          append(imageContainer, description);
          append(li, imageContainer);
          append(ul, li);
        });
      }
    })
    .catch(function(error) {
      console.error(error);
    });
})();

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

