function example1(price)
{
	var bird = <%=bird%>;
	var cat =  example2(document.getElementById('cat').value)
	pig = bird;
	val = pig + ((price - bird) / (cat/100))    
	val = Math.floor(val)
	return val;
}

function example2() 
{
	var price =  example3(document.getElementById('price').value)*1 ;
	var amount =  example3(price);
	if (price > 10){
    document.getElementById('foo').value =  example4(amount)
	}else{
		document.getElementById('foo').value =  0 ; 
	}
} 


function example3()
{
	var banana = 100 + parseFloat(document.getElementById('banana').value);
	var melon = parseFloat(document.getElementById('melon').value); 
	var apple = example4(document.getElementById('apple').value);
	if (melon >= banana && apple < kiwi) {
		document.getElementById('melon').style.backgroundColor = "#FFDDDD";
		document.getElementById('melon').style.color = "#000000";
	}
	else {
		document.getElementById('melon').style.backgroundColor = "#ffffff";
		document.getElementById('melon').style.color = "#000000";
	}
}

// function example1(ipchalamt)
// {
// 	//예정가격 = 노무비분 + (입찰가격 - 노무비) / 하한율
// 	var f1 =  document.form1 
// 	laboramt = <%=laboramt%>;
// 	var sajeongrate =  deletecomma(f1.sajeongrate.value)
// 	var yebiga =  deletecomma(f1.yebigichoamt.value)*1
// 	laboramt2 = laboramt;
// 	val = laboramt2 + ((ipchalamt - laboramt) / (sajeongrate/100))    
// 	val = Math.floor(val)
// 	return val;
// }
// function example2() 
// {
// 	f1 = document.form1;
// 	var sajeongrate =  deletecomma(f1.sajeongrate.value)
// 	var yejeongamt =  deletecomma(f1.yejeongamt.value)*1 ;
// 	var ipchalamt =  makeipchalamt(yejeongamt);
// 	if (yejeongamt > 10)   {
//         f1.yejeongamt_tuchal.value =  disp_comma(ipchalamt)
//         document.all.yejeongamt_tuchalhan.innerHTML =  converthan(String(Math.floor(ipchalamt))) +"원"; 
// 	}
// 	else	 {
// 		f1.yejeongamt_tuchal.value =  0 ; 
//         document.all.yejeongamt_tuchalhan.innerHTML = ""
// 	}
// } 

// function example3(ss)
// {
// f1 = document.form1
// 	yegabumuipre = 100 + parseFloat(f1.yegabumuipre.value)	
// 	yegabumuipost = 100 + parseFloat(f1.yegabumuipost.value)
// 	gichoyejeongrate = parseFloat(f1.gichoyejeongrate.value) 
// 	var  yejeongamt_tuchal = deletecomma(f1.yejeongamt_tuchal.value)
// 	if (gichoyejeongrate >= yegabumuipre && yejeongamt_tuchal < maxyegabumui) {
// 		f1.gichoyejeongrate.style.backgroundColor = "#FFDDDD";
// 		f1.yejeongamt_tuchal.style.backgroundColor = "#FFDDDD";
// 		f1.gichoyejeongrate.style.color = "#000000";
// 		f1.yejeongamt_tuchal.style.color = "#000000";
// 	}
// 	else {
// 		f1.gichoyejeongrate.style.backgroundColor = "#ffffff";
// 		f1.yejeongamt_tuchal.style.backgroundColor = "#ffffff";
// 		f1.gichoyejeongrate.style.color = "#000000";
// 		f1.yejeongamt_tuchal.style.color = "#000000";
// 	}
// 	if (ss != "none") {
// 		if (f1.bujokcheck.checked == true) 	{
// 			gichoyejeongrate = parseFloat(f1.gichoyejeongrate.value)
// 			if (gichoyejeongrate > yegabumuipre && yejeongamt_tuchal < maxyegabumui) {
// 				f1.gichoyejeongrateim.value =  f1.gichoyejeongrate.value
// 				f1.yejeongamtim.value =   f1.yejeongamt.value
// 				f1.yejeongamt_tuchalim.value =   f1.yejeongamt_tuchal.value
// 			}
// 		}
// 	}
// 	var  yejeongamt_tuchal =   deletecomma(f1.yejeongamt_tuchal.value)
// 	if (isnum(yejeongamt_tuchal) == false) {}
// 	else {
// 		if (yejeongamt_tuchal > maxyegabumui) {
// 			f1.yejeongamt_tuchal.value =  "예정가격 초과" ;
// 	        document.all.yejeongamt_tuchalhan.innerHTML =  ""; 
// 			f1.yejeongamt_tuchal.style.backgroundColor = "#FFDDDD";
// 			f1.yejeongamt_tuchal.style.color = "#000000";
// 		}
// 	}
// }
