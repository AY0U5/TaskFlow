import {Base} from "../util/base";
import {User} from "../security/user";
import {NotificationType} from "../util/types";

export class Notification extends Base{

  public message : string;
  public recipient : User
  public notificationType! : NotificationType


  constructor() {
    super();
    this.message = '';
    this.recipient = new User();
  }
}
