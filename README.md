# Sistema de Comunicação com Clientes do Kartódromo

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![npm](https://img.shields.io/badge/npm-9.x-blue)
![Docker](https://img.shields.io/badge/Docker-Optional-yellow)

## 📌 Visão Geral

Sistema para consulta de baterias (corridas) agendadas no kartódromo, proporcionando:
- [ ] Consulta por e-mail do cliente
- [ ] Separação automática entre agendamentos futuros e passados
- [ ] Interface CLI intuitiva

## 🚀 Como Executar

### Pré-requisitos
- [ ] Node.js 18+
- [ ] npm 9+
- [ ] Docker (opcional)

### Instalação Local
```bash
git clone [seu-repositorio]
cd desafio-automy
npm install
npm start
```

### Execução com Docker
```bash
docker-compose up --build
```

## 🔧 Arquitetura
```bash
src/
├── app.js                # Ponto de entrada principal
├── services/
│   ├── authService.js    # Serviço de autenticação
│   ├── apiService.js     # Serviço de consulta à API
│   └── messageService.js # Serviço de formatação de mensagens
├── utils/
│   └── dateUtils.js      # Utilitários para manipulação de datas
├── tests/                # Testes unitários
│   ├── authService.test.js
│   ├── apiService.test.js
│   └── messageService.test.js
├── package.json          # Dependências e scripts
└── README.md             # Documentação
```

## 💡 Funcionalidades
- [ ] Autenticação automática na API Automy
- [ ] Consulta inteligente de baterias
- [ ] Classificação temporal automática (futuras/passadas)
- [ ] Interface interativa via linha de comando

## 🛠️ Configuração

### Variáveis de Ambiente
Crie .env na raiz:
```bash
API_AUTH_URL=https://appsaccess.automy.com.br/login
API_QUERY_URL=https://appsaccess.automy.com.br/api/api/desafio/custom/do/query
API_USERNAME=fldoaogopdege
API_PASSWORD=ygalepsm
```

## 🧪 Testes
```bash
npm test       # Executa todos os testes
npm run test:watch  # Modo watch
```

### Cobertura de testes:
- [ ] Autenticação
- [ ] Consulta à API
- [ ] Formatação de mensagens
- [ ] Lógica de datas

## 📋 Exemplo de Uso
```bash
$ npm start

Autenticação realizada!

Email do cliente: john.doe@gmail.com

--- PRÓXIMAS BATERIAS ---
1. 20/06/2025 às 20h (25 pessoas)

Ver histórico? (s/n): s

--- HISTÓRICO ---
1. 15/04/2025 às 18h (10 pessoas)
```

## 🐛 Solução de Problemas

Aqui estão os problemas mais comuns e como resolvê-los:

| Problema               | Solução                          | Código de Erro Associado |
|------------------------|----------------------------------|--------------------------|
| Token expirado         | O sistema faz reautenticação automática | 401 Unauthorized |
| Nenhum resultado       | Verifique: <br>- O email digitado <br>- Se existem agendamentos | 404 Not Found |
| Erro de conexão        | 1. Verifique sua conexão com a internet <br>2. Confira as URLs no arquivo .env <br>3. Teste o acesso manual à API | ECONNREFUSED |
| Dados incorretos       | Verifique o formato do email (deve conter @) | 400 Bad Request |

💡 **Dica**: Os erros são registrados no console com detalhes para facilitar a depuração.

## 📅 Roadmap de Desenvolvimento

Próximas melhorias planejadas para o sistema:

### 🔄 Melhorias de Performance
- [ ] Implementar cache para tokens JWT
- [ ] Otimizar consultas à API

### ✨ Novas Funcionalidades
- [ ] Adicionar busca por número de telefone
- [ ] Implementar notificações por SMS
- [ ] Desenvolver interface web administrativa

### 🛡️ Segurança
- [ ] Adicionar validação de entrada
- [ ] Implementar rate limiting

### 🌐 Internacionalização
- [ ] Adicionar suporte a múltiplos idiomas
- [ ] Localização de datas e horários
