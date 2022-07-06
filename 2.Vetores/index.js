const redesSociais = [
  //vetor
  'Instagram',
  'Youtube',
  'Facebook',
  'TikTok',
  'Twitter',
  'LinkedIn',
  'Pinterest',
];

const tiktok = redesSociais.indexOf('TikTok'); //exibe indice do elemento dentro das ''
console.log(tiktok);
console.log(redesSociais.includes('LinkedIn')); //exibe se elemento está contido no array.

for (let i = 0; i < redesSociais.length; i++) {
  // faz um looping afim de exibir todos os elementos do array
  console.log(redesSociais[i]);
}

for (const i in redesSociais) {
  //mesma funcao do "for" acima, como está interpolado o indice também é exibido.
  console.log(`${i}: ${redesSociais[i]}`);
}

for (const valor of redesSociais) {
  //mesma funcao do "for" acima.
  console.log(valor);
}

redesSociais.forEach((valor, indice, rede) => {
  //mesma funcao do "for" acima, 1 parametro exibe valor, 2, indice e 3 todo o vetor.
  console.log(valor);
  console.log(indice);
  console.log(rede);
});

let i = 0;
while (i < redesSociais.length) {
  console.log(redesSociais[i]);
  i++;
}
