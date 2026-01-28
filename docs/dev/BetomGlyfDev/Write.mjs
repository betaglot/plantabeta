import fs from 'fs'; // Import the fs module


const data = "skldjf;lksajd;lkfjsad;lf"

fs.writeFile("C:/Users/chris/klimbeta/docs/dev/BetomGlyf/file.txt", data, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File has been written');
});
