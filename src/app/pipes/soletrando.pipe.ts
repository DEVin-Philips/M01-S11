import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soletrando'
})
export class SoletrandoPipe implements PipeTransform {

  //é no transform que ficará toda a lógica para o tratamento do dado passado
  transform(value: string): unknown {
    //'Meu nome'
    value = value.replace(/\s+/g, '');
    //'Meunome'
    let arrayCaracteres = value.split("");
    //["M", "e", "u"...]
    let retorno = arrayCaracteres.join("-");
    //'M-e-u ...'
    return retorno;
  }

}
