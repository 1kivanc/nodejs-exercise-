const fs = require('fs');

fs.writeFile('employees.json','[{"name":"Employee 1 name","salary":2000}]','utf8',(err) => {
    if(err) console.log(err);
    console.log('dosya oluşturuldu');
});



fs.readFile('employees.json','utf8',(err,data)=> {
    if(err) throw err 
    console.log(data)
});

fs.appendFile('employees.json','güncellendi','utf8',(err) => {
    if (err) throw err
    console.log('dosya güncellendi')
});

fs.unlink('employees.json',(err)=> {
    if(err) throw err
    console.log('dosya silindi')
})