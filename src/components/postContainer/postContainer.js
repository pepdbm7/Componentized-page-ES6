import Component from '../component'
import Post from '../post/post'

'use strict'
/**
* PostContainer Component
* @class PostContainer
* @extends {Component}
*/
class PostContainer extends Component{

    /**
     * Creates an instance of PostContainer
     * 
     * @param {string} tag - The tag name to create element
     * @param {string} className - The class name to add
     * @throws {Error} - Incorrect type
     * @memberof PostContainer
     */
    
    constructor(tag, className, parameters) {
  
        if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
        if (typeof className !== 'string') throw TypeError(`${className} is not a string`)
        if (!(parameters instanceof Object)) throw TypeError(`${parameters} is not a object`)

        super(tag, className)

        const { postIcons, postTitles, postParagraphs, postLinks } = parameters

        const that = this

        this.posts = (() => {
            postIcons.forEach((icon, index) => {
                let post = new Post('div', 'singlePost', [ icon, postTitles[index], postParagraphs[index], postLinks ])
                that.element.appendChild(post.element)
            })})()

    } //end of constructor
  } //end of class
  
  export default PostContainer