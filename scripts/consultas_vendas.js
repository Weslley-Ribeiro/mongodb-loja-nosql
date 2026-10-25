// Somente leitura; nao insere nem remove documentos.
(() => {
    const loja = db.getSiblingDB('lojadb');
    print('1. Todos os documentos:');
    printjson(loja.vendas.find({}).toArray());
    print('2. Cliente Maria:');
    printjson(loja.vendas.find({nome: 'Maria'}).toArray());
    print('3. Nomes dos clientes VIP:');
    printjson(loja.vendas.find({vip: 1}, {nome: 1, _id: 0}).toArray());
    print('4. Compras de Marcos:');
    printjson(loja.vendas.find({nome: 'Marcos'}, {compras: 1, _id: 0}).toArray());
    print('5. Produtos distintos:');
    printjson(loja.vendas.distinct('compras.produto'));
})();
