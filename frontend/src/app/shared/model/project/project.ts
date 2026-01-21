import {Base} from "../util/base";
import {Team} from "../team/team";
import {ProjectStatus} from "../util/types";


export class Project extends Base{

  public name: string;
  public description: string;
  public createdDate : Date;
  public teams : Array<Team>;
  public status! : ProjectStatus;


  constructor() {
    super();
    this.name = "";
    this.description = "";
    this.createdDate = new Date();
    this.teams = new Array<Team>();
  }
}
