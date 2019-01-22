import Component from '../component'

'use strict'
/**
* PostLink Component
* @class PostLink
* @extends {Component}
*/
class PostLink extends Component{

    /**
     * Creates an instance of PostLink
     * 
     * @param {string} tag - The tag name to create element
     * @param {string} className - The class name to add
     * @throws {Error} - Incorrect type
     * @memberof PostLink
     */
    
    constructor(tag, className, text) {
  
      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)
      if (typeof text !== 'string') throw TypeError(`${text} is not a string`)
     
      super(tag, className)

      this.text = text

      this.element.innerText = this.text
      
    }
  }
  
  export default PostLink