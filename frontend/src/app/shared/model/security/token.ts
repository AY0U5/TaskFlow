import {User} from "./user";

export class Token {

  public id: null | number
  public jwt: string
  public expiredAt: Date
  public createdAt: Date
  public user: User


  constructor() {
    this.id = null
    this.jwt = "";
    this.expiredAt = new Date();
    this.createdAt = new Date();
    this.user = new User();
  }
}
