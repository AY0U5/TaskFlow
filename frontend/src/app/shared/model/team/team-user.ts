import {Base} from "../util/base";
import {User} from "../security/user";
import {Team} from "./team";
import {Role} from "../util/types";


export class TeamUser extends Base{

  public user : User;
  public team : Team;
  public role! : Role


  constructor() {
    super();
    this.user = new User();
    this.team = new Team();
  }
}
