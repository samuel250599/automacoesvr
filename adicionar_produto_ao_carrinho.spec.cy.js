describe('Testando a adição de produtos ao carrinho na loja VR', () => {
    it('Deve adicionar um produto ao carrinho com sucesso', () => {
      // Interceptar a solicitação para garantir que a página foi carregada
      cy.intercept('POST', 'https://r.clarity.ms/collect').as('paginaCarregada');
  
      // Acessar a home do portal web
      cy.visit('https://www.vr.com.br', { timeout: 120000 });
  
      // Esperar pelo botão "Compre online" e clicar nele
      cy.get('#buttonCompreOnline', { timeout: 10000 }).should('be.visible').click();
  
      // Esperar por um tempo fixo para permitir o redirecionamento
      cy.wait(15000);  // Aumentei o tempo para permitir o redirecionamento completo
  
      // Verificar se a URL inclui "loja.vr.com.br" ou capturar a nova URL correta
      cy.url().then((url) => {
        if (!url.includes('loja.vr.com.br')) {
          cy.visit('https://loja.vr.com.br', { timeout: 120000 });
        }
      });
  
      // Esperar pela solicitação que indica que a página foi carregada
      cy.wait('@paginaCarregada', { timeout: 120000 });
  
      // Esperar pelo modal e, se aparecer, clicar no botão de fechar
      cy.get('body').then(($body) => {
        if ($body.find('.modal-box__container .close-button').length > 0) {
          cy.get('.modal-box__container .close-button').should('be.visible').click();
        }
      });
  
      // Esperar pela opção "Cartões VR" e clicar no botão "Selecionar"
      cy.get('.shelf-product-container__title span', { timeout: 10000 }).should('contain', 'Cartões VR');
      cy.get('#btn-selecionar-modalidade-avulso', { timeout: 10000 }).should('be.visible').click();
  
      // Adicionar uma quantidade de 2 cartões do produto "Auto"
      cy.get('#produto-auto-quantidade', { timeout: 10000 }).should('be.visible').clear().type('2');
  
      // Digitar um valor de 20,00 crédito para o produto "Auto"
      cy.get('#produto-auto-valor', { timeout: 10000 }).should('be.visible').clear().type('20,00');
  
      // Clicar no botão "Adicionar ao carrinho"
      cy.get('#btn-adicionar-carrinho-auto', { timeout: 10000 }).should('be.visible').click();
  
      // Validar que o produto foi adicionado ao carrinho com sucesso
      cy.get('.product-in-cart-view__content', { timeout: 10000 }).should('be.visible').and('contain', 'Produto adicionado!');
      cy.get('.product-cart-preview-container__information').within(() => {
        cy.contains('Quantidades', { timeout: 10000 }).next().should('contain', '02');
        cy.contains('Valor por cartão', { timeout: 10000 }).next().should('contain', 'R$ 20,00');
      });
    });
  
    // Ignorar erros não capturados para não falhar o teste automaticamente
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  
