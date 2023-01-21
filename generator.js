const helper = require("./helper");
const fs = require('fs');
const inquirer = require('inquirer');

// console.log(helper.renderPlaceholder(311, 433));

function writeHtmlFile(data){
  var html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Output Html</title>
  </head>
  <body>
    ${data}
  </body>
  </html>`;
  return fs.writeFile("index.html", html, (err) => {
    if(err) return console.error(err);
    console.log("Success!");
  });
}

// writeHtmlFile(helper.renderPlaceholder(311, 433));

let init = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the width of the first box?",
      name: "box1width"
    },
    {
      type: "input",
      message: "What is the height of the first box?",
      name: "box1height"
    },
    {
      type: "confirm",
      message: "Does the first box have a placeholder image?",
      name: "box1placeholder"
    },
    {
      type: "input",
      message: "What is the width of the second box?",
      name: "box2width"
    },
    {
      type: "input",
      message: "What is the height of the second box?",
      name: "box2height"
    },
    {
      type: "confirm",
      message: "Does the second box have a placeholder image?",
      name: "box2placeholder"
    },
    {
      type: "input",
      message: "What is the width of the third box?",
      name: "box3width"
    },
    {
      type: "input",
      message: "What is the height of the third box?",
      name: "box3height"
    },
    {
      type: "confirm",
      message: "Does the third box have a placeholder image?",
      name: "box3placeholder"
    },
  ])
  .then( answers => {
    // console.log(helper.renderBox(
    //   {
    //     width: answers.box1width, 
    //     height: answers.box1height, 
    //     placeholder: answers.box1placeholder
    //   }));

    let box1 = helper.renderBox(
        {
          width: answers.box1width, 
          height: answers.box1height, 
          placeholder: answers.box1placeholder
        });
    let box2 = helper.renderBox(
      {
        width: answers.box2width, 
        height: answers.box2height, 
        placeholder: answers.box2placeholder
      });
    let box3 = helper.renderBox(
      {
        width: answers.box3width, 
        height: answers.box3height, 
        placeholder: answers.box3placeholder
      });
    writeHtmlFile(box1 + box2 + box3);
  });
}

init();