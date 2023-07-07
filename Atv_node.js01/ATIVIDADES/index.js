// ATVIDADE 01 - FS

// const fs = require('fs')

// fs.readFile('arquivo.txt','utf8', function(err,data){
//     console.log(data)
// })



// ATIVIDADE 02 - FS

// const fs = require('fs')
// const data = 'testando criação';

// fs.writeFile('arquivo2.txt', data, (err) => {
//     if (err) throw(err);
//     console.log('O arquivo foi criado com sucesso!')
// })


// ATIVIDADE 03 - FS

// let fs = require('fs');

// fs.writeFile('arquivo.txt', 'Texto qualquer para atividade 03' function(err){
//     if(err){
//         return console.log('erro')
//     }
//     console.log('Arquivo criado')
// })


// ATIVIDADE 04 - FS

// const fs = require('fs');

// fs.copyFile('arquivo2.txt', 'arquivo2copia.txt', (err) =>{
//     if (err) throw err;

//     console.log('Arquivo copiado com sucesso');
// })

// ATIVIDADE 05 - FS

// const fs = require('fs')

// fs.rename('arquivoRN.txt', 'RENOMEADO.TXT', function(err){
//     if(err){
//         throw err;
//     }else {
//         console.log('Arquivo renomeado com sucesso!')
//     }
// })

// ATIVIDADE 06 - FS

// const fs = require('fs')

// fs.unlink('./arquivoExcluir.txt', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("Arquivo removido com sucesso!")
// })

// ATIVIDADE 07 - FS

// const fs = require('fs');

// const filePath = 'arquivoNaoExistente.txt';

// if (fs.existsSync(filePath)) {
//     console.log('Este arquivo existe!!!')
// } else {
//     console.log('Este Arquivo não existe!!!')
// }

// ATIVIDADE 01 - PATH

// const path = require('path')

// const notes = '/user/edson/exemplopath.txt'
// path.dirname(notes)
// console.log(path.basename('./exemplopath.txt'))

// ATIVIDADE 04

const path = require('path')

console.log(path.normalize('/user/edson/../arquivo.txt'))
