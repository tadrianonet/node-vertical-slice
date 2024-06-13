## Node.js Vertical Slice

Este é um projeto de exemplo utilizando a Arquitetura Vertical Slice com Node.js, Express e MongoDB.


# Desenvolvimento

Instale as dependências:

```shell
npm install
```

Configure as variáveis de ambiente no arquivo .env:

```shell
MONGODB_URI=mongodb://localhost:27017/ecommerce
MONGODB_URI_TEST=mongodb://localhost:27017/ecommerce_test
NODE_ENV=development
```

Inicie o servidor:

```shell
npm start
```

O projeto tem um arquivo chamando `requests.http` que você pode utilizar para testar os seus endpoints.

##  Testes

```shell
npm test
```


## Licença
Este projeto está licenciado sob a MIT License.