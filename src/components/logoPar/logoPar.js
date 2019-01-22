import Component from '../component'

'use strict'
/**
* logoParagraph Component
* @class logoParagraph
* @extends {Component}
*/
class LogoParagraph extends Component{

    /**
     * Creates an instance of logoParagraph
     * 
     * @param {string} tag - The tag name to create element
     * @param {string} className - The class name to add
     * @throws {Error} - Incorrect type
     * @memberof logoParagraph
     */
    
    constructor(tag, className, content) {
  
      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)
      if (typeof content !== 'string') throw TypeError(`${content} is not a string`)
     
      super(tag, className)

      this.content = content

      this.element.innerText = this.content
      // this.element.appendChild(document.createTextNode(this.text))
    }
  }
  
  export default LogoParagraph