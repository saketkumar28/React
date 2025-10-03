function customreactRender(el, b) {
  const domel = document.createElement(el.type);
  domel.innerHTML = el.children;
  for (const prop in el.props) {
    domel.setAttribute(prop, el.props[prop]);
  }
  b.appendChild(domel);
}

const customreactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me !",
};
const D = document.getElementById("root");
customreactRender(customreactElement, D);
