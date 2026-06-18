/*Project Container is a mostly empty UL extension designed to keep projectCard elements structured as list items */
class projectContainer extends HTMLUListElement {
    constructor(){
        super();
    }

    connectedCallBack(){
        console.log("A project container has been added to the page.")

    }

    disconnectedCallback(){
        console.log("A project container has been removed from the page")
    }

    attributeChangedCallback(){

    };

}

class projectCard extends HTMLElement {
    constructor(){
        super();
        const observedAttributes = ["title", "data-imgpaths", "data-link"];
    }

    style(){
        console.log('Styling...');
        const style = document.createElement(style);
        style.innerText = "border: 1px solid var(--nav-color, white); background-color: pink;"
        return style;         
    }
    connectedCallBack(){
        console.log("A project card has been added to the page.");
        this.setAttribute("role", "listitem");
        
        const shadow = this.attachShadow({ mode: "open" });
        const page = document.createElement(a);
        page.setAttribute(this.getAttribute("data-link") ?? "#"); 

        const title = document.createElement(h2);
        title.innerText = document.getAttribute("title") ?? "No title attribute"; 
        title.appendchild(page); 

        const picture = document.createElement(picture); 
        const src = document.createElement(source); 
   
        src.setAttribute("srcset", this.getAttribute("data-imgsrcs") ?? "images/form-demo.png"); 
        const img = document.createElement(img); 
        img.setAttribute("src", this.getAttribute("data-imgsrcs") ?? "images/form-demo.png")
        picture.appendChild(src);
        picture.appendChild(img); 

        shadow.appendChild(page);
        shadow.appendChild(title);
        shadow.appendChild(picture); 
        shadow.appenddChild(style); 

    }
    disconnectedCallback(){
        console.log("A project card has been removed from the page")
    }
    attributeChangedCallback(){
        console.log(this.attributes)
    }

}

// Create a registry to track registered elements
const registeredElements = new Map();
 
// Helper function to define and track elements
function defineCustomElement(tagName, constructor) {
  if (customElements.get(tagName)) {
    console.warn(`${tagName} is already registered.`);
    return;
  }
  
  customElements.define(tagName, constructor);
  registeredElements.set(tagName, constructor);
  
  console.log(`Registered: ${tagName}`);
}
 
defineCustomElement('project-container', projectContainer);
defineCustomElement('project-card', projectCard);
 
// Get all registered tag names
const elementTagNames = Array.from(registeredElements.keys());
console.log("Registered custom elements:", elementTagNames);
// Output: ["my-element", "fancy-paragraph"]


