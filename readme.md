# semana agilizei 2.0

Repositório utilizado durante o curso Semana Agilizei 2.0

  - cypress
  - mapeando elementos com comandos nativos
  - modo headless
  
# Comandos para instalação do cypress:
```sh
  > git init    
  > npm init -y   
  > npm install -D cypress
```

# Anotações durante o curso: backgroundLogin
Ferramenta para testar expressões regulares: https://regexr.com;
Expressão: /[A-Z][A-Z]+/g - pega todas as palavas iniciadas e terminadas com letra maiúscula. O + serve para pegar o 
ultímo caractere e o g é que caso tenha mais de uma palavra que se encaixe no contexto, ele traz todas;
Usar o index.d.ts para adicionar comandos personalizados ao autocompletar;




# Comandos: 
trigger() - Aciona um evento em um elemento DOM, por exemplo, passar o mouse sobre o elemento (mouseover);
parent() - identifica o pai do elemento;
siblings() - identifica todos os irmãos do pai ou tios do elemento;
children() - identifica todos os filhos do elemento;
first() - seleciona o primeito item; 
pause() - pausa o teste em determinado ponto;
cy.writeFile() - cria e escreve um arquivo; 
cy.readFile() - lê um arquivo;