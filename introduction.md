# MeteoWeather

Um site de previsões meteorológicas simples e direto ao ponto.

### Introdução
O MeteoWeather é um serviço de previsões meteorológicas que visa oferecer leituras precisas e rápidas para usuários com rotinas corridas. Com um layout simples e elegante, facilitamos a experiência do usuário, fornecendo as informações mais relevantes para o seu dia.

### Meteorologia
Utilizamos o serviço meteorológico [Tomorrow.io](https://www.tomorrow.io/) para fornecer dados de modelos climáticos. Este serviço é um ótimo provedor, oferecendo dados em tempo real para qualquer localização do mundo. Apesar de o Tomorrow.io disponibilizar previsões para até 16 dias à frente, o MeteoWeather exibe apenas os próximos 5 dias, evitando sobrecarregar o usuário com excesso de informações.

## Localização
Oferecemos dois métodos para obter a localização atual do usuário: através da API de localização nativa do navegador e por consulta de localização do IP. Recomendamos sempre que o usuário forneça consentimento para utilizar a localização do navegador, pois é mais precisa. Quando isso não é fornecido, o sistema faz automaticamente uma consulta ao provedor de geolocalização [IPinfo.io](https://ipinfo.io/) com base no IP do cliente.

Além de identificar a localização do usuário e fornecer a previsão para essa região, o MeteoWeather também permite a consulta da previsão para outras localidades, inserindo o nome da cidade ou endereço em um campo de busca. Nesse processo, utilizamos as APIs de localização do Google Maps para traduzir o endereço inserido em coordenadas globais.

### Estilo
O MeteoWeather sempre apresenta uma imagem de fundo correspondente ao clima atual, obtida do banco de imagens gratuitas [Unsplash](https://unsplash.com/pt-br). Isso não só auxilia na percepção do clima, como uma paisagem chuvosa ou uma praia ensolarada, mas também torna o aplicativo visualmente atraente. Outra estratégia é a rápida apresentação das imagens de fundo, que, embora sejam de alta resolução, são renderizadas instantaneamente através da aplicação de definições de cores preliminares, acelerando a percepção do usuário.

Além disso, o MeteoWeather oferece um tema escuro que se adapta automaticamente às configurações predefinidas do dispositivo, proporcionando uma experiência visual consistente, independentemente das preferências de tema do usuário.

### Persistência
O sistema armazena localmente no navegador os dados da última consulta de localização, previsão e imagem, permitindo uma rápida atualização. Esses dados persistem por até 1 hora, momento em que é realizada uma nova atualização para fornecer os dados meteorológicos mais recentes.

### Instalação
Os usuários têm a opção de instalar o MeteoWeather diretamente do navegador como um Progressive Web App (PWA), permitindo que o aplicativo seja exibido na área de aplicativos nativamente. Isso é especialmente útil para usuários que desejam ter acesso rápido ao MeteoWeather a partir de sua área de trabalho ou dispositivos móveis.

### Limitações
É importante notar que o provedor de dados meteorológicos impõe limitações de 25 requisições por hora para planos gratuitos, como o que utilizamos. Essa limitação é aceitável, considerando que esta aplicação foi desenvolvida exclusivamente para fins experimentais.
