

let names = [ 'Sarvar', 'Ibragim', 'Odil', 'Anvar'];

for(let key in names) {
	// console.log(names[key]);

	// Metod splice(nomer yacheyki, kollichestvo yacheyek) - udalayet vibranniye yacheyki c massiva.

	// names[key] == 'Sarvar' ? names.splice(key, 2) : ''; tun nachinayet udalit posle pervogo massiva (Ibragim i Odil udalitsya)
	
	names[key] == 'Sarvar' ? names.splice(0, 5) : '';/* '' - eto zaglushka ona stavitsya obyazatelna. Tut nachinayet udalit snachala  */

}
	console.log(names);