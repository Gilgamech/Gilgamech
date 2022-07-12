var $btcMedian = 0
var $ltcMedian = 0
var $ethMedian = 0
var $btcOld = 0
var $ltcOld = 0
var $ethOld = 0
var $fbcOld = 0
var $tradeFee = 4
var $botFee = 1
var $time
var $btc
var $ltc
var $fbc
var $eth
var $coin2 = "Data loading..."
var $botCounter = 0
var $assetCounter = 0

//Get data from URLs, add to array, do math against old array, output. 
//Have function get data from URL and output.

function loadCoinData () {
  try {
	loadJSON("https://api.coinbase.com/v2/time", function($response) { $time = $response.data});
	loadJSON("https://api.coinbase.com/v2/prices/BTC-USD/buy", function($response) { $btc = $response.data});
	loadJSON("https://api.coinbase.com/v2/prices/LTC-USD/buy", function($response) { $ltc = $response.data});
	loadJSON("https://api.coinbase.com/v2/prices/ETH-USD/buy", function($response) { $eth = $response.data});
	loadJSON("https://gil-api.herokuapp.com/fakecoin", function($response) { $fbc = $response.data});
  }catch(e){console.log(e)};
}; // end loadCoinData
	
function updateCoinsole ($outputTextBox) {
  try {
  var $today = new Date();
    $iso = $time.iso || $today;
    $coin2 = $iso + lineBreak;
  }catch(e){console.log(e)};
  try {
	$coin2 += $eth.base + " | " + $eth.amount  + " | " + (Math.round(($eth.amount - $ethOld)*100)/100)+ lineBreak;
  }catch(e){console.log(e)};
  try {
	$coin2 += $ltc.base + " | " + $ltc.amount  + " | " + (Math.round(($ltc.amount - $ltcOld)*100)/100) + lineBreak;
  }catch(e){console.log(e)};
  try {
	$coin2 += $fbc.base + " | " + $fbc.amount  + " | " + (Math.round(($fbc.amount - $fbcOld)*100)/100) + lineBreak;
  }catch(e){console.log(e)};
  try {
	$coin2 += $btc.base + " | " + $btc.amount  + " | " + (Math.round(($btc.amount - $btcOld)*100)/100)+ lineBreak;
  }catch(e){console.log(e)};
  try {
    document.getElementById($outputTextBox).innerText  = $coin2 + document.getElementById($outputTextBox).innerText
  }catch(e){console.log(e)};
}; // end updateCoinsole

function updateCointent () {
  try {
    document.getElementById('btcAmount').value = $btc.amount
    document.getElementById('ltcAmount').value = $ltc.amount
    document.getElementById('ethAmount').value = $eth.amount
    document.getElementById('fbcAmount').value = $fbc.amount
  }catch(e){console.log(e)};
}; // end updateCointent

function fruitbotChooses($coin,$oldCoin,$coinMedian,$coinMedianDiv,$botAmountDiv,$botActionDiv, callback) {
	var $coinAmount = $coin.amount
	try {
		if ($coinMedian) {$coinMedian++} else {$coinMedian = $coinAmount};
		if ($coinAmount < $coinMedian && $coinAmount > $oldCoin) {
			$action = "BUY"
			$coinAmount += ($coinAmount - $tradeFee)
			loadJSON("https://gil-api.herokuapp.com/fakecoinsell", function($response) { 
			$fbc = $response.data
			document.getElementById("fbcBotAmount").innerText = Math.round((getNumberFromDiv("simplebotfbcBotAmount") + $fbc.amount - $botFee)*100)/100
			document.getElementById("fbcBotAction").value = "SELL"
			}); //end loadJSON
		} else {
			if ($coinAmount + $tradeFee > $coinMedian && $coinAmount < $oldCoin) {
				$action = "SELL";
				$coinMedian--;
				$coinAmount -= ($coinAmount - $tradeFee);
				loadJSON("https://gil-api.herokuapp.com/fakecoinbuy", function($response) { 
				$fbc = $response.data;
				document.getElementById("fbcBotAmount").innerText = Math.round((getNumberFromDiv("simplebotfbcBotAmount") - $fbc.amount - $botFee)*100)/100
				document.getElementById("fbcBotAction").innerText = "BUY";
				}); //end loadJSON
			} else {
				$action = "HOLD";
			}; // end if $coinAmount
		}; // end if $coinAmount
		document.getElementById($botAmountDiv).innerText = $coinAmount
		document.getElementById($botActionDiv).innerText = $action
		document.getElementById($coinMedianDiv).innerText = $coinMedian
		
		$oldCoin = $coinAmount
		callback($oldCoin,$coinMedian)
	}catch(e){console.log(e)}; // end try 
}; // end fruitbotChooses

function simplebotChooses($coin,$botAmountDiv,$botActionDiv) {
// function fruitbotChooses($coin,$oldCoin,$coinMedian,$coinMedianDiv,$botAmountDiv,$botActionDiv, callback) {
	var $coinAmount = $coin.amount
    $expr = Math.round(Math.random() * 3);
switch ($expr) {
 case 1:
  $action = "BUY"
  $coinAmount += ($coinAmount - $tradeFee)
  try {
  loadJSON("https://gil-api.herokuapp.com/fakecoinsell", function($response) { 
    $fbc = $response.data;
	document.getElementById("simplebotfbcBotAmount").innerText = (Math.round(((document.getElementById("simplebotfbcBotAmount").innerText *1) + $fbc.amount - $botFee)*100)/100)
	document.getElementById("simplebotfbcBotAction").innerText = "SELL"
  });
	}catch(e){console.log(e)}; // end try 
 break;
 case 2:
  $action = "SELL"
  $coinAmount -= ($coinAmount - $tradeFee);
  try {
  loadJSON("https://gil-api.herokuapp.com/fakecoinbuy", function($response) { 
    $fbc = $response.data;
	document.getElementById("simplebotfbcBotAmount").innerText = (Math.round(((document.getElementById("simplebotfbcBotAmount").innerText *1) - $fbc.amount - $botFee)*100)/100)
	document.getElementById("simplebotfbcBotAction").innerText = "BUY";
  });
	}catch(e){console.log(e)}; // end try 
 break;
 default:
 $action = "HOLD"
}
  try {
  document.getElementById($botAmountDiv).innerText = $coinAmount
  document.getElementById($botActionDiv).innerText = $action
    //$coinOld = $coin.amount

	}catch(e){console.log(e)}; // end try 
}; // end simplebotChooses

function setMyBot() {
	$botName = document.getElementById("myBotLabel").innerText; 
	$buyVal = "11000"; // document.getElementById("myBotBuy").value; 
	$buyDir =  "below"; //document.getElementById("radioBuyAbove").checked;
	$sellVal = "12000"; //document.getElementById("myBotSell").value;
	$sellDir = "above"; //document.getElementById("radioSellAbove").checked; 
	$botOutput = {"botName":$botName,"buyVal":$buyVal,"buyDir":$buyDir,"sellVal":$sellVal,"sellDir":$sellDir};	
	document.getElementById("jsonArea").innerText = JSON.stringify($botOutput);
}; // end simplebotChooses

function getMyBot() {
	$botInput = JSON.parse(document.getElementById("jsonArea").innerText);
	document.getElementById("myBotLabel").innerText = $botInput.botName; 
	document.getElementById("myBotBuy").value = $botInput.buyVal; 
	document.getElementById("radioBuyAbove").checked = $botInput.buyDir; 
	document.getElementById("myBotSell").value = $botInput.sellVal; 
	document.getElementById("radioSellBelow").checked = $botInput.sellDir; 
}; // end simplebotChooses

function manualTransaction($coin,$direction,$divToUpdate) {
switch ($direction) {
 case "BUY":
  document.getElementById($divToUpdate).innerText = Math.round((((document.getElementById("btcMedian").innerText * 1) + $coin.amount - $botFee)*100)/100);
  loadJSON("https://gil-api.herokuapp.com/fakecoinsell", function($response) { 
    $fbc = $response.data
	document.getElementById("simplebotfbcBotAmount").innerText = Math.round((document.getElementById("btcMedian").innerText * 1) - (($coin.amount - $botFee)*100)/100);
	document.getElementById("fbcMedian").innerText = "SELL"
  });
 break;
 case "SELL":
  document.getElementById($divToUpdate).innerText = Math.round((((document.getElementById("btcMedian").innerText * 1) -  + $botFee)*100)/100);
  loadJSON("https://gil-api.herokuapp.com/fakecoinbuy", function($response) { 
    $fbc = $response.data
    Math.round((document.getElementById("simplebotfbcBotAmount").innerText * 1) - (($coin.amount - $botFee)*100)/100);
	document.getElementById("fbcMedian").innerText = "BUY";
  });
 break;
 default:
 $action = "HOLD"
}

}; // end simplebotChooses

function addBot($divBotName) {
	var $botName = document.getElementById($divBotName).innerText;
	
	var $coinAreaID = ($botName + 'CoinArea')
	var $coinAreaClass = 'img-rounded col-md-12 col-xs-12 contentRows dataArea row' ;
	var $titleRowID = ($botName + 'TitleRow')
	var $titleRowClass = 'row contentTitles';
	var $contentLabelID = ($botName + 'ContentLabel')
	var $contentLabelClass = 'col-md-6 col-xs-6';
	
	
	addDiv($coinAreaID,$coinAreaClass,'content');
	addDiv($titleRowID,$titleRowClass,$coinAreaID);
	addDiv($contentLabelID,$contentLabelClass,$titleRowID,$botName);
	$assetCounter++
	
	var $assetLabelID = ($botName + 'AssetLabel')
	var $assetLabelClass = 'col-md-4 col-xs-4 dataArea img-rounded contentRows';
	// addDiv($assetLabelID,$assetLabelClass,$titleRowID,"Asset"  + $assetCounter);
	 addDiv($assetLabelID,$assetLabelClass,$titleRowID,"Asset" + $assetCounter,'input');
	
	var $dropdownListName = ('items' + $assetCounter);
	document.getElementById($assetLabelID).setAttribute( "list", $dropdownListName);

	 addDiv($dropdownListName,"",$titleRowID,"",'datalist');
	 addDiv("","",$dropdownListName,"Asset" + $assetCounter,'option');
	 addDiv("","",$dropdownListName,"firefox",'option');
	// <input type=text list=browsers ><datalist id=browsers >   <option> Google   <option> IE9</datalist>
	// <input type="text" name="myText" value="Norway" selectBoxOptions="Canada;Denmark;Finland;Germany;Mexico;Norway;Sweden;United Kingdom;United States"> 


	var $buttonID = ($botName + 'AssetButton')
	var $buttonClass = 'btn btn-warning';
	var $onClick = "javascript: addBotRow('" + $assetLabelID + "','" + $coinAreaID + "');"
	addDiv($buttonID,$buttonClass,$titleRowID,'Add Asset','button',"","onclick",$onClick)
	// addDiv($divID,$divClass,$divParent,$innerText,$elementType,$href,$attributeType,$attributeAction) {
	
	var $button2ID = ($botName + 'DeleteButton')
	var $button2Class = 'btn btn-xs btn-danger';
	var $onClick = "javascript: removeDiv('" + $coinAreaID + "');"
	addDiv($button2ID,$button2Class,$titleRowID,'Del Bot','button',"","onclick",$onClick)	
	
	
	var $headerRow = ($botName + 'HeaderRow')
	var $headerClass = 'col-md-2 col-xs-2';
	
	addDiv($headerRow,"row contentLabels",$coinAreaID);
	addDiv(($botName + "headerCoin"),$headerClass,$headerRow,"Coin:");
	addDiv(($botName + "headerPrice"),$headerClass,$headerRow,"Price:");
	addDiv(($botName + "headerManualBuy"),$headerClass,$headerRow,"Manual Buy:");
	addDiv(($botName + "headerBotAmount"),$headerClass,$headerRow,"Bot Amount:");
	addDiv(($botName + "headerBotAction"),$headerClass,$headerRow,"Bot Action:");
	addDiv(($botName + "headerBotPred"),$headerClass,$headerRow,"Del Asset:");

	$assetName = document.getElementById($assetLabelID).innerText
	
	$botCounter++;
	document.getElementById($divBotName).innerText = $botName + $botCounter;
	
	var $spacerName = ("spacerrow" + $botCounter);
	var $spacerClass = 'col-md-12 col-xs-12 row' ;
	addDiv($spacerName,$spacerClass,'content'," ",'');
	addDiv("","",$spacerName," ",'br');
	addDiv("","",$spacerName," ",'br');

}; // end addBot

function addBotRow($assetLabelID,$parentDivName) {
	$assetName = document.getElementById($assetLabelID).value;

	//coinAreaRowID is the container for the row.
	var $coinAreaRowID = ($assetName + 'ContentRow');
	var $divClass = 'contentRows row';
	addDiv($coinAreaRowID,'row',$parentDivName);
	
	var $assetManualTrans = ($assetName + 'AssetManualTrans');
	var $divDeleteBot = ($assetName + 'DeleteButtonDiv');
	var $button2ID = ($assetName + 'DeleteButton');
	
	var $divClass = 'contentItems col-md-2 col-xs-2';
	addDiv(($assetName + 'AssetLabel'),$divClass,$coinAreaRowID,$assetName);
	addDiv(($assetName + 'AssetPrice'),$divClass,$coinAreaRowID,"0");
	addDiv($assetManualTrans,$divClass,$coinAreaRowID);
	addDiv(($assetName + 'ManualBuyButton'),'btn btn-primary btn-xs',$assetManualTrans,'Buy','button');
	addDiv(($assetName + 'ManualSellButton'),'btn btn-success btn-xs',$assetManualTrans,'Sell','button');
	addDiv(($assetName + 'BotAmount'),$divClass,$coinAreaRowID,"0");
	addDiv(($assetName + 'BotAction'),$divClass,$coinAreaRowID,"0");
	addDiv($divDeleteBot,$divClass,$coinAreaRowID);

	var $btnAttribute = "javascript: removeDiv('" + $coinAreaRowID + "');";
	addDiv($button2ID,'btn btn-xs btn-danger',$divDeleteBot,'Del','button',"","onClick",$btnAttribute);
	
	$assetCounter++;
	document.getElementById($assetLabelID).innerText = $assetName + $assetCounter
	
}; // end addBot

function refreshCharts() {
  try {
    if (document.getElementById("btcMedian").innerText == "NaN") {document.getElementById("btcMedian").innerText = 0}	loadCoinData();
	updateCoinsole("coinMainBox");
	updateCointent();
	fruitbotChooses($ltc,$ltcOld,$ltcMedian,"fruitbotltcMedian","fruitbotltcBotAmount","fruitbotltcBotAction",function($e,$f){$ltcOld = $e;$ltcMedian = $f});
    fruitbotChooses($btc,$btcOld,$btcMedian,"fruitbotbtcMedian","fruitbotbtcBotAmount","fruitbotbtcBotAction",function($e,$f){$btcOld = $e;$btcMedian = $f});
    fruitbotChooses($eth,$ethOld,$ethMedian,"fruitbotethMedian","fruitbotethBotAmount","fruitbotethBotAction",function($e,$f){$ethOld = $e;$ethMedian = $f});
  }catch(e){console.log(e)}; // end try 
  try {
	$fbcOld = $fbc.amount
  }catch(e){console.log(e)}; // end try 
  try {
	
	simplebotChooses($ltc,"simplebotltcBotAmount","simplebotltcBotAction");
    simplebotChooses($btc,"simplebotbtcBotAmount","simplebotbtcBotAction");
    simplebotChooses($eth,"simplebotethBotAmount","simplebotethBotAction");
  }catch(e){console.log(e)}; // end try 
}; // end refreshCharts


// Refresh chart every 30 seconds.
window.onload = function(){ 
	loadCoinData();
	refreshCharts();
	document.getElementById("coinMainBox").innerText = $coin2;
	// document.getElementById("jsonArea").innerText = "Click 'set!' to load.";
	document.getElementById("btcMedian").innerText = 0;
};
setInterval(function () {
	refreshCharts()
}, 30000);
