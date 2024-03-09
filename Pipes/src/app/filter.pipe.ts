import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string): unknown {
    if (value.length === 0 || filterString === '') return value;

    const filteredArray = [];
    for (let item of value) {
      console.log(item, filterString);
      if (item.status === filterString) filteredArray.push(item);
    }
    console.log(filteredArray);
    return filteredArray;
  }
}
