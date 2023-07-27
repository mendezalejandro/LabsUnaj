import { Injectable } from "@angular/core";
import { IPerfil, Perfil } from "../models/profile.model";


/**
 * Service to manage the storage information
 */
@Injectable({ providedIn: 'root' })
export class LocalStorageService {


  constructor(
  ) { }
  //#region Profile
  /**
 * Sets a the user profile to the storage
 * @param p `Profile` to set
 */
  profileSet(p: IPerfil, withExpiration: boolean = false) {
    try {
      this.write('perfil', JSON.stringify(p));
      return true;
    } catch (error) {
      throw error;
    }
  }
  /**
   * Gets a profile from the storage
   * @returns `Profile` object
   */
  profileGet() {
    try {
      const data = this.read('perfil');
      //TODO: if null, error?
      if (data == null) return new Perfil();
      return JSON.parse(data) as IPerfil;
    } catch (error) {
      throw error;
    }
  }
  /**
   * Delete the profile from the storage
   */
  async profileDelete() {
    try {
      this.delete('perfil');
      return true;
    } catch (error) {
      throw error;
    }
  }
  //#endregion

  //#region private Functions
  /**
   * Writes into the local storage with encription
   * @param key to name the data
   * @param data to be stored
   */
  private write(key: string, data: string, skip: boolean = false, encryptionBreadcrum: string = 'x') {
    localStorage.setItem(key, data);
  }
  /**
   * read data from the local storage
   * @param key to be read
   * @returns data read
   */
  private read(key: string, skip: boolean = false, encryptionBreadcrum: string = 'x') {
    let data = localStorage.getItem(key);
    return data;
  }
  /**
   * deletes a registry from the local storage
   * @param key to be deleted
   */
  private delete(key: string) {
    localStorage.removeItem(key);
  }
  //#endregion
}