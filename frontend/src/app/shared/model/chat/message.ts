import {Base} from "../util/base";
import {User} from "../security/user";

export class Message extends Base{

  public content : string
  public sender : User
  public createdDate : Date
  public lastModifiedDate : Date


  constructor() {
    super();
    this.content = '';
    this.sender = new User();
    this.createdDate = new Date();
    this.lastModifiedDate = new Date();
  }
}
