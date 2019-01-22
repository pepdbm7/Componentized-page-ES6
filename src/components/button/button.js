import Component from '../component'

'use strict'
/**
* button Component
* @class button
* @extends {Component}
*/
class Button extends Component{

    /**
     * Creates an instance of button
     * 
     * @param {string} tag - The tag name to create element
     * @param {string} className - The class name to add
     * @throws {Error} - Incorrect type
     * @memberof button
     */
    
    constructor(tag, className, text) {
  
      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)
      if (typeof text !== 'string') throw TypeError(`${text} is not a string`)
     
      super(tag, className)

      this.text = text

      this.element.appendChild(document.createTextNode(this.text))
      
    }
  }
  
  export default Button