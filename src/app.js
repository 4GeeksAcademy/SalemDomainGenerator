import "bootstrap";
import "./style.css";
window.onload = function () {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function generateDomain() {
    let domains = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          domains.push(pronoun[i] + adj[j] + noun[k] + ".com");
        }
      }
    }
    return domains;
  }
  function displayDomains() {
    const domains = generateDomain();
    const domainText = document.getElementById("domains");
    domainText.innerHTML = domains.join("<br>");
  }

  displayDomains();
};
