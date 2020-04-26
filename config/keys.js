module.exports = {
    FrontEndURL: "http://localhost/",
    google: {
        clientSecret: "q7uJCC5-8Tsmt-eqdCg2j3MU",
        clientID: "830295944707-0brqf2khisb45b377ff2glr67cbtguuo.apps.googleusercontent.com"
    },
    facebook: {

    },
    twitter: {

    },
    JWT: {
        secretKey: process.env.secretKey
    },
    mongodb: {
        dbURI: process.env.MONGODB_URI
    },
    aws: {
        S3_BUCKET: process.env.S3_BUCKET ,
        AWS_SECRET_ACCESS_KEY:process.env.AWS_SECRET_ACCESS_KEY ,
        AWS_ACCESS_KEY_ID:process.env.AWS_ACCESS_KEY_ID 
    }
}
