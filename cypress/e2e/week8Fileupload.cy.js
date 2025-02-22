/// <reference types="cypress" />
"experimentalSourceRewriting".true;
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});


describe("File Upload Test", function(data){
    it('Uploads a file using file selection', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
    
        // Attach file
        cy.get('input#file-upload').attachFile('QAonCloudLogo.png');
    
        // Click Upload button
        cy.get('input#file-submit').click();
    
        // Verify upload success message
        cy.get('#uploaded-files').should('contain', 'QAonCloudLogo.png');
      });
    
      it('Uploads a file by renaming it before upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
    
        // Attach file with rename option
        cy.get('input#file-upload').attachFile({ filePath: 'test.xlsx', fileName: 'renamedFile.xlsx' });
    
        // Click Upload button
        cy.get('input#file-submit').click();
    
        // Verify renamed file appears in uploaded list
        cy.get('#uploaded-files').should('contain', 'renamedFile.xlsx');
      });
    
      it('Uploads a file using drag and drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
    
        // Use drag-and-drop method
        cy.get('input#file-upload').attachFile('Goku.jpg', { subjectType: 'drag-n-drop' });
    
         // Click Upload button
         cy.get('input#file-submit').click();
    
    
         cy.get('#uploaded-files').should('contain', 'Goku.jpg');
      });

      it('Uploads multiple files', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        const imagefile = 'QAonCloudLogo.png';
        const imagefile1 = 'Goku.jpg'; 
        // Attach multiple files
        cy.get('input[type="file"]').attachFile([imagefile, imagefile1]);
    
        // Verify the uploaded file names appear
        cy.get('#fileList li').should('contain', imagefile);
        cy.get('#fileList li').should('contain', imagefile1);
      });

    });
