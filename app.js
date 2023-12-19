window.addEventListener("DOMContentLoaded", function () {
  var project = document.querySelector("#project-img");
  var next = this.document.querySelector("#next");

  next.addEventListener("click", handleClick);

  function handleClick(e) {
    project.src = nextProjectIndexURL();
    e.stopPropagation();
  }
  var currentProjectIndex = 0;

  function nextProjectIndexURL() {
    currentProjectIndex++;

    if (currentProjectIndex === projects.length) {
      currentProjectIndex = 0;
    }
    return projects[currentProjectIndex];
  }
});
