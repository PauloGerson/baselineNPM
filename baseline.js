const fs = require('fs');
const path = require('path')

const  data = "Um teste"
const dir =  ['controller', 'model']

const src =  path.join(__dirname, 'backend')
const dirback = path.join(src, 'src')

if(!fs.existsSync(src)){
    fs.mkdirSync(src);
    fs.mkdirSync(dirback)
    for( let diretorio of dir){
        const dirPath = path.join(dirback, diretorio)
        console.log(dirPath)
        fs.mkdirSync(dirPath)
    }
    console.log(`Diretórios ${dir} criados com sucesso.`);
}else{
    console.log(`Diretórios ${dir} já existe.`);
}

 const caminho = path.resolve(__dirname)
fs.writeFile(`${caminho}/router.js`, "", (err, result) => {
    if(err){
        return console.log("Erro")
    }

    console.log("Deu certo")
})
console.log(caminho)


