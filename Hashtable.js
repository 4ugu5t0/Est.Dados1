// Define uma função construtora chamada HashTable
function HashTable() {
    // Cria um array vazio que será usado para armazenar os valores da tabela hash
    var table = [];

    // Define uma função construtora para um objeto chamado ValuePair, que será usado para armazenar os pares chave-valor
    var ValuePair = function(key, value) {
        // Atribui a chave e o valor fornecidos como parâmetros ao objeto ValuePair
        this.key = key;
        this.value = value;

        // Define um método toString para o objeto ValuePair que retorna uma representação em string do par chave-valor
        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']';
        };
    };

    // Define um método de instância put que adiciona um par chave-valor à tabela hash
    this.put = function(key, value) {
        // Calcula a posição na tabela hash usando a função de hash loseloseHashCode
        var position = loseloseHashCode(key);
        // Armazena o valor na posição correspondente no array da tabela hash
        table[position] = value;
    };

    // Define um método de instância remove que remove um par chave-valor da tabela hash com base na chave fornecida
    this.remove = function(key) {
        // Calcula a posição na tabela hash usando a função de hash loseloseHashCode
        table[loseloseHashCode(key)] = undefined;
    };

    // Define um método de instância get que retorna o valor correspondente a uma chave fornecida
    this.get = function(key) {
        // Calcula a posição na tabela hash usando a função de hash loseloseHashCode e retorna o valor correspondente no array da tabela hash
        return table[loseloseHashCode(key)];
    };

    // Define uma função de hash fraca que soma os valores dos caracteres ASCII na chave e retorna o resultado módulo 37
    var loseloseHashCode = function(key) {
        var hash = 0;
        for(var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    // Define um método de instância print que imprime todos os pares chave-valor na tabela hash
    this.print = function() {
        for(var i = 0; i < table.length; i++) {
            if(table[i] !== undefined) {
                console.log(i + ' : ' + table[i]);
            }
        }
    };

    // Define um método de instância size que retorna o tamanho da tabela hash (o comprimento do array)
    this.size = function() {
        return table.length;
    };
}

// Cria uma nova instância da tabela hash
var hashtable = new HashTable();

// Adiciona alguns pares chave-valor à tabela hash
hashtable.put("leandro", "leandro.borges@me.com");
hashtable.put("astolfo", "astolfo@uol.com.br");
hashtable.put("Livia", "livia@uol.com.br");
hashtable.put("Leandro", "leandro.borges@me.com");

// Imprime todos os pares chave-valor na tabela hash
hashtable.print();
