describe ('QA test project - web automation ', function () {
    it ('Fill and post form according to instructions', function () {

        // url and other test informations are defined externally - by default on cypress.json
        const creatorEmail = Cypress.config('creatorEmail')
        const myName = Cypress.config('myName')
        
        cy.visit('/public/form/6qhKljB1')

        // typing name previously loaded
        cy.get('input[name="customFields.your_name"]').type(myName)
        cy.get('textarea[name="customFields.why_do_you_want_to_work_at_pipefy"]').type('"People first", people there and new challenges motivates to work hard!')

        // selecting B option by label (not always recommended)
        cy.get('label[for="publicForm_customFields.check_b_option_B"]').click()

        // selecting any user (only existent user)
        cy.get('a[name="customFields.select_any_user"]').click()
        cy.get('input[placeholder="Search users"]')
        cy.get('div[class="pp-item-list"]')
        cy.contains('Luiz Servando Rodrigues Junior').click()
        // just clicking off previous box
        cy.contains('*Select any user').click()
        

        cy.get('i.pp-ico-calendar').click()

        // get time right after form load, using required format on form
        //      and asserting that current date is set (not applying current time assertion)
        const nowDate = Cypress.moment().format('L')
        cy.get('input[id="date-time-select-date"]').should('have.value',nowDate)
        cy.get('button[title="Save"]').click()

        // selecting B option
        cy.get('select[name="customFields.select_option_b"]').select('B')

        // informing current time, reusing previous definition
        const nowTime = Cypress.moment().format('hh:mm a')
        cy.get('input[name="customFields.what_time_is_it_now"]').type(nowTime)
        
        // adding file from default directory ( cypress/fixtures/ ) using drag and drop
        // attach file operation requires plugin related import (see README)
        const fileToAttach = 'cypress001.jpg';
        cy.get('div[id="dropzone-fake-pipe-field-publicForm-customFields_attach_a_png_img_to_the_form-input"]').attachFile(fileToAttach, { subjectType: 'drag-n-drop' });

        // selecting Spanish code and informing any number 
        cy.get('div[class="selected-flag"]').click()
        cy.get('li[data-dial-code="34"]').click({force:true})
        cy.get('input[name="customFields.place_a_phone_number_from_spain_country"]').type('609 901 489')

        // initial submit
        cy.get('button[data-pp-button="submit-fields"]').click()
    
        // informing creator's email and making final submit
        cy.get('input[data-pp-input="creator-email-field"]').type(creatorEmail)
        cy.get('button[data-pp-button="collect-creator-email"]').click()

        // asserting form submission was successfull
        cy.get('.pp-new-public-form-pipefy-text').should('contain', 'Your request was submitted. To track its status, access the link we sent to ' + creatorEmail)
        
    })
})