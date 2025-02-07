import 'cypress-file-upload';

describe('fileUploadDemo', function(){

    it('FileUploadTest1', function(){
        cy.visit ("https://fineuploader.com/demos.html")
        const image = 'QAonCloudLogo.png';
        cy.get("#fine-uploader-gallery > div > div.qq-upload-button-selector.qq-upload-button > input[type=file]")
        .attachFile(image)
    })

    it('FileUploadTest2', function(){
        cy.visit ("https://blueimp.github.io/jQuery-File-Upload/")
        cy.title().should('eq','jQuery File Upload Demo')
        const image = 'QAonCloudLogo.png';
        // add file
        cy.get("input[name='files[]']").and('be.enabled').attachFile(image)
        cy.get("canvas[width='80']").should('be.visible').should('have.css','aspect-ratio','auto 80 / 17') // check added image file 
        cy.get('.name').should('be.visible').should('have.text','QAonCloudLogo.png')  // name of the image and format
        cy.get('.size').should('be.visible').should('have.text','5.22 KB')  // size of the image
        // uploading
        cy.get("button[type='submit']").should('be.visible').and('be.enabled').click()
        cy.get("img[src='https://jquery-file-upload.appspot.com/image%2Fpng/-3404258699063025166/QAonCloudLogo.png.80x80.png']").should('have.css','color','rgb(51, 122, 183)') // check added file 
        cy.get("p[class='name'] a[title='QAonCloudLogo.png']").should('be.visible').should('have.text','QAonCloudLogo.png')  // name of the image and format
        cy.get('.size').should('be.visible').should('have.text','5.22 KB')  // size of the image
        //delete the file
       cy.get(".btn.btn-danger.delete[data-type='DELETE']").click()
    })

    it('FileUploadTest3', function(){  // multiple image file uploading and check
        cy.visit ("https://blueimp.github.io/jQuery-File-Upload/")
        const image = 'QAonCloudLogo.png';
        const image2 = 'Goku.jpg';     
        cy.get("input[name='files[]']").should('be.enabled').attachFile(image)
        cy.get("input[name='files[]']").attachFile(image2)
        cy.get('.files>tr>td>span>canvas').should('have.length','2')
        cy.get('.files>tr>td>p.name').contains('Goku.jpg')
        cy.get('.files>tr>td>p.name').contains('QAonCloudLogo.png')
        cy.get('.files> tr> td>button:nth-child(3)').click
 })
})