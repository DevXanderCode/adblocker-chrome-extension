const rules: {
  [url: string]: () => void;
} = {
  "https://www.nytimes.com/section/technology": filterNYTechnology2,
};

function filterNYTechnology() {
  const app = document.querySelector("#site-content");
  const wrapper = document.querySelector("top-wrapper");
  app.removeChild(wrapper);
}

function filterNYTechnology2() {
  const divs = document.getElementsByTagName("div");
  for (const div of divs) {
    if (div.className.indexOf("ad") != -1) {
      div.style.display = "none";
    }
  }
}

if (document.URL in rules) {
  console.log("document url", document.URL);
  rules[document.URL]();
}
