import Component from '../component'
import LogoTitle from '../logoTitle/logoTitle'
import LogoParagraph from '../logoPar/logoPar'

'use strict'
/**
* logoText Component
* @class logoText
* @extends {Component}
*/
class LogoText extends Component{

    /**
     * Creates an instance of logoText
     * 
     * @param {string} tag - The tag name to create element
     * @param {string} className - The class name to add
     * @throws {Error} - Incorrect type
     * @memberof logoText
     */
    
    constructor(tag, className, parameters) {
  
      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)
      if (!(parameters instanceof Object)) throw TypeError(`${parameters} is not a object`)
     
      super(tag, className)

      const [ logoTitle, logoParagraph ] = parameters
      
      const title = new LogoTitle('h2', 'logo__title', logoTitle) 
      const paragraph = new LogoParagraph('p', 'logo__paragraph', logoParagraph)
      
      this.element.appendChild(title.element)
      this.element.appendChild(paragraph.element)
      
    }
  }
  
  export default LogoText
  