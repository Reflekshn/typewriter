const sentence = "hello there from lighthouse labs";
let delay = 0;
let interval = 100;

for (let index = 0; index < sentence.length; index++) {
  if (index !== sentence.length - 1) {
    setTimeout(() => process.stdout.write(sentence[index]), delay);
  } else {
    setTimeout(() => process.stdout.write(sentence[index] + '\n'), delay);
  }
  delay += interval;
};


