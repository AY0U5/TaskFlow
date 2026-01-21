import {Base} from "../util/base";
import {Team} from "../team/team";
import { TaskStatus } from "../util/types";


export class Task extends Base{

  public name: string;
  public description: string;
  public team : Team;
  public status! : TaskStatus
  public createdAt : Date;
  public updatedAt : Date;
  public deadline : Date;


  constructor() {
    super();
    this.name =''
    this.description =''
    this.team = new Team();
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.deadline = new Date()
  }
}
