let article = [
    "ilk post",
    "sdf fs ",
    "asdf "
]

function articleList () {
    for(let i = 0; i< article.length; i++){
        console.log(article[i]);
    }   
}


const addArticle = (addArticle) => {
    const promise = new Promise ((resolve,reject) => {
        if(addArticle == ""){
            reject("Hata: boş değer");

        }else {
            let articleLenght = article.length;
            resolve(article[articleLenght]= addArticle);
            console.log("yazi eklendi");
        }
    })
    return promise ;
}

async function blog(){
    articleList();
    try{
        await addArticle("yeni yazi");
        articleList();
    }
    catch (error){
        console.log(error);
    }
}

blog();