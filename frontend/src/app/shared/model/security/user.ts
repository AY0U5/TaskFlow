import {Authority} from "./authority";
import {Base} from "../util/base";

export class User extends Base{

  public firstName:string
  public lastName:string
  public username:string
  public password:string
  public logName:string
  public enabled: true
  public accountNonLocked:true
  public accountNonExpired:true
  public credentialsNonExpired:true
  //public teamUsers : Array<TeamUser>
  public authorities: Array<Authority>


  constructor() {
    super();
    this.firstName = "";
    this.lastName = "";
    this.username = "";
    this.password = "";
    this.logName = "";
    this.enabled=true
    this.accountNonLocked=true
    this.accountNonExpired=true
    this.credentialsNonExpired=true
    //this.teamUsers = new Array<TeamUser>();
    this.authorities = new Array<Authority>();
  }
}
