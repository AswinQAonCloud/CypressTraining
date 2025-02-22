import Formsubmition from "../PageObject/w8pom.cy"

describe('POM form submition',function(){

    it("Fill details",function(){
        const fs =new Formsubmition()
        fs.visit()
        fs.fillFirstname()
        fs.fillLastname()
        fs.fillGender()
        fs.fillHobbies()
        fs.fillDepartment()
        fs.fillUsername()
        fs.fillPassword()
        fs.fillConfirmPassword()
        fs.fillEmail()
        fs.fillPhone()
        fs.fillAddInfo()
        fs.Submit()
        fs.Successvalidation()
    })
    })