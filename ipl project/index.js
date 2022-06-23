const playersInfo = [
    {
        "id": 0,
        "playerName": "Hardik Pandya",
        "from": "GT",
        "price": "12.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "profileIcon": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png',
        "teamFullName": "Gujarat Titans"
    },
    {
        "id": 1,
        "playerName": "Mohammad Shami",
        "from": "GT",
        "price": "10.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "profileIcon": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/94.png',
        "teamFullName": "Gujarat Titans"
    },
    {
        "id": 2,
        "playerName": "Virat Kohli",
        "from": "RCB",
        "price": "13.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "profileIcon": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png',
        "teamFullName": "Royal Challengers Bangalore"
    },
    {
        "id": 3,
        "playerName": "Glenn Maxwell",
        "from": "RCB",
        "price": "10.25",
        "isPlaying": true,
        "description": "All-rounder",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png",
        "teamFullName": "Royal Challengers Bangalore"
    },
    {
        "id": 4,
        "playerName": "Rohit Sharma",
        "from": "MI",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png",
        "teamFullName": "Mumbai Indians"
    },
    {
        "id": 5,
        "playerName": "Ishan Kishan",
        "from": "MI",
        "price": "17.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2975.png",
        "teamFullName": "Mumbai Indians"
    },
    {
        "id": 6,
        "playerName": "MS Dhoni",
        "from": "CSK",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
        "teamFullName": "Chennai Super Kings"
    },
    {
        "id": 7,
        "playerName": "Dwayne Bravo",
        "from": "CSK",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/25.png",
        "teamFullName": "Chennai Super Kings"
    },
    {
        "id": 8,
        "playerName": "Shreyas Iyer",
        "from": "KKR",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
        "teamFullName": "Kolkata Knight Riders"
    },
    {
        "id": 9,
        "playerName": "Rishabh Pant",
        "from": "DC",
        "price": "13.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png",
        "teamFullName": "Delhi Capitals"
    },
];

const teamsInfo = [
    {
        "id": 0,
        "teamName": "Mumbai Indians",
        "shortForm": "MI",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
        "WonCount": 5,
        "color-top": "#006CB7",
        "color-bottom": "#003B7A"
    },
    {
        "id": 1,
        "teamName": "Chennai Super King",
        "shortForm": "CSK",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
        "WonCount": 4,
        "color-top": "#FCCA06",
        "color-bottom": "#F25C19"
    },
    {
        "id": 2,
        "teamName": "Royal challengers Bangalore",
        "shortForm": "RCB",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
        "WonCount": 0,
        "color-top": "#6A6A6A",
        "color-bottom": "#1C1C1C"
    },
    {
        "id": 3,
        "teamName": "Kolkata Knight Riders",
        "shortForm": "KKR",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
        "WonCount": 2,
        "color-top": "#3B215D",
        "color-bottom": "#552792"
    },
    {
        "id": 4,
        "teamName": "Delhi Capitals",
        "shortForm": "DC",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
        "WonCount": 2,
        "color-top": "#0078BC",
        "color-bottom": "#17479E"
    },
    {
        "id": 5,
        "teamName": "Gujarat Titans",
        "shortForm": "GT",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
        "WonCount": 2,
        "color-top": "#1C1C1C",
        "color-bottom": "#0B4973"
    },

];


$(function() {
    let teamsDetails = [];
    let playersDetails = [];
    let mainContainer = document.getElementById("container");
    if(localStorage.getItem("teamsInfo") === null)
        teamsDetails = localStorage.setItem("teamsInfo", JSON.stringify(teamsInfo));
    
    if(localStorage.getItem("playersInfo") === null)
        playersDetails = localStorage.setItem("playersInfo", JSON.stringify(playersInfo));

    teamsDetails = JSON.parse(localStorage.getItem("teamsInfo"));
    playersDetails = JSON.parse(localStorage.getItem("playersInfo"));
    
    if(teamsDetails.length > 0){
        let teamsHTML = '';
        let teamOptions = '<option value="" disabled selected>Select your team</option>';
        teamsDetails.forEach((team, index) => {
            let totalPlyer = 0;
            playersDetails.forEach((player) => {
                if(player.from === team.shortForm){
                    totalPlyer++;
                }
            });

            teamsHTML += `<div class="card" style="background: linear-gradient(180deg, ${team['color-top']} 0%, ${team['color-bottom']} 100%);border: 2px solid ${team['color-top']};">
                <a href="/pages/teams/teams.html?team=${team.shortForm}">
                    <div class="card-content">
                        <div class="team-logo"><img class="team-logo-img" src="${team.icon}" alt="${team.teamName}" /></div>
                    </div>
                    <div id="productDetails">
                        <h3 class="name-teams">${team.teamName}</h3>
                        <h4 title="Championship Won" style="float: left;"><i class="fa fa-trophy" aria-hidden="true"></i><span style="padding-left:15px">${team.WonCount}</span></h4>
                        <h4 title="Number of Player" style="float: right;"><i class="fa fa-users" aria-hidden="true"></i><span style="padding-left:15px">${totalPlyer}</span></h4>
                    </div>
                </a>
            </div>`;

            teamOptions += `<option value="${team.shortForm}">${team.teamName}</option>`;
        });
        mainContainer.insertAdjacentHTML("beforeend", teamsHTML);
        $("#teamSearch").append(teamOptions);
    }    

    $("#teamSearch").change(function(){
        $("#searchLink").attr("href",`/pages/teams/teams.html?team=${this.value}&isSearch=true`)
    }); 

    // Slider START
    const responsiveSlider = function() {

        let slider = document.getElementById("slider");
        let sliderWidth = slider.offsetWidth;
        let slideList = document.getElementById("slideWrap");
        let count = 1;
        let items = slideList.querySelectorAll("li").length;
        
        window.addEventListener('resize', function() {
          sliderWidth = slider.offsetWidth;
        });
        
        const nextSlide = function() {
          if(count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
          }
          else if(count = items) {
            slideList.style.left = "0px";
            count = 1;
          }
        };
        
        setInterval(function() {
          nextSlide()
        }, 3000);
        
    };
    window.onload = function() {
        responsiveSlider();  
    }

});