#ipmo C:\Dropbox\Code\ps1\blacksmith.ps1
#$b = gc C:\Dropbox\Data\Text\blacksmith.csv |convertfrom-csv 
$c = "A,B,C,D,E,F
2,1,b,1,3,1
r,2,1,r,4,q
k,k,1,r,k,k
k,q,1,2,q,1
3,b,1,q,2,1
3,2,q,q,1,4" 
$b = $c|convertfrom-csv 
$columns = "A,B,C,D,E,F" -split ","

$store = @()

#Brownie in tiny cube
#Mixed Veg in tiny cube
#Hamburger patty covered in bbq sauce
#OR precooked (leftover?) chicken patty
#Chicken Strips?
#Maro and Zara are Soulbound Lovers and that gives them +1 (or +2?) on any roll involving the other.

#$b | ft

function Return-Rows {
	param(
		[int]$item,
		[int]$row,
		[string]$col
	) 
	$out = 	$columns[$columns.IndexOf($column)]+($row + $item)+", "+
	$columns[$columns.IndexOf($column)]+($row - $item)+", "+
	$columns[$columns.IndexOf($column)+$item]+($row + $item)+", "+
	$columns[$columns.IndexOf($column)+$item]+($row - $item)+", "+
	$columns[$columns.IndexOf($column)+$item]+($row)+", "+
	$columns[$columns.IndexOf($column)-$item]+($row + $item)+", "+
	$columns[$columns.IndexOf($column)-$item]+($row - $item)+", "+
	$columns[$columns.IndexOf($column)-$item]+($row)
	$out
}

function Return-Rook {
	param(
		[int]$row,
		[string]$col
	) 
	$out = "A"+$row+", F"+$row+", "+$col+"0, "+$col+"5"
	$out
}

function Return-Bishop {
	param(
		[int]$row,
		[string]$col
	) 
	$out = "A"+$row+", F"+$row
	$out
}

function Return-Horse {
	param(
		[int]$row,
		[string]$column
	) 
	
	$out = ""
	[string]$columns[$columns.IndexOf($column)+1]+($row + 2)+", "+
	$columns[$columns.IndexOf($column)+2]+($row + 1)+", "+	
	$columns[$columns.IndexOf($column)-1]+($row + 2)+", "+
	$columns[$columns.IndexOf($column)-2]+($row + 1)+", "+
	$columns[$columns.IndexOf($column)+1]+($row - 2)+", "+
	$columns[$columns.IndexOf($column)+2]+($row - 1)+", "+
	$columns[$columns.IndexOf($column)-1]+($row - 2)+", "+
	$columns[$columns.IndexOf($column)-2]+($row - 1)
	
	$out
}

function Get-Blacksmith {
	
	for ($row=0;$row -lt $columns.count;$row++){
	$columns|%{
		$column=$_;
		$item=$b.($column)[$row];
		#[int]$row=2;
		[string]$out=$column+$row+" is "+$item+" can move to: ";
		switch($item){
			"1"{[int]$num = 1;$out += Return-Rows $num $row $column}
			"2"{[int]$num = 2;$out += Return-Rows $num $row $column}
			"3"{[int]$num = 3;$out += Return-Rows $num $row $column}
			"4"{[int]$num = 4;$out += Return-Rows $num $row $column}
			"k"{$out += Return-Horse $row $column}
			"b"{$out += Return-Bishop $row $column}
			"r"{$out += Return-Rook $row $column}
			"q"{$out += (Return-Rook $row $column) +", "+ (Return-Bishop $row $column)}
		}
		$store += $out -replace "[A-Z]-[0-9], ","" -replace " [0-9], "," " -replace " -[0-9], "," "
		$out = ""
	}
	}

	$store -replace "[A-Z]-[0-9], ","" -replace " [0-9], "," " -replace " -[0-9], "," "

	$store2 = "Spaces with 1 coverage or less: " +($store -split "," -split " " -replace "is","" | where {$_.length -eq 2}|group | where {$_.count -le 1}  |select -ExpandProperty name|where {$_.Chars(1) -le 5}) -join ", " 
	#$store2 = "Spaces with no coverage: " +($store -split "," -split " " | where {$_.length -eq 2}| where {$_ -notmatch "-"}| where {$_.Chars(1) -le 5}|group | where {$_.count -eq 1} |select -ExpandProperty name) -join ", "
	$store2
	
}




