## Exercício
---
1. Crie uma página html de nome exercicio1
2. Adicione um título sobre exercicio de HTML
3. Adicione 5 paragrafos que fale algo sobre o DTD.
4. ...
---
### Próximos passos:
1. Aprimorar os cards:
    - Aplicar border-radius.
    - Aplicar uma imagem de background transparente.
    - Aplicar backgroun-color no main.
    - Modificar as bordas, estilo e cor.
 
 # 🧠 Exercício – Calculadora de Pontuação de Jogo
 
## 📘 Tema
**Operadores Matemáticos + Declaração de Variáveis (JS básico)**
 
---
 
## 📝 Enunciado
 
Imagine que você está desenvolvendo uma calculadora simples para um **jogo de aventura**, onde o jogador ganha ou perde pontos com base em suas ações.
 
Crie um script JavaScript que siga os seguintes passos:
 
1. Crie uma variável chamada `nomeJogador` com seu nome.
2. Crie uma variável `pontosIniciais` com valor `100`.
3. Crie variáveis para representar:
   - `monstrosDerrotados` (número inteiro)
   - `tesourosColetados` (número inteiro)
   - `armadilhas` (número inteiro)
 
4. Cada ação gera ou remove pontos:
   - Cada monstro derrotado = +10 pontos
   - Cada tesouro coletado = +15 pontos
   - Cada armadilha ativada = –20 pontos
 
5. Crie uma variável chamada `pontuacaoFinal` que some tudo corretamente.
 
6. Exiba no console a seguinte mensagem:
 
Jogador: Ana
Pontos Iniciais: 100
Monstros derrotados: 3
Tesouros coletados: 2
Armadilhas ativadas: 1
Pontuação Final: 120
 
 
---
 
## 💡 Dicas
 
- Use `let` ou `const` para declarar variáveis.
- Use operadores matemáticos: `+`, `-`, `*`
- Use `console.log()` para mostrar os resultados no navegador.
 
---
 
## 🎯 Desafio Extra
 
Transforme a pontuação final em **nível do jogador**, baseado no seguinte critério:
 
```javascript
// Se pontuaçãoFinal >= 150 → nível “Avançado”
// Se pontuaçãoFinal >= 100 → nível “Intermediário”
// Se pontuaçãoFinal < 100 → nível “Iniciante”
 