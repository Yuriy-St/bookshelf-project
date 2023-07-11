import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';

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
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );
      await this.#updateUser(userCredential.user);
      return userCredential;
    } catch (err) {
      throw err;
    }
  }

  async #updateUser(currentUser) {
    if (currentUser) {
      try {
        await updateProfile(currentUser, {
          displayName: this.name,
          photoURL:
            'https://icons.veryicon.com/png/o/miscellaneous/rexhangiconfont/1-personal-center-20x20.png',
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  async signInUser() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );
      return userCredential;
    } catch (err) {
      throw err;
    }
  }

  async logout() {
    try {
      await this.auth.signOut();
      return true;
    } catch (err) {
      throw err;
    }
  }
}

export default Authentication;
