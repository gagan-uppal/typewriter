/*const sentence = "hello there from lighthouse labs";
for (const char of sentence) {
  //console.log(char);
  process.stdout.write(char);
}*/

const sentence = "hello there from lighthouse labs\n";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, i * 50);
} 