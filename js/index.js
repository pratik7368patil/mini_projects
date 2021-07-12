let PROJECT_DATA = [
  {
    id: 1,
    projectName: "Gess The Number!",
    projectUrl: "./src/guess_the_number/index.html",
  },
];

function getDomEle() {
  return {
    mainDiv: document.querySelector(".project-links"),
  };
}

const domNodes = getDomEle();

function createLink(data) {
  let a = document.createElement("a");
  a.innerHTML = data.projectName;
  a.href = data.projectUrl;
  return a;
}

function mapProjects() {
  let ol = document.createElement("ol");
  for (let i = 0; i < PROJECT_DATA.length; i++) {
    let project = PROJECT_DATA[i];
    ol.appendChild(createLink(project));
  }
  domNodes.mainDiv.appendChild(ol);
}
mapProjects();
