import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: boolean = false
  constructor(public afAuth: AngularFireAuth) { 
    //afAuth.authState.subscribe(user => this.isLogged = user);
  }

  async onLogin(user:User) {
    try{
      const credential = await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
      this.isLogged = true;
      return credential;
    } catch (error) {
      console.log('Login failed', error);
      throw error;
    }
  }

  async onRegister(user:User) {
    try{
      const credential = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
      this.isLogged = false;
      return credential;
    } catch (error) {
      console.log('Register failed', error);
      throw error;
    }
  }

  onLogout() {
    try{
      this.afAuth.signOut();
      this.isLogged = false;
    } catch (error) {
      console.log('Logout failed', error);
    }
  }

}
