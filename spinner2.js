const animation = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let j = 0;
for (let i = 0;i < animation.length; i ++) {
  if (i === animation.length - 1) {
    animation[i] = animation[i] + '\n';
  }
  setTimeout(() => {
    process.stdout.write(`\r${animation[i]}   `);
  } , j+= 100);
};