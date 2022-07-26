/* Sudoku Table;
	0 1 2 | 3 4 5 | 6 7 8 ;
A _ _ _ | _ _ _ | _ _ _ ;
B _ _ _ | _ _ _ | _ _ _;
C _ _ _ | _ _ _ | _ _ _;
--------------------------;
D _ _ _ | _ _ _ | _ _ _;
E _ _ _ | _ _ _ | _ _ _;
F _ _ _ | _ _ _ | _ _ _;
--------------------------;
G _ _ _ | _ _ _ | _ _ _;
H _ _ _ | _ _ _ | _ _ _;
I _ _ _ | _ _ _ | _ _ _;
;
A 3 (4) 2 | _ _ 9 | _ _ _ ;
B 7 9 _ | 1 _ _ | 6 _ _;
C  _ 1 5 | _ _ 2 | _ 7 _;
--------------------------;
D  9 8 _ | 2 _ 5 | 6 _ _;
E  _ (2) 6 | _ 9 3 | _ _ 8;
F _ 7 _ | 8 6 _ | _ _ _;
---------------------------;
G _ 6 _ | _ 2 _ | 3 _ 1;
H 2 (3) _ | _ _ 7 | 5 _ 6;
I  8 5 _ | _ 3 6 | _ _ _;
Possible values for cell b2 are 3,4,8;
Possible values for cell c0 are 4,6;
*/;
/*;
var $arr = {};
$arr.a0=3;
$arr.a2=2;
$arr.a5=9;
$arr.b0=7;
$arr.b1=9;
$arr.b3=1;
$arr.b6=6;
$arr.c1=1;
$arr.c2=5;
$arr.c5=2;
$arr.c7=7;
$arr.d0=9;
$arr.d1=8;
$arr.d3=2;
$arr.d5=5;
$arr.d7=6;
$arr.e2=6;
$arr.e4=9;
$arr.e5=3;
$arr.e8=8;
$arr.f1=7;
$arr.f3=8;
$arr.f4=6;
$arr.g1=6;
$arr.g4=2;
$arr.g6=3;
$arr.g8=1;
$arr.h0=2;
$arr.h5=7;
$arr.h6=5;
$arr.h8=6;
$arr.i0=8;
$arr.i1=5;
$arr.i4=3;
$arr.i5=6;
*/
var $arr = {};
$arr.a0=3;
$arr.a6=8;
$arr.a7=2;
$arr.a8=4;
$arr.b0=9;
$arr.b2=7;
$arr.b5=4;
$arr.b6=6;
$arr.c1=2;
$arr.c3=6;
$arr.c6=3;
$arr.d2=2;
$arr.d3=3;
$arr.d5=1;
$arr.d8=8;
$arr.e1=7;
$arr.e2=3;
$arr.f0=1;
$arr.f1=9;
$arr.f3=4;
$arr.f4=7;
$arr.f6=5;
$arr.g2=4;
$arr.g3=7;
$arr.g4=6;
$arr.h0=7;
$arr.h1=1;
$arr.h2=6;
$arr.h3=5;
$arr.h4=9;
$arr.h7=8;
$arr.h7=7;
function finder($checkArr) {
	var $r,$c,$n,$ret,$loc,$out=[],$arrCount=Object.keys($checkArr).length;
	var $cr = ["a","b","c","d","e","f","g","h","i"];
console.log("Start Finder");
	for ($r = 0; $r < 9; $r++) {
		for ($c = 0; $c < 9; $c++) {
			$loc = $cr[$r] + $c;
			if ($checkArr[$loc] == null) {
				var $out=[];
				for ($n = 1; $n < 10; $n++) {
					check($cr[$r],$c,$n,$checkArr,($rv)=>$ret=$rv);
					if (($ret.col+$ret.row+$ret.output)== "") {
						$out[$out.length] = $n;
					} else {
					};
				};
				if ($out.length==1) {
console.log($loc + " value is "+ $out[$out.length-1]);
					$checkArr[$cr[$r] + $c] = $out[$out.length-1];
				} else {
console.log("Possible values for cell "+$loc+" are "+ $out);
				};
			};
		};
	};
	if (Object.keys($checkArr).length == $arrCount) {
		for ($r = 0; $r < 9; $r++) {
			for ($c = 0; $c < 9; $c++) {
				$loc = $cr[$r] + $c;
				var $out=[];
				if ($checkArr[$loc] == null) {
					for ($n = 1; $n < 10; $n++) {
						var $r2=[],$r3=[];
						check($cr[$r],$c,$n,$checkArr,($rv)=>$ret=$rv);
						checkEnnerant($ret["ennerantA"],$n,$checkArr,($rv)=> $r2.a= $rv)
						checkEnnerant($ret["ennerantB"],$n,$checkArr,($rv)=> $r2.b= $rv)
						checkEnnerant($ret["ennerantC"],$n,$checkArr,($rv)=> $r3.a= $rv)
						checkEnnerant($ret["ennerantD"],$n,$checkArr,($rv)=> $r3.b= $rv)
						if (($r2.a!="" && $r2.b!="" || $r3.a!="" && $r3.b!="") && (($ret.col+$ret.row+$ret.output)== "")){
								$out[$out.length] = $n;
						} else {
						};
					};
				};
				if ($out.length==1) {
console.log($loc + " value from ennerant is "+ $out[$out.length-1]);
						$checkArr[$loc] = $out[$out.length-1];
				} else {
console.log("Possible values from ennerant for cell "+$loc+" are "+ $out);
				};
			};
		};
function addToGrid($checkArr) {
	var $checkRow = ["a","b","c","d","e","f","g","h","i"],$output="",i;
	for (i = 0; i <=8; i++) {
		for (j = 0; j <=8; j++) {
			var $loc = ($checkRow[i]+""+j);
			var $val = $checkArr[$loc];
			if ($val == null) {
				writeElement($loc,"");
			} else {
				writeElement($loc,$val);
			};
		};
	};
};
function readFromGrid($checkArr) {
	var $checkRow = ["a","b","c","d","e","f","g","h","i"],$output="",i;
	for (i = 0; i <=8; i++) {
		for (j = 0; j <=8; j++) {
			var $loc = ($checkRow[i]+""+j);
			$checkArr[$loc] = readElement($loc);
			if ($checkArr[$loc]==""){delete $checkArr[$loc]};
		};
	};
};
function checkCol($col,$checkNum,$checkArr,$returnVar,$start=0,$end=8) {
	var $checkRow = ["a","b","c","d","e","f","g","h","i"],$output="",i;
	for (i = $start; i <= $end; i++) {
		if ($checkArr[$checkRow[i]+$col] == $checkNum) {
			$output += $checkRow[i]+$col+",";
		} else {
		};
	};
	return $returnVar($output);
};
function checkRow($row,$checkNum,$checkArr,$returnVar,$start=0,$end=8) {
	var $output="",i;
	for (i = $start; i <= $end; i++) {
		if ($checkArr[$row+i] == $checkNum) {
			$output += $row+i+",";
		} else {
		};
	};
	return $returnVar($output);
};
function checkEnnerant($ennerant,$checkNum,$checkArr,$returnVar) {
	var $checkRow = ["a","b","c","d","e","f","g","h","i"],$output="";

	switch ($ennerant){
		case 1:
			var $cStart=0,$rStart=0;
		break;
		case 2:
			var $cStart=0,$rStart=3;
		break;
		case 3:
			var $cStart=0,$rStart=6;
		break;
		case 4:
			var $cStart=3,$rStart=0;
		break;
		case 5:
			var $cStart=3,$rStart=3;
		break;
		case 6:
			var $cStart=3,$rStart=6;
		break;
		case 7:
			var $cStart=6,$rStart=0;
		break;
		case 8:
			var $cStart=6,$rStart=3;
		break;
		case 9:
			var $cStart=6,$rStart=6;
		break;
		default:
		console.log("Err ennerant: "+$ennerant)
	}
	var $cEnd = $cStart +2;
	var $rEnd = $rStart +2;
	
	checkCol($rStart,$checkNum,$checkArr,($rv)=> $output += $rv,$cStart,$cEnd);
	checkCol($rStart+1,$checkNum,$checkArr,($rv)=> $output += $rv,$cStart,$cEnd);
	checkCol($rStart+2,$checkNum,$checkArr,($rv)=> $output += $rv,$cStart,$cEnd);
	checkRow($checkRow[$cStart],$checkNum,$checkArr,($rv)=> $output += $rv,$rStart,$rEnd);
	checkRow($checkRow[$cStart+1],$checkNum,$checkArr,($rv)=> $output += $rv,$rStart,$rEnd);
	checkRow($checkRow[$cStart+2],$checkNum,$checkArr,($rv)=> $output += $rv,$rStart,$rEnd);
	return $returnVar($output);
};
function check($row,$col,$checkNum,$checkArr,$returnVar) {
	var $o=[],$rv;
	checkCol($col,$checkNum,$checkArr,($rv)=> $o["col"] = $rv);
	checkRow($row,$checkNum,$checkArr,($rv)=> $o["row"] = $rv);
	if ($row == "a" || $row == "b" || $row == "c"){
		if ($col >= 0 && $col <= 2){
			$o["ennerant"]=1;
			$o["ennerantA"]=2;
			$o["ennerantB"]=3;
			$o["ennerantC"]=4;
			$o["ennerantD"]=7;
		} else if ($col >= 3 && $col <= 5){
			$o["ennerant"]=2;
			$o["ennerantA"]=1;
			$o["ennerantB"]=3;
			$o["ennerantC"]=5;
			$o["ennerantD"]=8;
		} else if ($col >= 6 && $col <= 8){
			$o["ennerant"]=3;
			$o["ennerantA"]=1;
			$o["ennerantB"]=2;
			$o["ennerantC"]=6;
			$o["ennerantD"]=9;
		};
	} else if ($row == "d" || $row == "e" || $row == "f"){
		if ($col >= 0 && $col <= 2){
			$o["ennerant"]=4;
			$o["ennerantA"]=5;
			$o["ennerantB"]=6;
			$o["ennerantC"]=1;
			$o["ennerantD"]=7;
		} else if ($col >= 3 && $col <= 5){
			$o["ennerant"]=5;
			$o["ennerantA"]=4;
			$o["ennerantB"]=6;
			$o["ennerantC"]=2;
			$o["ennerantD"]=8;
		} else if ($col >= 6 && $col <= 8){
			$o["ennerant"]=6;
			$o["ennerantA"]=4;
			$o["ennerantB"]=5;
			$o["ennerantC"]=3;
			$o["ennerantD"]=9;
		};
	} else if ($row == "g" || $row == "h" || $row == "i"){
		if ($col >= 0 && $col <= 2){
			$o["ennerant"]=7;
			$o["ennerantA"]=8;
			$o["ennerantB"]=9;
			$o["ennerantC"]=1;
			$o["ennerantD"]=4;
		} else if ($col >= 3 && $col <= 5){
			$o["ennerant"]=8;
			$o["ennerantA"]=7;
			$o["ennerantB"]=9;
			$o["ennerantC"]=2;
			$o["ennerantD"]=5;
		} else if ($col >= 6 && $col <= 8){
			$o["ennerant"]=9;
			$o["ennerantA"]=7;
			$o["ennerantB"]=8;
			$o["ennerantC"]=3;
			$o["ennerantD"]=6;
		};
	};
	checkEnnerant($o["ennerant"],$checkNum,$checkArr,($rv)=> $o["output"] = $rv)
	return $returnVar($o);
};
	};
};


/*
checkEnnerant($ret["ennerantA"],$checkNum,$checkArr,($rv)=> $o["output"] = $rv)
checkEnnerant($ret["ennerantB"],$checkNum,$checkArr,($rv)=> $o["output"] = $rv)
checkEnnerant($ret["ennerantC"],$checkNum,$checkArr,($rv)=> $o["output"] = $rv)
checkEnnerant($ret["ennerantD"],$checkNum,$checkArr,($rv)=> $o["output"] = $rv)

*/

//for (i=0;i<9;i++){check("a",1,i,$arr,($rv)=>console.log(i+" at "))};
