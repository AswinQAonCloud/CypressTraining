
describe('FileDownloadTest',function(){

    it('FileDownloadDemo',function(){

 cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
 cy.downloadFile('https://desicrew.in/wp-content/uploads/2018/02/dark-desicrew.png','mydownloads','desicrew.png')
 cy.downloadFile('http://autopract.com/selenium/image.jpeg','mydownloads','fly.jpg')
 cy.downloadFile('https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg?w=2000','mydownloads', 'mob.jpg')

    })
})