$(function(){
    let url_string = location.href;
    let url = new URL(url_string);
    let playerID = url.searchParams.get("id");

    if(playerID){
        // need to add validation for team check
        playersDetails = JSON.parse(localStorage.getItem("playersInfo"));
        if(playersDetails.length > 0){
            let playerHTML = '';

            playersDetails.forEach((eachPlayer) => {
                if(eachPlayer.id == playerID){
                    playerHTML += `<tr>
                    <td rowspan="6" style="text-align:center"><img class="player-logo" src="${eachPlayer.profileIcon}" alt="${eachPlayer.playerName}"/></td>
                </tr>
                        <tr>
                    <th>Full Name</th>
                    <td>${eachPlayer.playerName}</td>
                    </tr>
                    <tr>
                        <th>Team Name</th>
                        <td>${eachPlayer.teamFullName}</td>
                    </tr>
                    <tr>
                        <th>Price</th>
                        <td>${eachPlayer.price}</td>
                    </tr>
                    <tr>
                        <th>Playing Status</th>
                        <td>${eachPlayer.isPlaying?'Playing':'On-bench'}</td>
                    </tr>
                    <tr>
                        <th>Role</th>
                        <td>${eachPlayer.description}</td>
                    </tr>`;
                    document.title = eachPlayer.playerName;
                }
            });

            $("#player-details table tbody").append(playerHTML);
        }
    }
});