import {User} from "./user";
import {Base} from "../util/base";

export class Token extends Base{

  public jwt: string
  public expiredAt: Date
  public createdAt: Date
  public user: User


  constructor() {
    super();
    this.jwt = "";
    this.expiredAt = new Date();
    this.createdAt = new Date();
    this.user = new User();
  }
}
