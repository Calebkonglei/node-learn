/*
* 读取控制台输入信息
*  简单实现一个问答小功能
*/
const readline = require('readline');
const r1 = readline.createInterface({input: process.stdin, output: process.stdout});
let num1 = Math.floor((Math.random()*10) + 1);
let num2 = Math.floor((Math.random()*10) + 1);
let answer = num1 + num2;
r1.question(`what\'s it ${num1} + ${num2}? \n`, (userInput) => {
    if(answer == userInput.trim()) {
        r1.close()
    } else {
        r1.setPrompt('Incorrect\n');
        r1.prompt();
        r1.on('line', (userInput) => {
            if(userInput.trim() == answer) {
                r1.close();
            } else {
                r1.setPrompt('wrong again')
                r1.prompt();
            }
        })
    }
})

r1.on('close', () => {
    console.log('correct')
})
