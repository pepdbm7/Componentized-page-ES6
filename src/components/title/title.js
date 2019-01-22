import Component from '../component'

'use strict'
/**
* Title Component
* @class Title
* @extends {Component}
*/
class Title extends Component{

    /**
     * Creates an instance of Title
     * 
     * @param {string} tag - The tag name to create element
     * @param {string} className - The class name to add
     * @param {string} innerText - The text the element will contain
     * @throws {Error} - Incorrect type
     * @memberof Title
     */
    
    constructor(tag, className, content) {
  
      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)
      if (typeof content !== 'string') throw TypeError(`${content} is not a string`)
     
      super(tag, className)

      this.content = content

      this.element.appendChild(document.createTextNode(content))
      
    }
  }
  
  export default Title
  