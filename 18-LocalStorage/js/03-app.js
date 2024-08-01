localStorage.removeItem('nombre')

//actualizar un registro en localstorage

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('abril','mayo');
console.log(mesesArray);
localStorage.setItem('meses',JSON.stringify(mesesArray))

localStorage.clear();