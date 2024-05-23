## MeteoWeather: Previsões Meteorológicas Simples e Elegantes

**MeteoWeather** é um site de previsões meteorológicas projetado para oferecer uma experiência rápida e precisa para usuários com agendas movimentadas. Com um design simples e elegante, o MeteoWeather apresenta as informações mais relevantes para o seu dia, facilitando a consulta do clima sem complicações.

[Leia a apresentação completa](./introduction.md)

O site está disponível no link a seguir:

https://fe-lipe-alves.github.io/meteo-weather

### Recursos Técnicos:

**Dados Meteorológicos:**

* **Fonte:** Tomorrow.io ([https://www.tomorrow.io/](https://www.tomorrow.io/))
* **Cobertura:** Previsão para qualquer local do mundo
* **Granularidade:** Atualizações em tempo real
* **Horizonte de Previsão:** 5 dias (foco em informações relevantes)

**Localização:**

* **Detecção Automática:**
    * API de localização nativa do navegador (maior precisão)
    * Consulta de localização por IP via IPinfo.io ([https://ipinfo.io/](https://ipinfo.io/))
* **Busca Manual:**
    * Campo de busca para consultas por endereço/cidade
    * Tradução de endereços em coordenadas via API do Google Maps

**Estilo:**

* **Imagens de Fundo Dinâmicas:**
    * Unsplash ([https://unsplash.com/](https://unsplash.com/))
    * Imagens relacionadas ao clima atual (como praia ensolarada, chuva, etc.)
    * Carregamento rápido com cores da imagem baseado em [BlurHash](https://blurha.sh/)
* **Tema Adaptável:**
    * Claro ou escuro, de acordo com a preferência do dispositivo

**Persistência:**

* **Armazenamento em Cache:**
    * Localização, previsão e imagem da última consulta salvas no navegador
    * Atualização após 1 hora para garantir dados atualizados

**Instalação:**

* **PWA (Progressive Web App):**
    * Instalação como aplicativo no dispositivo
    * Acesso rápido na área de trabalho ou aplicativos mobile

**Limitações:**

* **Requisições Gratuitas:**
    * 25 requisições por hora no plano gratuito do Tomorrow.io
    * Suficiente para uso normal, mas considere upgrade para planos pagos para uso intensivo

**MeteoWeather:** Sua fonte confiável para previsões meteorológicas precisas e acessíveis!
