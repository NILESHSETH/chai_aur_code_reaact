function customrender(reactelement,container){
    // const domelement = document.createElement(reactelement.type)
    // domelement.innerHTML = reactelement.Children
    // domelement.setAttribute('href',reactelement.props.herf)
    // domelement.setAttribute('target',reactelement.props.target)
    // container.appendChild(domelement)
    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.Children

    for(const prop in reactelement.props){
    if(prop=== 'children') continue;
    domelement.setAttribute(prop,reactelement.props[prop])
    }
    container.appendChild(domelement)
}


const reactelement = {
    type: 'a',
    props:{
        herf: 'https://google.com',
        target: '_blank'
    },
    Children:'baby click here to open google not me'
}

const maincontainer = document.querySelector('#root')
customrender(reactelement,maincontainer)