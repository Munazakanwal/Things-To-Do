

// import { create } from "domain";
import inquirer from "inquirer";
import { todo } from "node:test";


 let todos:string[]= [];

let welcome=console.log("Welcome In To-Do App Develope by HIRA BAQAR ")

// operation in video//
 let operation = await inquirer.prompt([
        {
            type:"list",
            name:"operator",
            message:"What do you want to do?",
            choices:["Add","update","view","delete"]
        },
        {
            type:"input",
            name:"TODO",
            message:"What do you want to add in todo List?",
            
        },
        {
            type:"input",
            name:"addNew",
            message:"What do you want to add in todo List?",
            default:false
        },
        {
                type:"list",
                name:"addItems",
                message:"What item do you want to  update?",
                choices:["update","change"]
        },
        {
            type:"list",
            name:"addNew",
            message:"What item do you want to  name new items?",
            choices:["update","change"]
        }

        ]);

        if (operation.operator==="add"){
let add= await inquirer.prompt({
    type:"input",
    name:"items",
    message:"Please add items"

})
        
todo(add.items);
console.log(todo);
        
      }
      if(operation.operator==="view"){
        let watch = await inquirer.prompt
      }else if (operation.operator=== "view")

    
   