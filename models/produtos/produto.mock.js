var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../../', 'config')).connectionString;

var client = new pg.Client(connectionString);
client.connect();

var marcas = ['Adidas', 'Nike', 'Converse', 'Lacoste', 'Topper', 'Mizuno', 'Vans', 'Puma', 'Reebok']
var imagens = ['http://static1.netshoes.net/Produtos/tenis-puma-elsu-v2-perf-sl/46/D14-1109-846/D14-1109-846_detalhe1.jpg?resize=254:*',
'http://static1.netshoes.net/Produtos/tenis-reebok-trainfusion-nine/58/D19-0791-058/D19-0791-058_detalhe1.jpg?resize=254:*',
'http://static1.netshoes.net/Produtos/tenis-reebok-trainfusion-nine/04/D19-0792-904/D19-0792-904_detalhe1.jpg?resize=254:*',
'http://static1.netshoes.net/Produtos/tenis-nike-biscuit-2-sl/14/004-7214-014/004-7214-014_detalhe1.jpg?resize=254:*',
'http://static1.netshoes.net/Produtos/tenis-lacoste-lerond-sep/12/D66-0420-012/D66-0420-012_detalhe1.jpg?resize=254:*',
'http://static1.netshoes.net/Produtos/tenis-adidas-breeze-102/26/D13-4878-026/D13-4878-026_detalhe1.jpg?resize=254:*',
'http://static1.netshoes.net/Produtos/tenis-nike-eastham/26/004-0617-326/004-0617-326_detalhe1.jpg?resize=254:*',
'http://static1.netshoes.net/Produtos/tenis-converse-all-star-european-ox/02/047-3280-002/047-3280-002_detalhe1.jpg?resize=254:*',
'http://static1.netshoes.net/Produtos/tenis-nike-vapor-court/28/004-5147-028/004-5147-028_detalhe1.jpg?resize=254:*',
'http://static1.netshoes.net/Produtos/tenis-nike-futslide-sl/28/004-7620-128/004-7620-128_detalhe1.jpg?resize=254:*',
'http://static1.netshoes.net/Produtos/chuteira-adidas-artilheira-in-futsal/14/D13-3054-114/D13-3054-114_detalhe1.jpg?resize=254:*',
'http://static1.netshoes.net/Produtos/chuteira-nike-mercurial-victory-5-ic-futsal/54/004-6286-054/004-6286-054_detalhe1.jpg?resize=254:*',
'http://static1.netshoes.net/Produtos/chuteira-nike-mercurial-vortex-2-cr7-tf-society/86/004-7351-086/004-7351-086_detalhe1.jpg?resize=254:*',
'http://static1.netshoes.net/Produtos/chuteira-adidas-ace-164-fxg-campo/78/D13-3047-178/D13-3047-178_detalhe1.jpg?resize=254:*'
]
var imagem;
var tipos = ['Corrida', 'Social', 'Chuteira', 'Skate', 'Casual']
var marca;
var valor;
var nome;
var descricao;
var peso;
var tamanho;
var quantidade
var tipo;
var query;

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomizeParameters = function(i) {
  valor = getRandomInt(50, 500)
  marca = marcas[getRandomInt(0,8)]
  nome = "Tenis " + marca + " " + valor + "/" + (i+1)
  descricao = "Tenis teste número " + (i + 1)
  peso = getRandomInt(1, 3)
  tamanho = getRandomInt(35, 44)
  quantidade = getRandomInt(0, 500)
  tipo = tipos[getRandomInt(0, 4)]
  imagem = imagens[getRandomInt(0, 14)]
}

for(var i = 0; i < 100; i ++) {

  randomizeParameters(i);

  query = client.query(
    "INSERT INTO Produto VALUES("   +
      i+", "                        +
      valor+", "                    +
      "'"+nome+"', "                +
      "'"+imagem+"', "              +
      "'"+descricao+"', "           +
      peso+", "                     +
      tamanho+", "                  +
      "'"+marca+"', "               +
      quantidade+", "               +
      "'"+tipo+"'"                  +
    ')'
  );
  if(i = 100) {
    query.on('end', function() {
      client.end();
    });
  }

}