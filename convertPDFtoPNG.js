const fs = require('fs');
const PDFImage = require("pdf-image").PDFImage;

console.log('start');

fs.readdir('data/yearbook/pdf/', (err, files) => {
  files.forEach(file => {

  	console.log(file);

  	let pdfImage = new PDFImage('data/yearbook/pdf/' + file, {
		  // combinedImage: true,
		  // outputDirectory: 'data/yearbook/png' 
		});

  	console.log(pdfImage);

		// pdfImage.convertFile().then(function (imagePaths) {
		pdfImage.convertPage(0).then(function (imagePaths, e) {
		  console.log(e);
		  console.log(imagePaths);
		}); 

  });
})



 
