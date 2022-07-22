//insertAt - insere um elemento(no) numa posicição indicada
//deleteAt - remove um elemento(no) numa posicição indicada
//searchAtt - encontra um elemento(no) numa posicição indicada
//traversal - percorre todos os elementos(nos)
//indexOf - retorna a posição de acordo com o valor do elemento(no)

class No {
  constructor(elemento) {
    this.elemento = elemento;
    this.proximo = undefined;
  }
}

class ListaEncadeada {
  constructor() {
    this.head = undefined;
  }

  insertFirst(elemento) {
    //insertFirst - insere um elemento(no) no inicio da lista
    const novo = new No(elemento);
    let atual;

    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      novo.proximo = atual;
      this.head = novo;
    }

    return elemento;
  }

  insertLast(elemento) {
    //insertLast - insere um elemento(no) no fim
    const novo = new No(elemento);
    let atual;

    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novo;
    }
    return elemento;
  }

  searchAt(posicao) {
    let atual = this.head;
    for (let i = 0; i < posicao && atual; i++) {
      atual = atual.proximo;
    }
    return atual;
  }

  insertAt(elemento, posicao) {
    const novo = new No(elemento);
    if (posicao == 0) {
      this.insertFirst(elemento);
    } else {
      const anterior = this.searchAt(posicao - 1);
      const atual = anterior.proximo;
      novo.proximo = atual;
      anterior.proximo = novo;
    }
    return elemento;
  }

  traversal() {
    if (!this.head) {
      return undefined;
    } else {
      let atual = this.head;
      let elementoLista = [];
      while (atual) {
        elementoLista.push(atual.proximo);
        atual = atual.proximo;
      }
      return elementoLista;
    }
  }

  deleteAt(posicao) {
    let atual = this.head;
    if (posicao == 0) {
      this.head = atual.proximo;
    } else {
      let anterior = atual;
      for (let i = 0; i < posicao; i++) {
        anterior = atual;
        atual = atual.proximo;
      }
      anterior.proximo = atual.proximo;
    }
    return posicao;
  }
}

const trem = new ListaEncadeada();
console.log(trem.insertFirst('Locomotiva'));
console.log(trem.insertLast('Vagao 1'));
console.log(trem.insertLast('Vagao 2'));
console.log(trem.searchAt(2));
console.log(trem.insertFirst('Vagao de Manobra'));
console.log(trem.insertAt('Novo Vagao', 2));
console.table(trem.traversal());
