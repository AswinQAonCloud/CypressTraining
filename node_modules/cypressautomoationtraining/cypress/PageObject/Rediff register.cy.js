class Rediff{
    visit()
    {
        cy.visit('http://register.rediff.com/register/register.php?FormName=user_details')
    }
 
    name(value)
    {
        const element=cy.get('#tblcrtac > tbody > tr:nth-child(3) > td:nth-child(3) > input[type=text]')
        element.type(value)
        return this
    }
 
    rediffid(value)
    {
        const element=cy.get('#tblcrtac > tbody > tr:nth-child(7) > td:nth-child(3) > input[type=text]:nth-child(1)')
        element.type(value)
        return this
    }
 
    password(value)
    {
        const element=cy.get('#newpasswd')
        element.type(value)
        return this
    }
 
    repassword(value)
    {
        const element=cy.get('#newpasswd1')
        element.type(value)
        return this
    }
 
    alter(value)
    {
        const element=cy.get('#div_altemail > table > tbody > tr:nth-child(1) > td:nth-child(3) > input[type=text]')
        element.type(value)
        return this
    }
 
    mobno(value)
    {
        const element=cy.get('#mobno')
        element.type(value)
        return this
    }
 
    date(value)
    {
        const element=cy.get("#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(1)")
        element.select(value)
        return this
 
    }
 
    month(value)
    {
        const element=cy.get("#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)")
        element.select(value)
        return this
 
    }
 
    gender()
    {
        const element=cy.get("#tblcrtac > tbody > tr:nth-child(25) > td:nth-child(3) > input[type=radio]:nth-child(1)")
        element.click()
        return this
    }
 
    country(value)
    {
        const element=cy.get('#country')
        element.select(value)
        return this
    }
   
    city(value)
    {
    const element=cy.get('#div_city > table > tbody > tr:nth-child(1) > td:nth-child(3) > select')
    element.select(value)
    return this
    }
 
    year(value)
    {
        const element=cy.get("#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(3)")
        element.select(value)
        return this
    }
    captcha()
    {
        const element=cy.get('#tblcrtac > tbody > tr:nth-child(33) > td:nth-child(3) > input')
        element.click()
    }
    submit()
    {
        const button=cy.get('#Register')
        button.click()
    }
    checkbox()
    {
        const element=cy.get('input[type=checkbox]')
        element.click()
    }
   
    hint(value)
    {
        const element=cy.get('#div_hintQS > table > tbody > tr:nth-child(2) > td:nth-child(3) > select')
        element.select(value)
        return this
    }
 
    hintans(value)
    {
        const element=cy.get('#div_hintQS > table > tbody > tr:nth-child(4) > td:nth-child(3) > input[type=password]')
        element.type(value)
        return this
    }
 
    mname(value)
    {
        const element=cy.get('#div_hintQS > table > tbody > tr:nth-child(6) > td:nth-child(3) > input[type=text]')
        element.type(value)
        return this
    }
 
}
export default Rediff