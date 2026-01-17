import {Authority} from "./authority";

export class User {

  public id:null | number
  public firstName:string
  public lastName:string
  public username:string
  public password:string
  public logName:string
  public enabled:null |boolean
  public accountNonLocked:null |boolean
  public accountNonExpired:null |boolean
  public credentialsNonExpired:null |boolean
  public teamUsers : Array<TeamUser>
  public authorities: Array<Authority>


  constructor() {
    this.id = null
    this.firstName = "";
    this.lastName = "";
    this.username = "";
    this.password = "";
    this.logName = "";
    this.teamUsers = new Array<TeamUser>();
    this.authorities = new Array<Authority>();
  }
}
