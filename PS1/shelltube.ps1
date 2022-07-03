#From https://github.com/jairampatel/shelltube/blob/master/shelltube.ps1

$Global:IE;$Global:ENTRY = "0";
$Global:SEARCH = "1";

$Global:search_commands = @{"number" = "video"; "<Enter>" = "search again"};
$Global:entry_commands = @{"s" = "search"; "v" = "show/hide player"};

$Global:all_commands = @{$Global:ENTRY = $Global:entry_commands; $Global:SEARCH = $Global:search_commands};
#********
# Common
#********

function init(){
    $Global:IE = New-Object -com internetexplorer.application;
    $Global:IE.visible = $true;
}

function toggle_visibility(){
    if( $Global:IE.visible -eq $true ){
        $Global:IE.visible = $false;
    }
    else{
        $Global:IE.visible = $true;
    }
}

function play_video($url){
    $Global:IE.navigate2($url);
}
function clear_screen(){
    Clear-Host;
}
function get_request([string]$query){
    clear_screen;
    show_wait;

    $client = New-Object System.Net.WebClient
    $string = $client.DownloadString($query);

    return $string;
}

function is_Numeric ($x) {
    try {
        0 + $x | Out-Null
    } catch {
        return $FALSE
    }
    $value = "";
    if( ![int]::TryParse( $x, [ref]$value ) ){
        return $FALSE;
    }
    return $TRUE;
}

function show_wait(){
    Write-Host "Please wait...";
}

#********
# Commands
#********

function is_valid_input($my_input, $command_type) {
    $commands = $Global:all_commands.Get_Item($command_type);
    if( ($commands.ContainsKey([string]$my_input)) -eq $TRUE ) {
        return $TRUE;
    }
    else{
        return $FALSE;
    }
}

function get_command_string([string]$command_type){
    $commands = $Global:all_commands.Get_Item($command_type);
    $command_string = "| ";
    foreach ($h in $commands.GetEnumerator()) {
        $command_string += $h.Name + " = " + $h.Value + " | ";
    }
    return "$command_string";
}

function get_input_with_command_type($command_type){
    $command_string = get_command_string($command_type);

    $input = "";
    $temp = 1;
    while($temp -le 1){
        $input = Read-Host $command_string;
        if(is_valid_input $input $command_type -eq $true){
            if( $input -eq "v" ){
                toggle_visibility;
            }
            else{
                $temp++;
            }

        }
    }
    return $input;
}
#********
# State
#********

$Global:currentState = "-1";
$Global:STATE_PENDING_QUERY="0";
$Global:STATE_PENDING_NUM="1";

function get_state(){
    return $Global:currentState;
}

function set_state($state){
    $Global:currentState = $state;
}

#********
# Input
#********

function select_video($parsed_videos){
    $url = get_video_url($parsed_videos);
    $state = get_state;
    if($state -eq $Global:STATE_PENDING_NUM){
        play_video($url);
        set_state($Global:STATE_PENDING_QUERY);
    }
}
function get_input_for_search(){
    $user_input = Read-Host "What do you want to listen to (<Ctrl C> to quit) ";
    return $user_input;
}

function handle_input($user_input){
    $formatted_request = "https://www.googleapis.com/youtube/v3/search?q=$user_input&part=snippet&key=AIzaSyCrb1f-QjPwO9w-sB6qQTNdQ-vEdjMx7Ek&order=r
elevance&maxResults=10";
    $videos = get_videos($formatted_request);

    show_videos($videos);

    select_video($videos);
}

function show_videos($parsed_videos){
    for($index = 0;$index -lt $parsed_videos.length;$index++){
        Write-Host "[" $index "] " -ForegroundColor Cyan -NoNewline;
        Write-Host $parsed_videos[$index].title " | " -ForegroundColor Green -NoNewline;
        Write-Host $parsed_videos[$index].channel;
    }
    Write-Host
}

function get_video_url($parsed){
    $id = "";
    $num = "";

    $canStop = $false;
    while($canStop -ne $true){
        $num = Read-Host "| number = video | <Enter> = search again | ";

        if(!$num){
            $canStop = $true;
            set_state($Global:STATE_PENDING_QUERY);
        }
        elseif(is_Numeric($num) -and ($num -ge 0) -and ($num -le 9)){
            $canStop = $true;
            $id = $parsed[$num].url;
        }
    }

    return "https://www.youtube.com/watch?v=$id";
}

function process_commands(){
    while($true){
        clear_screen;
        get_input_with_command_type($Global:ENTRY);
        clear_screen;
        $user_input = get_input_for_search;
        handle_input($user_input);
    }
}

#********
# Video data structure
#********

function get_new_video($video_channel,$video_title,$video_url){
    $new_video = New-Object psobject -Property @{
        channel = $video_channel
        title = $video_title
        url = $video_url
    };
    return $new_video;
}

#********
# Search
#********

function get_videos($query){
    set_state($Global:STATE_PENDING_NUM);
    $results = get_request($query);
    $parsed = parse_search_results($results);
    return $parsed;
}

function parse_search_results([string]$results){
    $videos = New-Object System.Collections.ArrayList;
    $json = ConvertFrom-Json $results;

    for($index = 0;$index -lt $json.items.length;$index++){
        $parsed_channel = $json.items[$index].snippet.channelTitle;
        $parsed_title = $json.items[$index].snippet.title;
        $parsed_id = $json.items[$index].id.videoId;

        $new_video = get_new_video $parsed_channel $parsed_title $parsed_id;
        [void]$videos.Add($new_video);

    }
    return $videos;
}

#********
# Entry Point
#********
init;
try{
process_commands;
}
finally{
    $Global:IE.Quit();
}


