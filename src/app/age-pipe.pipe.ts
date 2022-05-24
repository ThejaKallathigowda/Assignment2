import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {

  transform(value: Date): string {
  
    let today = moment();
    let birthdate = moment(value);
    let years = today.diff(birthdate, 'years');
    let age:string = years + " yr ";
    //age += today.subtract(years, 'years').diff(birthdate, 'months') + " mo"
     
  return age }

}
