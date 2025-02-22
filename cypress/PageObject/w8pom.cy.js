class Formsubmition
{
visit()
{
    cy.visit('https://mytestingthoughts.com/Sample/home.html')
}

fillFirstname(value)
{
const field = cy.get("input[placeholder='First Name']")
field.clear()
field.type('qa')
return this
}

fillLastname(value)
{
const field = cy.get("input[placeholder='Last Name']")
field.clear()
field.type('test')
return this
}

fillGender(value)
{
const field = cy.get("#inlineRadioMale")
field.check()
return this
}

fillHobbies(value)
{
const field = cy.xpath("//option[normalize-space()='Singing']")
field.click()
return this
}

fillDepartment(value)
{
const field = cy.xpath("//select[@name='department']")
field.select('MPDC')
return this
}


fillUsername(value)
{
  const field = cy.get("input[placeholder='Username']")
  field.clear()
  field.type('124214')
  return this
}

fillPassword(value)
{
  const field = cy.get("input[placeholder='Password']")
  field.clear()
  field.type('test213')
  return this
}

fillConfirmPassword(value)
{
  const field = cy.get("input[placeholder='Confirm Password']")
  field.clear()
  field.type('test213')
  return this
}

fillEmail(value)
{
  const field = cy.get("input[placeholder='E-Mail Address']")
  field.clear()
  field.type('test@gmail.com')
  return this
}

fillPhone(value)
{
  const field = cy.get("input[placeholder='(639)']")
  field.clear()
  field.type('(639)1235647')
  return this
}

fillAddInfo(value)
{
  const field = cy.get("#exampleFormControlTextarea1")
  field.clear()
  field.type('Nill')
  return this
}

Submit()
{
    const button = cy.get("button[type='submit']")
    button.click();
}

Successvalidation()
{
    const button = cy.get('#success_message').contains('Success')
}
   
}

export default Formsubmition