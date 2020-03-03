const fs = require('fs');

// fs.writeFile('example.txt', 'this is an example', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('created')
//         fs.readFile('example.txt', 'utf8', (err, file) => {
//             if(err) {
//                 console.log(err)
//             } else {
//                 console.log(file)
//             }
//         })
//     }
// })

// fs.rename('example.txt', 'example2.txt', (err) => {
//     if(err)
//         console.log(err)
//     else
//         console.log('successfully')
// })

// fs.appendFile('example2.txt', '\nSome data being appened\n', (err) => {
//     if(err)
//         console.log(err)
//     else
//         console.log('success')
// })

// fs.unlink('example2.txt', (err) => {
//     if(err)
//         console.log(err)
// })

// fs.mkdir('tutorial', (err) => {
//     if(err) {
//         console.log(err)
//     } else {
//         // fs.rmdir('tutorial', (err) => {

//         // })
//         fs.writeFile('./tutorial/example.txt', 'some words', (err) => {})
//     }
// })

// 如果创建的文件夹里有文件，则不能直接调用mkdir删除文件夹，需要先将里面的文件删除，才可以

fs.readdir('tutorial', (err, files) => {
    if(err) {
        console.log(err)
    } else {
        console.log(files);
        for(let file of files) {
            fs.unlink('./tutorial/' + file, (err) => {
                if(err) {
                    console.log(err)
                }
            })
        }

        fs.rmdir('tutorial', (err) => {

        })
    }
})