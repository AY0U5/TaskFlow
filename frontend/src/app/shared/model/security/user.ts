import {Authority} from "./authority";

export class User {

  public id:null | number
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
    this.id = null
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
