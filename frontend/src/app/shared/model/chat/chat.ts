import {Base} from "../util/base";
import {Message} from "./message";
import {Team} from "../team/team";

export class Chat extends Base{

  public team : Team
  public messages : Array<Message>


  constructor() {
    super();
    this.team = new Team()
    this.messages = new Array<Message>()
  }
}
