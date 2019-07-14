/// <reference types="Cypress" />

context('Actions', () => {
  /*beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })*/

  // https://on.cypress.io/interacting-with-elements

  it('Consultar en hadoop', () => {
	/*cy.visit('https://demo.gethue.com/hue/');
	cy.get('#id_username').type("demo");
	cy.get('#id_password').type("demo");
	cy.get('.btn').click();
	cy.visit('https://demo.gethue.com/hue/editor/?type=hive');
	cy.wait(50000);
	
	cy.get('.ace-editor.single-snippet-editor.ace-editor-resizable.ace_editor.ui-droppable.ace-hue > .ace_text-input').type('SELECT * FROM xyz');
	//Click en ejecutar consulta
	cy.get(':nth-child(4) > .blue > .fa').click();
	//Esperar que se ejecute la consulta (debería ser espera hasta que )
	cy.wait(50000);
	//Descargar
	cy.get('.hover-dropdown > .inactive-action > .fa').click();
	cy.get(':nth-child(1) > .download').click();
	//Elemento que contiene los datos
	//cy.get('.table.table-condensed.resultTable.dt.table-huedatatable');*/
	
	cy.readFile('../../Downloads/query-hive-62225.csv').then((data) => {
		console.log(data.split('\n')[1000])
	})
	//Falta el nombre del archivo que es variable
	
  })
})


