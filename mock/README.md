
# 📦 Mock API com JSON Server

Este projeto utiliza o [JSON Server](https://github.com/typicode/json-server) para simular uma API REST durante o desenvolvimento front-end.

---

## ✅ O que é o JSON Server?

O JSON Server permite criar uma **API falsa e funcional em segundos** usando um simples arquivo `.json` como banco de dados. Ideal para testes de front-end ou simulações sem precisar de um back-end real.

---

## 🚀 Instalação

### ✔️ Passo 1: Instalar dependências do projeto

Antes de tudo, instale as dependências do projeto (incluindo o `json-server`, que já está no `package.json` como dependência de desenvolvimento):

```bash
npm install
```

---

### ❗ Caso o JSON Server não esteja instalado:

Você tem duas opções:

#### ✅ Instalar localmente no projeto (recomendado):

```bash
npm install json-server --save-dev
```

> Isso adiciona o JSON Server como dependência de desenvolvimento no seu projeto, e permite usá-lo com `npx`.

Depois, execute:

```bash
npx json-server -w ./mock/database.json -p 3333
```

#### ✅ Ou instalar globalmente na máquina (opcional):

```bash
npm install -g json-server
```

Assim você poderá usar diretamente:

```bash
json-server -w ./mock/database.json -p 3333
```

---

## ▶️ Como rodar o servidor

O projeto inclui um arquivo de dados fictício localizado em:

```
./mock/database.json
```

Para iniciar o servidor de mock:

```bash
npx json-server -w ./mock/database.json -p 3333
```

- `-w`: ativa o modo "watch" (observa alterações no JSON)
- `-p 3333`: define a porta 3333 (você pode mudar, se quiser)

---

## 🔗 Endpoints disponíveis

Se o seu `database.json` estiver assim:

```json
{
  "usuarios": [
    { "id": 1, "nome": "Bruno" },
    { "id": 2, "nome": "Igor" }
  ]
}
```

Você poderá acessar:

- `GET    http://localhost:3333/usuarios`
- `POST   http://localhost:3333/usuarios`
- `PUT    http://localhost:3333/usuarios/1`
- `DELETE http://localhost:3333/usuarios/1`

---

## 💡 Dica

Se quiser adicionar mais entidades, edite o arquivo `mock/database.json` com novas chaves e arrays, como:

```json
{
  "produtos": [],
  "categorias": [],
  "usuarios": []
}
```

---

## 🧼 Encerrando o servidor

Para parar o servidor, pressione `Ctrl + C` no terminal.

---

## 📁 Scripts opcionais

Você pode adicionar este comando ao `package.json` para facilitar:

```json
"scripts": {
  "api": "json-server -w ./mock/database.json -p 3333"
}
```

Aí é só rodar com:

```bash
npm run api
```

---

## 📌 Requisitos

- Node.js instalado (v14 ou superior recomendado)
- npm (ou yarn)

---

## 🛠️ Dependência usada

O `json-server` está listado como dependência de desenvolvimento no `package.json`:

```json
"devDependencies": {
  "json-server": "^0.17.3"
}
```

---

Pronto! Com isso, qualquer pessoa pode instalar e executar sua API falsa localmente com facilidade.