import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null || isNaN(value)) return ''; // 유효하지 않은 값이면 빈 문자열 반환

    // 숫자를 원화 형식으로 변환하여 반환
    return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원';
  }
}
