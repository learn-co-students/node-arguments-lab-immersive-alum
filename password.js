// code solution here
let length = process.argv[2];
let quantity = process.argv[3];

let index;
let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let pw = '';

for(let i = 0; i < quantity; i++){
  for(let i = 0; i < length; i++) {
    index = Math.floor(Math.random() * characters.length);
    pw = pw + characters[index];
  }

  console.log(pw);
  pw = '';
}
