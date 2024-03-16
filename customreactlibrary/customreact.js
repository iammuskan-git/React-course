function customRender(reactElement, customContainer){

    const domElement = document.createElement(reactElement.type);  //virtual DOM ma banexa
    domElement.innerHTML = reactElement.children;


    for(const prop in reactElement.props){    // object ma for in loop chalxa
        domElement.setAttribute(prop, reactElement.props[prop]);
    }


    customContainer.appendChild(domElement);

}


// function ma html pathauda under the hood react le yesto garxa tyo html lai
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'click me to go to google'
}

const customContainer = document.getElementById("root");

customRender(reactElement, customContainer);