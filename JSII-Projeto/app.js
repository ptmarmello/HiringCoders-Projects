const livros = require('./database');
const readline = require('readline-sync');

const readInit = readline.question('Deseja Buscar um livro por ordem? S/N \t');
if(readInit.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:');
    // console.log() //-> adicionar aqui as categorias

    const answerCate = readline.question('Qual Categoria você escolhe?');
    const retorno = livros.filter(livro => livro.categoria == answerCate);

    console.table(retorno);
}
else{
    console.log('Essas são todos os livros disponíveis:');

    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas);
    console.table(livrosOrdenados);
}


