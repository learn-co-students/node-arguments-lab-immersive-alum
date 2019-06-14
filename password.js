// code solution here

function readInput(cmdArgs){
    if((cmdArgs.length === 2) ||(cmdArgs.length >= 5)){
        console.log("please enter the valid command:\n node <script> <no of passwords> <character length>")
        process.exit(1)
    }
    else{
        console.log("generating passwords...");
        generatePasswords(cmdArgs[2], cmdArgs[3]);
    }
}

function generatePasswords(passLength, noOfPass){
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let passValue = "";
    for(let i = 0; i < noOfPass; i++){
        for (let j = 0, cL = charset.length; j < passLength; j++) {
            passValue += charset.charAt(Math.floor(Math.random() * cL));
        }
        console.log(passValue)
        passValue = ""
    }
    
     
}
readInput(process.argv);

process.exit(0) 