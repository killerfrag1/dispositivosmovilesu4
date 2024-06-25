import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  async loginWithEmail(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.error('Error during login', error);
      throw error;
    }
  }

  async signupWithEmail(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.error('Error during signup', error);
      throw error;
    }
  }

  async forgotPassword(email: string) {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
      console.log('Password reset email sent');
    } catch (error) {
      console.error('Error during password reset', error);
      throw error;
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      console.log('User logged out');
    } catch (error) {
      console.error('Error during logout', error);
      throw error;
    }
  }
}
