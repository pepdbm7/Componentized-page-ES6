import Component from '../component'
import PostIcon from '../postIcon/postIcon'
import PostTitle from '../postTitle/postTitle'
import PostParagraphs from '../postParagraph/postParagraph'
import PostLink from '../postLink/postLink'

'use strict'
/**
* Post Component
* @class Post
* @extends {Component}
*/
class Post extends Component{

    /**
     * Creates an instance of Post
     * 
     * @param {string} tag - The tag name to create element
     * @param {string} className - The class name to add
     * @throws {Error} - Incorrect type
     * @memberof Post
     */
    
    constructor(tag, className, parameters) {
  
      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)
      if (typeof parameters !== 'object') throw TypeError(`${parameters} is not an array`)
     
      super(tag, className)


      const [ postIcons, postTitles, postParagraphs, postLinks ] = parameters


      const icon = new PostIcon('i', postIcons)  //copy all classes of the array
      const title = new PostTitle('h2', 'post__title', postTitles)
      const paragraph = new PostParagraphs('p', 'post__text', postParagraphs)
      const link = new PostLink('a', 'post__link', postLinks) 


      this.element.appendChild(icon.element)
      this.element.appendChild(title.element)
      this.element.appendChild(paragraph.element)
      this.element.appendChild(link.element)

    }
  }
  
  export default Post