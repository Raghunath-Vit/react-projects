// to run the node write node FileName.js in terminal

// Node has its own API as same as browser has own API called Window object, Node has global and process objects under which various things are there.


//process.argv is an array which consist of command line terminal values in it. In the first position or index 0 it stores the path for Node Execution envoirnment in second argument or index 1 it has file path and next any argument which we write or we can say its live taking input from console.
const mission=process.argv[2];

if(mission==='learn')
{
    console.log(`This is template litrals used to write variable and string together and file name is ${mission}`);
}
else{
    console.log(`This is template litrals used to write variable and string together and file name is ${mission}`);
}