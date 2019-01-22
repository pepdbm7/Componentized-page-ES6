import Component from '../component'

'use strict'
/**
* PostTitle Component
* @class PostTitle
* @extends {Component}
*/
class PostTitle extends Component{

    /**
     * Creates an instance of PostTitle
     * 
     * @param {string} tag - The tag name to create element
     * @param {string} className - The class name to add
     * @throws {Error} - Incorrect type
     * @memberof PostTitle
     */
    
    constructor(tag, className, content) {
  
      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)
      if (typeof content !== 'string') throw TypeError(`${content} is not a string`)
     
      super(tag, className)
  
      this.text = content

      this.element.innerText = this.text
      
    }
  }
  
  export default PostTitle
  