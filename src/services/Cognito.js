import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';

const poolData = {
  UserPoolId: process.env.REACT_APP_USER_POOL_ID,
  ClientId: process.env.REACT_APP_CLIENT_ID,
};

export const UserPool = new CognitoUserPool(poolData);

export function getCognitoUser(email) {
  return new CognitoUser({
    Username: email,
    Pool: UserPool,
  });
}

export function authenticateUser(email, password) {
  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  });

  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: UserPool,
  });

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      const IdentityPoolId = process.env.REACT_APP_IDENTITY_POOL_ID;

      let Logins = [];
      Logins[
        `cognito-idp.${process.env.REACT_APP_AWS_REGION}.amazonaws.com/${process.env.REACT_APP_USER_POOL_ID}`
      ] = result.getIdToken().getJwtToken();

      //POTENTIAL: Region needs to be set if not already set previously elsewhere.
      AWS.config.region = process.env.REACT_APP_AWS_REGION;

      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId,
        Logins,
      });

      //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
      AWS.config.credentials.refresh((error) => {
        if (error) {
          console.error(error);
        } else {
          // Instantiate aws sdk service objects now that the credentials have been updated.
          // example: var s3 = new AWS.S3();
          console.log('Successfully logged!');
        }
      });
    },

    onFailure: function (err) {
      alert(err.message || JSON.stringify(err));
    },
  });
}
