require('dotenv').config()
const Rekognition = require('node-rekognition')
const fs = require('fs')
const path = require("path");
 
// Set your AWS credentials
const AWSParameters = {
    "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
    "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
    "region": process.env.AWS_REGION,
    "bucket": process.env.AWS_BUCKET,
    "ACL": "public-read" // optional
}
 
const rekognition = new Rekognition(AWSParameters)

function replaceSpacesWithDashes() {
  let imageArray = getImagePaths()
  imageArray.forEach(i => {
    fs.renameSync(i,i.replace(/\s+/g, '-'))
  })
}

function replaceJpegWithJpg() {
  let imageArray = getImagePaths()
  imageArray.forEach(i => {
    fs.renameSync(i,i.replace('jpeg', 'jpg'))
  })
}

function getImagePaths() {
  const folder = './data/yearbook/jpg'
  let imageArray = []

  fs.readdirSync(folder).forEach(file => {
    // console.log(file)
    imageArray.push(path.resolve(`${folder}/${file}`))
  });

  return imageArray
}

async function start() {
  let imageArray = getImagePaths()

  let s3Images = await uploadToS3(imageArray)
  const collectionId = 'yearbook-faces'
  // const collection = await rekognition.createCollection(collectionId)

  console.log(s3Images)

  // for (i = 0; i < s3Images.length; i++) {
  //   let facesIndexed = await rekognition.indexFaces(collectionId, s3Images[i])
  // }

  // const faces = await rekognition.listFaces(collectionId)
  // console.log(faces)
}

async function uploadToS3(imageArray) {
  const s3Folder = 'yearbook'
  const s3Images = await rekognition.uploadToS3(imageArray, s3Folder)
  return s3Images
}

async function start3() {
  const faces = await rekognition.listFaces('yearbook-faces')
  console.log(faces)
}

start()


// add them all to a yearbook folder in s3




// function addImage t







// const collection = await rekognition.createCollection(collectionId)