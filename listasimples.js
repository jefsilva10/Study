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
}

const trem = new ListaEncadeada();
console.log(trem.insertFirst('Locomotiva'));
console.log(trem.insertLast('Vagao 1'));
console.log(trem.insertLast('Vagao 2'));
