function customRender(reactElement, container) {
  /*
    const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

//   domElement.setAttribute("target", reactElement.props.target);
  
  for (const [key, value] of Object.entries(reactElement)) {
    if(value === Object){
        for (const [k ,v] of Object.entries(value)) {
            domElement.setAttribute(k, reactElement.props.k);
        }
    }
    }
    container.appendChild(domElement);
 */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement)
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
