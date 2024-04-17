let words ;
let linesOfBible ;
let specialWord = "dog"
function preload(){
  linesOfBible = loadStrings("bible.txt");
  //comes in as an array of lines
}
               
function setup() {
  createCanvas(400, 400);
  background(140,100,180)
  let combinedLines =  join(linesOfBible," ").toLowerCase();
  //combine the array of lines into one long text
  words = splitTokens(combinedLines, " ,./()!;:?-_+=[]")
 
  text("Loaded " + words.length + " words of the bible",100,100);
  let mentions = 0;
   for(var i = 0; i < words.length; i++){
     if (words[i] == specialWord){
       mentions++;
     }
   }
  if (mentions > words.length/1000){
     text("This probably about " + specialWord, 100,200);
  }else{
    text("This probably not about " + specialWord, 100,200);
  }
}

function draw() {
  //background(220);
}