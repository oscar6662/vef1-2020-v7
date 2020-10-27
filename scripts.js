/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;

/**
 * Byrja forrit.
 */
function start() {
  let option = prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“');
  if(option == 'kóða'){
	amounta();
  }else if(option == 'afkóða'){
	amountd();
  }else{
	  alert('Veit ekki hvaða aðgerð ' +${option}+ ' er. Reyndu aftur.')
	  start();
  }
  
}
function amounta() {
	let n = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]');
  if(n >=1 && n <=31){
	worda(n);
  }else{
	  alert(${n} 'er ekki heiltala á bilinu [1, 31]. Reyndu aftur.')
	  amounta();
  }
}
function amountd() {
	let n = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]');
  if(n >=1 && n <=31){
	wordd(n);
  }else{
	  alert(${n} 'er ekki heiltala á bilinu [1, 31]. Reyndu aftur.')
	  amountd();
  }
}
function worda(n) {
	var str = prompt('Gefðu upp strenginn sem á að kóða með hliðrun '+ ${n}:);
	str = str.toLocaleUpperCase();
	if(str != null){
		for(let i = 0;i<str.length;i++){
			if(LETTERS.includes(str[i])==false){
				alert('Þú gafst upp stafi sem ekki er hægt að kóða: '+${str[i]}+'. Reyndu aftur.');
				wordd();
			}
		}	  
		alert(encode(str, n));
  }else{
	  alert('Þú gafst ekki upp streng. Reyndu aftur.')
	worda();
	  
  }
}
function wordd(n) {
	var str = prompt('Gefðu upp strenginn sem á að afkóða með hliðrun '+ ${n}:);
	str = str.toLocaleUpperCase();
  if(str != null){
		for(let i = 0;i<str.length;i++){
			if(LETTERS.includes(str[i])==false){
				alert('Þú gafst upp stafi sem ekki er hægt að kóða: '+${str[i]}+'. Reyndu aftur.');
				wordd();
			}
		}
		alert(decode(str, n));
  }else{
	  alert('Þú gafst ekki upp streng. Reyndu aftur.')
	  wordd();
  }
}
// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits
start();

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n) {
	var result = "";
	for(let i = 0; i<str.length; i++){
		result += LETTERS[(LETTERS.indexOf(str[i])+parseInt(n))%32]; 
	}
	str=result;
  return str;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {
	var result = "";
	for(let i = 0; i<str.length; i++){
		result += LETTERS[(LETTERS.indexOf(str[i])-parseInt(n))%32]; 
	}
	str=result;
  return str;
}

console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');
