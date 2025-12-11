
# 🤸‍♂️ Sistema de Pontuação de Atletas

Este projeto foi desenvolvido como parte de um desafio da Jornada DEVstart Senai. A aplicação gerencia e calcula a média de notas atribuídas a atletas em uma competição de ginástica artística.

## 📋 Regras de Negócio

Em uma competição de ginástica, 5 jurados atribuem notas de 1 a 10. Para garantir uma avaliação justa:

1. A maior e a menor nota são **descartadas**.
2. A média é calculada com base apenas nas **três notas intermediárias** .

## 🚀 Tecnologias Utilizadas

* **JavaScript (ES6+)** : Lógica de manipulação de matrizes e objetos.
* **Node.js** : Ambiente de execução para testes locais.

## 💻 Como Executar

### Pré-requisitos

* Ter o [Node.js](https://nodejs.org/ "null") instalado em sua máquina.

### Passo a passo

1. Clone este repositório (ou baixe os arquivos):
   ```shell
   git clone https://github.com/bagrezildo/notas-atletas.git
   ```
2. Acesse a pasta do projeto pelo terminal:
   ```shell
   cd notas-atletas
   ```
3. Execute o script:
   ```shell
   node notas-atletas.js
   ```

## 🛠️ Estrutura do Código

O código recebe uma matriz de objetos contendo o nome e as notas dos atletas. A função `CalcularMedia`:

1. Percorre a lista de atletas.
2. Identifica a maior e a menor nota manualmente (mantendo a complexidade O(n) sem ordenação prévia para o cálculo).
3. Soma todas as notas e subtrai os extremos.
4. Exibe o nome, as notas (ordenadas visualmente apenas na saída) e a média final calculada.

## 📄 Exemplo de Saída

```shell
Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 9.253333333333333

Atleta: Fernando Puntel
Notas Obtidas: 7,8,9.33,10,10
Média Válida: 9.11
```

Desenvolvido para fins de estudo e certificação.
