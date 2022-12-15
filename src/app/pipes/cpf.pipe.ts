import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  transform(valor: string, ocultar: boolean = false) {
    valor = valor.replaceAll('.', '');

    let novoValor = '';
    if(valor.length < 11){
      novoValor = valor.padEnd(11, '0');
    }else{
      novoValor = valor;
    }

    if(ocultar){
      // '111 222333 00'
      novoValor = 'xxx'+ novoValor.substring(3,9) + 'xx';
    }

    return novoValor;
  }
}
