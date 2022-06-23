$(function(){
    let url_string = location.href;
    let url = new URL(url_string);
    let team = url.searchParams.get("team");
    let isSearch = url.searchParams.get("isSearch");
    let mainContainer = document.getElementById("container");

    if(team){
        // need to add validation for team check
        playersDetails = JSON.parse(localStorage.getItem("playersInfo"));
        teamsDetails = JSON.parse(localStorage.getItem("teamsInfo"));
        if(playersDetails.length > 0){
            let playerHTML = '';
            let teamsHTML = '';
            let totalPlyer = 0;
            let topOrderBatsman = [];
            let topOrderBowler = [];
            let teamOptions = '<option value="" disabled selected>Select your team</option>';
            let teamData = teamsDetails.filter((eachTeam) => {
                teamOptions += `<option value="${eachTeam.shortForm}">${eachTeam.teamName}</option>`
                return eachTeam.shortForm == team;
            })[0];
            $("#teamSearch").append(teamOptions);
            $("#teamSearch").val(team);
            $("#teamSearch").change(function(){
                $("#searchLink").attr("href",`/pages/teams/teams.html?team=${this.value}&isSearch=true`)
            }); 
            playersDetails.forEach((player) => {
                if(player.from === team){
                    playerHTML += `<div class="card" style="background: linear-gradient(180deg, ${teamData['color-top']} 0%, ${teamData['color-bottom']} 100%);border: 2px solid ${teamData['color-top']};">
                        <a href="../players/players.html?id=${player.id}">
                            <div class="card-content">
                                <div class="team-logo"><img class="team-logo-img" src="${player.profileIcon}" alt="${player.playerName}"></div>
                            
                            </div>
                        
                            <div id="productDetails">
                                <h2 class="name-teams">${player.playerName}</h2>
                                <div class="player-price"> 
                                    <span>${player.teamFullName}</span>
                                    <span >${player.price}</span> 
                                </div>
                                <div class="player-price"> 
                                    <span >${player.description}</span>
                                    <span >${player.isPlaying?'Playing':'On-bench'}</span>
                                </div>
                            </div>
                        </a>
                    </div>`;
                    totalPlyer++;
                    if(player.description === 'Batsman'){
                        topOrderBatsman.push(player.playerName);
                    }else if(player.description === 'Bowler'){
                        topOrderBowler.push(player.playerName);
                    }
                }
            });
            document.title = teamData.teamName;
            if(teamData.shortForm == team){
                teamsHTML += `<tr>
                <td colspan="2" style="text-align:center;border: none"><img class="logo" src="${teamData.icon}" alt="${teamData.teamName}"/></td>
            </tr>
                    <tr>
                <th>Team Name</th>
                <td>${teamData.teamName}</td>
                </tr>
                <tr>
                    <th>Team Player Count</th>
                    <td>${totalPlyer}</td>
                </tr>
                <tr>
                    <th>Top Batsman</th>
                    <td>${topOrderBatsman.join(', ')}</td>
                </tr>
                <tr>
                    <th>Top Bowler</th>
                    <td>${topOrderBowler.join(', ')}</td>
                </tr>
                <tr>
                    <th>Championship Won Count</th>
                    <td>${teamData.WonCount}</td>
                </tr>`;
            }
            $("#team-details").css({background: `linear-gradient(180deg, ${teamData['color-top']} 0%, #edede2 100%)`})
            if(isSearch){
                mainContainer.insertAdjacentHTML("beforeend", playerHTML);
                let headingHTML = `<tr style="text-align:center;padding: 0rem"><td style="border: none;"><div style="display: flex;
                justify-content: center;align-items: center"><img width="100" src="${teamData.icon}" alt="${teamData.teamName}"/><h2 style="margin-left:10px">${teamData.teamName}</h2></div></td></tr>`;
                $("#team-details table tbody").append(headingHTML);
                $("#team-details").css({padding: "0rem"});
            }else{
                $("#team-details table tbody").append(teamsHTML);
                mainContainer.insertAdjacentHTML("beforeend", playerHTML);
            }         
            
        }
    }
});