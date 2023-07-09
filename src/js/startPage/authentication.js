import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';

class Authentication {
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.auth = getAuth();
  }

  //register
  async registerUser() {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      await this.#updateUser(userCredential.user);
      return userCredential;
    } catch (err) {
      // add Notify lib
      throw err;
    }
  }

  async #updateUser(currentUser) {
    if (currentUser) {
      try {
        await updateProfile(currentUser, { displayName: this.name });
      } catch (err) {
        console.log(err);
      }
    }
  }

  async signInUser() {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, this.email, this.password);
      return userCredential;
    } catch (err) {
      console.log(err);
    }
  }
}

export default Authentication;
