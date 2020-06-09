# GoBarber - API
Um aplicativo de agendamento que permite aos usuários agendar uma horário com o barbeiro e controlar a programação do barbeiro.

## Tecnologias

**[Node.js][nodejs]**
**[Express](https://expressjs.com/)**
**[Docker](https://www.docker.com/docker-community)**
**[PostgreSQL](https://www.postgresql.org/)**
**[MongoDB](https://www.mongodb.com/)**
**[Multer](https://github.com/expressjs/multer)**
**[Bcrypt](https://www.npmjs.com/package/bcrypt)**
**[Nodemailer](https://nodemailer.com/about/)**
**[date-fns](https://date-fns.org/)**
**[jest](https://jestjs.io/)**
**[celebrate](https://github.com/arb/celebrate)**
**[handlebars](https://handlebarsjs.com/)**
**[tsyringe](https://github.com/microsoft/tsyringe/)**
**[VS Code][vc] with [ESLint][vceslint]**

Este projeto esta sendo desenvolvido em Typescript (https://www.typescriptlang.org/).

É alicado neste projeto as técnicas de desenvolvimento:
**TDD - Test-driven development**
**SOLID**
***Single-responsibility Principle.***
***Open-closed Principle.***
***Liskov substitution principle.***
***Interface segregation principle.***
***Dependency Inversion principle.***

==================================================================
## Requisitos e regras de negócio:

**RF  - Requisitos funcionais**
**RNF - Requisitos não funcionais**
**RN  - Regras de negocio**

### Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu email;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

### Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu e-mail para um email já atualizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;


### Painel do prestador

**RF**

- O prestador deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar

## Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mes com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve pdoer realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 19h (primeiro às 08h, último as 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que ja passou;
- O usuário não pode agendar serviços consigo mesmo;
