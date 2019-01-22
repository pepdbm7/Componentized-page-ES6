import Component from '../component'

'use strict'
/**
* PostIcon Component
* @class PostIcon
* @extends {Component}
*/
class PostIcon extends Component{

    /**
     * Creates an instance of PostIcon
     * 
     * @param {string} tag - The tag name to create element
     * @param {array} className - The classes name to add
     * @throws {Error} - Incorrect type
     * @memberof PostIcon
     */
    
    constructor(tag, className) {
  
      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
      if (!Array.isArray(className)) throw TypeError(`${className} is not an array`)
     
      super(tag, className)
    }
  }
  
  export default PostIcon
  