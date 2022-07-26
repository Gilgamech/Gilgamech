/* Sudoku Table
	0 1 2 | 3 4 5 | 6 7 8 
A _ _ _ | _ _ _ | _ _ _ 
B _ _ _ | _ _ _ | _ _ _
C _ _ _ | _ _ _ | _ _ _
--------------------------
D _ _ _ | _ _ _ | _ _ _
E _ _ _ | _ _ _ | _ _ _
F _ _ _ | _ _ _ | _ _ _
--------------------------
G _ _ _ | _ _ _ | _ _ _
H _ _ _ | _ _ _ | _ _ _
I _ _ _ | _ _ _ | _ _ _


A 3 _ 2 | _ _ 9 | _ _ _ 
B 7 9 _ | 1 _ _ | 6 _ _
C  _ 1 5 | _ _ 2 | _ 7 _
--------------------------
D  9 8 _ | 2 _ 5 | 6 _ _
E  _ _ 6 | _ 9 3 | _ _ 8
F _ 7 _ | 8 6 _ | _ _ _
---------------------------
G _ 6 _ | _ 2 _ | 3 _ 1
H 2 _ _ | _ _ 7 | 5 _ 6
I  8 5 _ | _ 3 6 | _ _ _


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
	var $cr = {};
	var $r,$c,$n,$ret,$out=[];
	$cr[0] = "a";
	$cr[1] = "b";
	$cr[2] = "c";
	$cr[3] = "d";
	$cr[4] = "e";
	$cr[5] = "f";
	$cr[6] = "g";
	$cr[7] = "h";
	$cr[8] = "i";

	for ($r = 0; $r < 9; $r++) {
//console.log($r)
		for ($c = 0; $c < 9; $c++) {
//console.log($c)
			if ($checkArr[$cr[$r] + $c] == null) {
//console.log("Checking cell " + $cr[$r] + $c)
				var $out=[];
				for ($n = 1; $n < 10; $n++) {
					//var $ret = null;
					$ret = check($cr[$r],$c,$n,$checkArr)
//console.log($n)
					if ($ret== null) {
//console.log($n + " was found at "+ $cr[$r] + $c)
					} else {
						$out[$out.length] = $n;
//console.log($n + " was " +$ret +" at "+ $cr[$r] + $c)
					}
//console.log("Length "+$out.length+", value is "+$out);
				}	
				if ($out.length==1) {
console.log($out[$out.length-1] + " is value for cell "+ $cr[$r] + $c)
					$checkArr[$cr[$r] + $c] = $out[$out.length-1];
				} else {
console.log("Possible values for cell "+$cr[$r] + $c+" are "+ $out)
				}
			}
		}
	}
}



function check($row,$col,$checkNum,$checkArr) {
	var i;
	var $output = "";
	var $ennearent;
	var $checkRow = {};
	$checkRow[0] = "a";
	$checkRow[1] = "b";
	$checkRow[2] = "c";
	$checkRow[3] = "d";
	$checkRow[4] = "e";
	$checkRow[5] = "f";
	$checkRow[6] = "g";
	$checkRow[7] = "h";
	$checkRow[8] = "i";

//Check row
	for (i = 0; i < 9; i++) {
		if ($checkArr[$checkRow[i]+$col] == $checkNum) {
			$output += $checkRow[i]+$col+",";
//console.log("row check: " + $checkRow[i]+$col + " = " + $checkNum)
		};
	}; //end for

//Check column
	var $checkCol;
	for ($checkCol = 0; $checkCol < 9; $checkCol++) {
		if ($checkArr[$row+$checkCol] == $checkNum) {
			$output += $row+$checkCol+",";
//console.log("col check: " + $row + $checkCol + " = " + $checkNum)
		};
	}	

//Check ennearent
if ($row == "a" || $row == "b" || $row == "c"){
	if ($col >= 0 && $col <= 2){
		$ennearent = 1;
	} else if ($col >= 3 && $col <= 5){
		$ennearent = 2;
	} else if ($col >= 6 && $col <= 8){
		$ennearent = 3;
	}
} else if ($row == "d" || $row == "e" || $row == "f"){
	if ($col >= 0 && $col <= 2){
		$ennearent = 4;
	} else if ($col >= 3 && $col <= 5){
		$ennearent = 5;
	} else if ($col >= 6 && $col <= 8){
		$ennearent = 6;
	}
} else if ($row == "g" || $row == "h" || $row == "i"){
	if ($col >= 0 && $col <= 2){
		$ennearent = 7;
	} else if ($col >= 3 && $col <= 5){
		$ennearent = 8;
	} else if ($col >= 6 && $col <= 8){
		$ennearent = 9;
	}
}
//console.log("ennearent = " + $ennearent)


//*
		switch ($ennearent){
			 case 1:
	for (i = 0; i < 3; i++) {
		if ($checkArr[$checkRow[i]+$col] == $checkNum) {
			$output += $checkRow[i]+$col+",";
//console.log("ennearent check: " + $checkRow[i]+$col + " = " + $checkNum)
		};
	}; //end for

	var $checkCol;
	for ($checkCol = 0; $checkCol < 3; $checkCol++) { 
		if ($checkArr[$row+$checkCol] == $checkNum) {
			$output += $row+$col+",";
//console.log("ennearent check: " + $row + $checkCol + " = " + $checkNum)
		};
	}	
			 break;
			 case 2:
	for (i = 0; i < 3; i++) {
		if ($checkArr[$checkRow[i]+$col] == $checkNum) {
			$output += $checkRow[i]+$col+",";
//console.log("ennearent check: " + $checkRow[i]+$col + " = " + $checkNum)
		};
	}; //end for

	var $checkCol;
	for ($checkCol = 3; $checkCol < 6; $checkCol++) {
		if ($checkArr[$row+$checkCol] == $checkNum) {
			$output += $row+$col+",";
//console.log("ennearent check: " + $row + $checkCol + " = " + $checkNum)
		};
	}	
			 break;
			 case 3:
	for (i = 0; i < 3; i++) {
		if ($checkArr[$checkRow[i]+$col] == $checkNum) {
			$output += $checkRow[i]+$col+",";
//console.log("ennearent check: " + $checkRow[i]+$col + " = " + $checkNum)
		};
	}; //end for

	var $checkCol;
	for ($checkCol = 6; $checkCol < 9; $checkCol++) { 
		if ($checkArr[$row+$checkCol] == $checkNum) {
			$output += $row+$col+",";
//console.log("ennearent check: " + $row + $checkCol + " = " + $checkNum)
		};
	}	
			 break;
			 case 4:
	for (i = 3; i < 6; i++) {
		if ($checkArr[$checkRow[i]+$col] == $checkNum) {
			$output += $checkRow[i]+$col+",";
//console.log("ennearent check: " + $checkRow[i]+$col + " = " + $checkNum)
		};
	}; //end for

	var $checkCol;
	for ($checkCol = 0; $checkCol < 3; $checkCol++) { 
		if ($checkArr[$row+$checkCol] == $checkNum) {
			$output += $row+$col+",";
//console.log("ennearent check: " + $row + $checkCol + " = " + $checkNum)
		};
	}	
			 break;
			 case 5:
	for (i = 3; i < 6; i++) {
		if ($checkArr[$checkRow[i]+$col] == $checkNum) {
			$output += $checkRow[i]+$col+",";
//console.log("ennearent check: " + $checkRow[i]+$col + " = " + $checkNum)
		};
	}; //end for

	var $checkCol;
	for ($checkCol = 3; $checkCol < 6; $checkCol++) {
		if ($checkArr[$row+$checkCol] == $checkNum) {
			$output += $row+$col+",";
//console.log("ennearent check: " + $row + $checkCol + " = " + $checkNum)
		};
	}	
			 break;
			 case 6:
	for (i = 3; i < 6; i++) {
		if ($checkArr[$checkRow[i]+$col] == $checkNum) {
			$output += $checkRow[i]+$col+",";
//console.log("ennearent check: " + $checkRow[i]+$col + " = " + $checkNum)
		};
	}; //end for

	var $checkCol;
	for ($checkCol = 6; $checkCol < 9; $checkCol++) { 
		if ($checkArr[$row+$checkCol] == $checkNum) {
			$output += $row+$col+",";
//console.log("ennearent check: " + $row + $checkCol + " = " + $checkNum)
		};
	}	
			 break;
			 case 7:
	for (i = 6; i < 9; i++) {
		if ($checkArr[$checkRow[i]+$col] == $checkNum) {
			$output += $checkRow[i]+$col+",";
//console.log("ennearent check: " + $checkRow[i]+$col + " = " + $checkNum)
		};
	}; //end for

	var $checkCol;
	for ($checkCol = 0; $checkCol < 3; $checkCol++) { 
		if ($checkArr[$row+$checkCol] == $checkNum) {
			$output += $row+$col+",";
//console.log("ennearent check: " + $row + $checkCol + " = " + $checkNum)
		};
	}	
			 break;
			 case 8:
	for (i = 6; i < 9; i++) {
		if ($checkArr[$checkRow[i]+$col] == $checkNum) {
			$output += $checkRow[i]+$col+",";
//console.log("ennearent check: " + $checkRow[i]+$col + " = " + $checkNum)
		};
	}; //end for

	var $checkCol;
	for ($checkCol = 3; $checkCol < 6; $checkCol++) {
		if ($checkArr[$row+$checkCol] == $checkNum) {
			$output += $row+$col+",";
//console.log("ennearent check: " + $row + $checkCol + " = " + $checkNum)
		};
	}	
			 break;
			 case 9:
	for (i = 6; i < 9; i++) {
		if ($checkArr[$checkRow[i]+$col] == $checkNum) {
			$output += $checkRow[i]+$col+",";
//console.log("ennearent check: " + $checkRow[i]+$col + " = " + $checkNum)
		};
	}; //end for

	var $checkCol;
	for ($checkCol = 6; $checkCol < 9; $checkCol++) { 
		if ($checkArr[$row+$checkCol] == $checkNum) {
			$output += $row+$col+",";
//console.log("ennearent check: " + $row + $checkCol + " = " + $checkNum)
		};
	}	
			 break;
			 default:
			 console.log("ERR ennearent = " + $ennearent);
			 break;
		}; //end switch
//*/


//Present output
	if ($output == "") {
		return ("not Found")
		//console.log("Not found.")
	} else {
		//return ($checkNum + " was found at " + $output)
	}	
};




