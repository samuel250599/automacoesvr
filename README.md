# automacoesvr
Automação de Testes com Cypress e Cucumber
Este repositório contém exemplos de automação de testes utilizando Cypress para frontend e Cucumber + Ruby + HTTParty para backend.

Estrutura do Projeto

automacoesvr/
├── features/
│   ├── vr_api.feature
│   ├── remove_text.feature
│   ├── step_definitions/
│   │   ├── vr_api_steps.rb
│   │   └── remove_text_steps.rb
├── Gemfile
├── Gemfile.lock
├── cucumber.yml
├── README.md
└── report.html



Testes de Frontend (Cypress)
Descrição
O teste automatiza a adição de um produto ao carrinho em uma loja virtual.

Passos:
Acessa a home do portal web (https://www.vr.com.br).
Clica no botão "Compre online".
Seleciona a opção "Cartões VR".
Adiciona uma quantidade 2 de cartões do produto "Auto".
Digita um valor de crédito 20,00 para o produto "Auto".
Clica no botão "Adicionar ao carrinho".
Valida que o produto foi adicionado ao carrinho com sucesso.
Execução
Instalar as dependências:

npm install
Executar o Cypress:

npx cypress open

Detalhes importantes:
Interceptar a solicitação: Utilizamos cy.intercept para interceptar a solicitação POST para https://r.clarity.ms/collect.
Esperar pela solicitação interceptada: Utilizamos cy.wait('@paginaCarregada', { timeout: 120000 }) para garantir que a página foi carregada completamente antes de prosseguir com o teste.
Aumento do tempo limite de carregamento da página: Aumentei pageLoadTimeout para 120 segundos (120000 ms) no arquivo de configuração do Cypress.
Tempo fixo de espera: Adicionei um cy.wait(15000) para esperar 15 segundos após clicar no botão "Compre online", permitindo o redirecionamento completo.
Verificação e redirecionamento manual: Adicionei uma verificação para garantir que a URL correta seja visitada se o redirecionamento não ocorrer automaticamente.
Esperar pela URL da loja: Adicionei uma verificação para garantir que a URL inclui loja.vr.com.br após clicar em "Compre online".
Esperar pelo elemento "Cartões VR": Continuamos a usar seletores simplificados e garantimos que estamos esperando o tempo suficiente para que a página carregue.
Simplificação de seletores: Simplifiquei o seletor para a opção "Cartões VR" para .shelf-product-container__title span e o botão "Selecionar" para #btn-selecionar-modalidade-avulso.
Esperas explícitas: Continuei a garantir que cada elemento esteja visível antes de interagir com ele.





Testes de Backend (Cucumber + Ruby + HTTParty)
Descrição
Teste de API: Valida a presença da chave typeOfEstablishment na resposta e imprime um tipo de estabelecimento aleatório.
Remoção de Texto: Método que remove texto após marcadores específicos em uma string, com cenários de teste para validação.
Execução
Instalar as dependências:

bundle install
Executar os testes:

bundle exec cucumber
Configurações Adicionais
Gemfile

source 'https://rubygems.org'

gem 'cucumber'
gem 'httparty'
gem 'rspec'
gem 'json'
cucumber.yml
yml
Copiar código
default: --format pretty --format html --out=report.html --strict --requir
