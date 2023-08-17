import { User } from "../models/user.model";

export class Security {
  static set(user: User, token: string) {
    const data = JSON.stringify(user);

    localStorage.setItem('petshopuser', btoa(data));
    localStorage.setItem('petshoptoken', token);
  }

  static setUser(user: User) {
    const data = JSON.stringify(user);

    localStorage.setItem('petshopuser', btoa(data));
  }

  static setToken(token: string) {
    localStorage.setItem('petshoptoken', token);
  }

  static getUser() {
    const data = localStorage.getItem('petshopuser');
    if (data) return JSON.parse(atob(data));
    else return null;
  }

  static getToken() {
    const data = localStorage.getItem('petshoptoken');
    if (data) return data;
    else return null;
  }

  static hasToken() {
    if (this.getToken()) return true;
    else return false;
  }

  static clear() {
    localStorage.removeItem('petshopuser');
    localStorage.removeItem('petshoptoken');
  }
}
