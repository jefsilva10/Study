const meuConjunto = new Set();

const times = ['São Paulo', 'Flamento', 'Fluminense', 'Palmeiras', 'São Paulo'];
const meuCampeonato = new Set(times);

console.table(meuCampeonato);
meuConjunto.add('Gabriel');
meuConjunto.add('Gabriel');
meuConjunto.add(2022);
meuConjunto.add(true);
meuConjunto.add(true);
meuConjunto.add(['Gabriel', 'Vanessa']);
const cdfs = ['Gabriel', 'Vanessa'];
meuConjunto.add(cdfs);
console.table(meuConjunto);
