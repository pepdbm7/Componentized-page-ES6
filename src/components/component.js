/**
* Model class of component
*
* @class Component
*/
class Component{

    /**
    * Creates an instance of Component
    * @param {string} tag - The tag name to create element
    * @param {string} className - The class name to add to the element 
    * @throws {Error} - validation: check that tag and className must be string 
    * @memberof Component
    */
    constructor(tag, className) {

        if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
        if (typeof className !== 'string' && !(Array.isArray(className))) throw TypeError(`${className} is not a string or an array`)

        this.element = document.createElement(tag)

        //to add a single class:
        if (typeof className == 'string') {
            this.element.classList.add(className)

        //to add multiple classes:
        } else if (Array.isArray(className)) {
            this.element.classList.add(...className)
        }
    }

}

  export default Component