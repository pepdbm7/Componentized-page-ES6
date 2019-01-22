import Component from '../component'

'use strict'
/**
* imgLogo Component
* @class imgLogo
* @extends {Component}
*/
class ImgLogo extends Component{

    /**
     * Creates an instance of imgLogo
     * 
     * @param {string} tag - The tag name to create element
     * @param {string} className - The class name to add
     * @throws {Error} - Incorrect type
     * @memberof imgLogo
     */
    
    constructor(tag, className, srcImgLogo) {
  
      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)
      if (typeof srcImgLogo !== 'string') throw TypeError(`${srcImgLogo} is not a string`)
     
      super(tag, className)

      this.src = srcImgLogo

      this.element.src = this.src
      
    }
  }
  
  export default ImgLogo
  