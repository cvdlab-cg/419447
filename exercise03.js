var a = '';
for (i=1; i<=10; i++) {
	for (j=1; j<=10; j++) {
		(i===j)?(res=1):(res=0);
		(j===10)?(a+=res):(a+=res+', ');
	}
	a+="\n";
}
console.log(a);