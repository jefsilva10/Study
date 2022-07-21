//isFull - retorna um boolean se a fila está cheia ou não
class Fila {
  constructor() {
    this.itens = [];
  }

  enqueue(item) {
    //enqueue - inserir um novo elemento na fila
    this.itens.push(item);
  }

  isEmpty() {
    //isEmpty - retorna um boolean se a fila está vazia ou não
    return this.itens.length == 0;
  }

  dequeue() {
    //dequeue - remove o primeiro elemento
    if (this.isEmpty()) return undefined;

    return this.itens.shift();
  }
  front() {
    //front/peek - retorna o primeiro elemento
    return this.itens[0];
  }
  rear() {
    //rear - retorna o último elemento
    return this.itens[this.itens.length - 1];
  }
}

const fila = new Fila();
console.log(fila.isEmpty());
fila.enqueue('Ferarri');
fila.enqueue('Fusca');
fila.enqueue('Del Rey');
fila.enqueue('HB20');
fila.dequeue();

console.table(fila.itens);
console.log(fila.isEmpty());
console.log(fila.front());
console.log(fila.rear());
