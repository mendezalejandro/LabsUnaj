import { Injectable } from '@angular/core';


/**
 * Pool cognito
 */
// const poolData: ICognitoUserPoolData = {
//   UserPoolId: environment.cognito.userPoolId,
//   ClientId: environment.cognito.appClientId,
// };
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // userPool: CognitoUserPool;
  // constructor(private userService: UsuarioService) {
  //   this.userPool = new CognitoUserPool(poolData);
  // }

  // /**
  //  * Call Cognito service and validate user credentials
  //  * @param username Username
  //  * @param password Password
  //  * @param callback Callback
  //  */
  // signin(
  //   username: string,
  //   password: string,
  //   callback: IAuthenticationCallback
  // ): void {
  //   let authenticationDetails = new AuthenticationDetails({
  //     Username: username,
  //     Password: password,
  //   });

  //   let userData = { Username: username, Pool: this.userPool };

  //   var cognitoUser = new CognitoUser(userData);
  //   cognitoUser.authenticateUser(authenticationDetails, callback);
  // }

  // /**
  //  * Call Cognito service and register new user
  //  * @param username User to login
  //  * @param password User password
  //  * @param user User name
  //  * @param callback Function callback
  //  */
  // signup(
  //   username: string,
  //   password: string,
  //   user: CognitoUsers.UserRegistration,
  //   callback: NodeCallback<Error, ISignUpResult>
  // ) {
  //   let attributeList = [];

  //   for (let key in user) {
  //     let attrData = {
  //       Name: key,
  //       Value: user[key],
  //     };
  //     const attribute = new CognitoUserAttribute(attrData);
  //     attributeList.push(attribute);
  //   }

  //   this.userPool.signUp(username, password, attributeList, [], callback);
  // }

  // /**
  //  * Call cognito forgot password functino
  //  * @param username Username to recovery password
  //  * @param callback Callback functions with logic to set input verification code and error/success
  //  */
  // forgotpassword(username: string, callback: any) {
  //   let userData = { Username: username, Pool: this.userPool };
  //   let cognitoUser = new CognitoUser(userData);

  //   cognitoUser.forgotPassword(callback);
  // }

  // /**
  //  * Call cognito function to set new password
  //  * @param username Username to set new password
  //  * @param verificationCode User verification code received
  //  * @param newPassword New password
  //  * @param callbacks Callback functions
  //  */
  // confirmPassword(
  //   username: string,
  //   verificationCode: string,
  //   newPassword: string,
  //   callbacks: any
  // ) {
  //   let userData = { Username: username, Pool: this.userPool };
  //   let cognitoUser = new CognitoUser(userData);
  //   cognitoUser.confirmPassword(verificationCode, newPassword, callbacks);
  // }

  // /**
  //  * Check if current user is logged in
  //  * @returns true or false
  //  */
  // isLoggedIn(): boolean {
  //   let isAuth = false;

  //   const userPool = new CognitoUserPool(poolData);
  //   const cognitoUser = userPool.getCurrentUser();

  //   if (cognitoUser != null) {
  //     cognitoUser.getSession((err: any, session: any) => {
  //       if (err) {
  //         alert(err.message || JSON.stringify(err));
  //       }
  //       isAuth = session.isValid();
  //     });
  //   }
  //   return isAuth;
  // }
  // /**
  //  * Gets current cognito user logged
  //  * @returns Current CognitoUser
  //  */
  // getAuthenticatedUser(): CognitoUser {
  //   return this.userPool.getCurrentUser();
  // }

  // /**
  //  * Save session credentials into object
  //  * @param session Session from cognito response
  //  */
  // saveCredentials(session: CognitoUserSession) {
  //   this.accessToken = session.getAccessToken().getJwtToken();
  //   this.idToken = session.getIdToken().getJwtToken();
  // }
  // /**
  //  * Save dynamo user logged information
  //  * @param session Cognito user session
  //  */
  // saveUserLogged(session: CognitoUserSession) {
  //   const reqOptions =  new RequestOptions();
  //   reqOptions.silent = true;
    
  //   this.userService
  //     .getByEmail(session.getIdToken().payload.email, reqOptions)
  //     .pipe(tap((data) => (this.userID = data[0].EntityID)))
  //     .subscribe();
  // }

  // /** Get accessToken from localstorage*/
  // public get accessToken(): string {
  //   return localStorage.getItem('access_token');
  // }
  // /** Set accessToken to local storage*/
  // public set accessToken(value: string) {
  //   if (value === null) {
  //     localStorage.removeItem('access_token');
  //   } else {
  //     localStorage.setItem('access_token', value);
  //   }
  // }
  // /**
  //  * Get Id Token from localstorage
  //  */
  // public get idToken(): string {
  //   return localStorage.getItem('id_token');
  // }
  // /**
  //  * Set Id Token from localstorage
  //  */
  // public set idToken(value: string) {
  //   if (value === null) {
  //     localStorage.removeItem('id_token');
  //   } else {
  //     localStorage.setItem('id_token', value);
  //   }
  // }
  //   /** Get user entity ID from localstorage*/
  // public get userID(): string {
  //   return localStorage.getItem('user_id');
  // }
  // /** Set user entity id to local storage*/
  // public set userID(value: string) {
  //   if (value === null) {
  //     localStorage.removeItem('user_id');
  //   } else {
  //     localStorage.setItem('user_id', value);
  //   }
  // }
}
