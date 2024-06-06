const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Adicione os tempos de espera
    pageLoadTimeout: 120000, // Aumenta o tempo limite para carregamento da página para 120 segundos
    defaultCommandTimeout: 10000 // Aumenta o tempo limite padrão dos comandos para 10 segundos
  },
})
