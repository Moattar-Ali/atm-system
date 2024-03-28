#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollars
let myPinCode = 11223;

let answer = await inquirer.prompt(
    [
        {
        name : "Q1",
        message : "Enter Your Pin Number: ",
        type: "number"
        }
    ]
);
if(answer.Q1 == myPinCode){
    console.log("Your Pin Number is Correct");
    let answer1 = await inquirer.prompt(
        [{
            name: "Q2",
            message : "Please Select The Given Option",
            type: "list",
            choices : ["Cash Withdrawal","Fast Cash Withdrawal","Balance Inquiry","Money transfer"]
        },
            
        ]
    );

    if(answer1.Q2 == "Cash Withdrawal" || answer1.Q2 == "Fast Cash Withdrawal" || answer1.Q2 == "Money Transfer"){
        let answer2 = await inquirer.prompt(
            {
                name : "Q3",
                message : "Enter an amount",
                type : "number"
            }
        );
        if(answer2.Q3 <= myBalance){
            console.log("Your remaining Account Balance is: ");
            console.log(myBalance - answer2.Q3);
        }
    }
    else if (answer1.Q2 == "Balance Inquiry"){
        console.log(myBalance);
    };
}
else{
    console.log("Please enter correct Pin Number");
};
