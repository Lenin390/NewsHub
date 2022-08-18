import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value: string, separateBy: string, index: number): unknown {
    let split_parts = value.split(separateBy);
    let LastSplit = split_parts.pop();
    // let LastSplit =value.substring(value.lastIndexOf(separateBy)) ;
    let FirstSplit = split_parts.join(separateBy);
    // let FirstSplit = value.substring(value.lastIndexOf(separateBy), - 1) ;
    let splitArray = [FirstSplit, LastSplit]
    return splitArray[index];

  }

}
