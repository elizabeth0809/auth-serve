const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '429368256601-kuhe85bu6oenccfps96gautf2tjuc1sv.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);
const validargoogleIdToken = async (token) => {
  try{
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: [CLIENT_ID,
        '429368256601-tm3hsm6mvdb795mc57tsvcedu1555c6t.apps.googleusercontent.com',
        '429368256601-vba0uegolainp2tt7m0166krn25bcv59.apps.googleusercontent.com'
        ],
        
    });
    const payload = ticket.getPayload();
    
    return{
      name: payload['name'],
    picture: payload['picture'],
      email: payload['email'],
    }
  }catch(error){
    return null;
  }
  
}
module.exports = {
    validargoogleIdToken
}