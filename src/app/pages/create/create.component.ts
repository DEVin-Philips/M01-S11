import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  @ViewChild('inputNomeTag') inputNome: any;
  @ViewChild('inputDiretorTag') inputDiretor: any;

  boleano: boolean = false;

  filme: any = {
    nome: '',
    diretor: '',
    dataLancamento: '',
    nota: 0,
    favorito: false,
  };
  isEdit: boolean = false;

  constructor(
    private movieService: MoviesService,
    private router: Router
  ) {
    // Para capturar o dado enviado pelo modulo de rota é utilizado o getCurrentNavigation()
    if (router.getCurrentNavigation()?.extras.state) {
      // Como o método acima não é reconhecido fora do constructor precisei criara
      // uma variável para diferenciar os métodos de edição do de criação
      this.isEdit = true;
      this.filme = router.getCurrentNavigation()?.extras.state;
    }
  }

  ngOnInit(): void {}

  verificaNome() {
    if (this.inputNome) {
      let hasPristine = [...this.inputNome.nativeElement.classList].includes(
        'ng-pristine'
      );
      if (!hasPristine && this.filme.nome.length <= 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  verificaDiretor() {
    if (this.inputDiretor) {
      let hasPristine = [...this.inputDiretor.nativeElement.classList].includes(
        'ng-pristine'
      );
      let hasInvalid = [...this.inputDiretor.nativeElement.classList].includes(
        'ng-invalid'
      );
      if (hasInvalid && !hasPristine) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  salvar() {
    if (this.isEdit) {
      this.movieService.edit(this.filme);
    } else {
      this.movieService.create(this.filme);
    }
  }
}
