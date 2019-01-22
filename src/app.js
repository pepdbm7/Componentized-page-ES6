import Component from './components/component'
import HeaderContainer from './components/headerContainer/header'
import Title from './components/title/title'
import PostContainer from './components/postContainer/postContainer'
import parameters from './customizeContent/parameters'

import '../styles/main.scss'

'use strict'

/**
* App Component
* @class App
* @extends {Component}
*/
class App extends Component{

    /**
   * Creates an instance of App
   * 
   * @param {string} tag - The tag name to create element
   * @param {string} className - The class name to add
   * @throws {Error} - Incorrect type
   * @memberof App
   */  
    constructor(tag, className){
        if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
        if (typeof className !== 'string') throw TypeError(`${className} is not a string`)
        
        super(tag, className)

        const {srcImgLogo, logoTitle, logoParagraph, buttonText, mainTitle, postIcons, postTitles, postParagraphs, postLinks } = parameters

        const header = new HeaderContainer('div', 'header__container', { srcImgLogo, buttonText, logoTitle, logoParagraph })

        const title = new Title('h1', 'mainTitle', mainTitle)
        
        const postContainer = new PostContainer('div', 'post__container', { postIcons, postTitles, postParagraphs, postLinks })
    
        this.element.appendChild(header.element)
        this.element.appendChild(title.element)
        this.element.appendChild(postContainer.element)
    }
}

export default App


