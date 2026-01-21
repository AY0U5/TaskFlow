import {Base} from "../util/base";
import {TeamUser} from "./team-user";

export class Team extends Base{

  public name : string
  public teamUsers : Array<TeamUser>


  constructor() {
    super();
    this.name = ''
    this.teamUsers = new Array<TeamUser>();
  }
}
