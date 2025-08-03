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

    attributeChangedCallback(){};

}

class projectCard extends HTMLLIElement {
    constructor(){
        super();
    }
    connectedCallBack(){}
    disconnectedCallback(){}
    attributeChangedCallback(){}

}