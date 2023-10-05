import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider
} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private auth: Auth,
  ) { }

  // Registrar Usuario
  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Login de usuario
  loginUser ({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Cerrar sesion
  logout() {
    return signOut(this.auth);
  }

  // Registro con Google
  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

}
