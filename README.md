# VISÃO GERAL

# Sistema de Monitoramento - Checklist
Este repositório contém os componentes frontend e backend de uma aplicação robusta projetada para monitorar as consistências e os encerramentos diários de diversas lojas e suas respectivas filiais. O objetivo principal é fornecer uma visão clara e em tempo real do status operacional, garantindo a integridade dos dados e a conclusão bem-sucedida dos processos de encerramento em toda a rede de estabelecimentos.

A aplicação é dividida em duas partes principais: um frontend interativo desenvolvido em Angular, que oferece uma interface de usuário intuitiva para visualização e acompanhamento, e um backend performático em Java, responsável pela coleta, processamento e disponibilização dos dados através de uma API RESTful.

## ✔️ Tecnologias
- Angular (frontend)
- Java + Spring Boot (backend)
- PostgreSQL (banco)
- Git, Node.js, Maven

---

## ✔️ Requisitos
- Node.js >= 18
- JDK >= 17
- PostgreSQL >= 14

---

## ✔️ Backend
- Configurar `application.properties`
- Rodar:

```bash
mvn clean install
mvn spring-boot:run
```
## ✔️ Frontend
```bash
npm install
ng serve
```
- Acessar: http://localhost:4200

## ✔️ Funcionalidades
- Monitorar status de consistências/encerramentos

## ✔️ Build Produção
- Frontend: `ng build`
- Backend: `mvn package`


