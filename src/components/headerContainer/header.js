import Component from '../component'
import ImgLogo from '../imgLogo/imgLogo'
import LogoText from '../logoText/logoText'
import Button from '../button/button'

'use strict'
/**
* HeaderContainer Component
* @class HeaderContainer
* @extends {Component}
*/
class HeaderContainer extends Component{

    /**
     * Creates an instance of HeaderContainer
     * 
     * @param {string} tag - The tag name to create element
     * @param {string} className - The class name to add
     * @throws {Error} - Incorrect type
     * @memberof HeaderContainer
     */
    
    constructor(tag, className, parameters) {
  
      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)
      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)
      if (!(parameters instanceof Object)) throw TypeError(`${parameters} is not a object`)
     
      super(tag, className)

      const { srcImgLogo, buttonText, logoTitle, logoParagraph } = parameters

      const image = new ImgLogo('img', 'header__imgLogo', srcImgLogo) 
      const logoText = new LogoText('div', 'logo__text', [ logoTitle, logoParagraph ])
      const btn = new Button('button', 'header__button', buttonText) 

      this.element.appendChild(image.element)
      this.element.appendChild(logoText.element)
      this.element.appendChild(btn.element)

    }
  }
  
  export default HeaderContainer
  