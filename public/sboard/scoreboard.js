class Scoreboard {
  constructor(containerElement) {
  this.containerElement = containerElement;
  this.teams = [];
  }

  addTeam(teamName) {
    const team = new Team(teamName);
    this.teams.push(team);
    this.render();
  }

  render() {
    this.containerElement.innerHTML = '';
    for (const team of this.teams) {
    const teamElement = team.render();
    this.containerElement.appendChild(teamElement);
    }
  }
}

class Team {
  constructor(teamName) {
  this.teamName = teamName;
  this.score = 0;
  }

  incrementScore() {
    this.score++;
    this.render();
  }

  render() {
    const teamElement = document.createElement('div');
    teamElement.classList.add('team');
    //teamElement.id.add('idteam');
    const teamNameElement = document.createElement('h1');
    teamNameElement.textContent = this.teamName;
    const scoreElement = document.createElement('h2');
    scoreElement.textContent = this.score;
    const incrementScoreButton = document.createElement('button');

    incrementScoreButton.textContent = '+';
    incrementScoreButton.classList.add('btnteam');

    incrementScoreButton.addEventListener('click', () => {
    this.incrementScore();
    scoreElement.innerText = this.score;
    });
    teamElement.appendChild(teamNameElement);
    teamElement.appendChild(scoreElement);
    teamElement.appendChild(incrementScoreButton);
    return teamElement;
    }
}

const scoreboard = new Scoreboard(document.getElementById('scoreboard'));
scoreboard.addTeam('Savannaket University');
scoreboard.addTeam('MY FRIENDS');
//scoreboard.addTeam('Satisouk');
//scoreboard.addTeam('Viphalath');