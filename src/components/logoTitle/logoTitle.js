import Component from '../component'

'use strict'
/**
* logoTitle Component
* @class logoTitle
* @extends {Component}
*/
class LogoTitle extends Component{

    /**
     * Creates an instance of logoTitle
     * 
     * @param {string} tag - The tag name to create element
     * @param {string} className - The class name to add
     * @throws {Error} - Incorrect type
     * @memberof logoTitle
     */
    
    constructor(tag, className, content) {
  
      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)
      if (typeof content !== 'string') throw TypeError(`${content} is not a string`)
     
      super(tag, className)

      this.content = content

      // this.element.innerText = this.content
      this.element.appendChild(document.createTextNode(this.content))
    }
  }
  
  export default LogoTitle