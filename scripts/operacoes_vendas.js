// Executar a partir da raiz do repositorio em um banco de laboratorio.
(() => {
    const fs = require('fs');
    const path = require('path');
    const loja = db.getSiblingDB('lojadb');
    const arquivo = path.resolve('data/vendas_lojadb.json');
    const documentos = JSON.parse(fs.readFileSync(arquivo, 'utf8'));
    if (!Array.isArray(documentos) || documentos.length !== 3) {
        throw new Error('A carga deve conter os tres documentos do laboratorio.');
    }
    if (loja.vendas.countDocuments({}) !== 0) {
        throw new Error('Carga interrompida: lojadb.vendas nao esta vazia. Use scripts/consultas_vendas.js para consultar sem inserir.');
    }
    print('Insercao dos documentos:');
    printjson(loja.vendas.insertMany(documentos));
})();
load('scripts/consultas_vendas.js');
