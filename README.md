# Maratona Full Cycle 3.0

## Challenges
1. Hello Full Cycle utilizando Golang e Docker ~ 1h - [Link](https://maratona.fullcycle.com.br/desafios/desafios-novo/)
[Code](https://github.com/armbrustsamuel/fullcycle3.0/tree/master/desafio-1)

2. Hello Full Cycle utilizando Buffalo ~ 3h - [Link](https://maratona.fullcycle.com.br/desafios/hello-world-utilizando-golang-e-buffalo/)
[Code](https://github.com/armbrustsamuel/fullcycle3.0/tree/master/desafio-2)

### Requirements
```bash
buffalo new <app-name>
```

3. Endpoint serverless que realiza uma operação de soma ~ 4h with issues - [Link](https://maratona.fullcycle.com.br/desafios/endpoint-serverless-que-realiza-uma-operacao-de-so/)
[Code](https://github.com/armbrustsamuel/fullcycle3.0/tree/master/desafio-3)

### Requirements

```bash
npm I -g serverless
```

### Serverless cli
```bash
sls
sls deploy
```

### Aws credentials
https://www.serverless.com/framework/docs/providers/aws/guide/credentials/

```bash
export AWS_ACCESS_KEY_ID=<your-key-here>
export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
```
### AWS login
```bash
aws login

aws lambda
```

> Obs: In case of permission issues, you can change IAM configuration in AWS console, or use following command:

```bash
aws lambda add-permission --function-name arn:<function-name> --statement-id lambda-invoke-function --action lambda:InvokeFunction --principal <from-function-properties> --source-arn arn:<source-function>
```

But, when 500 Internal Server Error raised, only the following statement solved:
```javascript
return {
    statusCode: 200,
    body: JSON.stringify({ resultado: result }, null, 2)
  };
```

4. Listagem das lives com Django e SQLite - [Link](https://maratona.fullcycle.com.br/desafios/listagem-das-lives-com-django-e-sqlite/)

5. Endpoint com a programação das aulas com Nest.js e SQLite

