import App from './app'
import parameters from './customizeContent/parameters'


describe('app', () => {

    describe('initial', () => {
      let app

      const {srcImgLogo, logoTitle, logoParagraph, buttonText, mainTitle, postIcons, postTitles, postParagraphs, postLinks } = parameters
  
      beforeEach(() => {
        app = new App('main', 'mainContainer')
      })
  
      test('should be an instance of App', () => {
        expect(app).toBeInstanceOf(App)
      })

      test('should throw error when parameter "tag" is not a string', () =>{
        expect(() => new App( undefined, 'mainContainer')).toThrowError('undefined is not a string')
      })

      test('should throw error when parameter "className" is not a string', () =>{
        expect(() => new App( 'main', undefined)).toThrowError('undefined is not a string')
      })
  
      test('app.element should be of type HTMLElement', () => {
        expect(app.element).toBeDefined()
        expect(app.element).toBeInstanceOf(HTMLElement)
      })
  
      test('should the element contain the class name App', () => {
        expect(app.element.classList.contains('mainContainer')).toBeTruthy()
      })
  
      
      test('its element should have appended a header element', () => {
        const header = new HeaderContainer('div', 'header__container', { srcImgLogo, buttonText, logoTitle, logoParagraph })
    
        expect(header).toBeInstanceOf(HTMLElement)
        expect(header).toBeDefined()
        expect(header.element.localName).toBe('div')
        expect(header.classList.contains('header__container')).toBeTruthy()
      })

      test('its element should have appended a title element', () => {
        const title = new Title('h1', 'mainTitle', mainTitle)
  
        expect(title).toBeInstanceOf(HTMLElement)
        expect(title).toBeDefined()
        expect(title.element.localName).toBe('h1')
        expect(title.classList.contains('mainTitle')).toBeTruthy()
      })

      test('its element should have appended a postContainer element', () => {
        const postContainer = new PostContainer('div', 'post__container', { postIcons, postTitles, postParagraphs, postLinks })
        debugger
        expect(postContainer).toBeInstanceOf(HTMLElement)
        expect(postContainer).toBeDefined()
        expect(postContainer.element.localName).toBe('div')
        expect(postContainer.classList.contains('post__container')).toBeTruthy()
      })
    })
  })