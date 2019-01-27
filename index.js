require('dotenv').config();
const Rekognition = require('node-rekognition')
 
// Set your AWS credentials
const AWSParameters = {
    "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
    "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
    "region": process.env.AWS_REGIONs
    // "bucket": process.env.AWS_BUCKET,
    // "ACL": "private" // optional
}
 
const rekognition = new Rekognition(AWSParameters)

// console.log(rekognition);
