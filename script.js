document.body.innerHTML = `
<div class="background">
    <div class="segment">
      <img class="avatar" id="avatar-player">
      <div class="name" id="name-player"></div>
      <div class="scores" id="score1"></div>
      <div class="card" id="card-player"></div>
    </div>
    <div class="segment buttons">
    <button class="button btn1" id="butStart" onClick="playGame();"><span class="link-content">PLAY</span></button>
    <button class="button btn2" id="butReset" onClick="resetGame();"><span class="link-content">RESET<span></button>
    </div>
    <div class="segment bot">
    <img class="avatar" id="avatar-bot">
    <div class="name" id="name-bot"></div>
    <div class="scores" id="score2"></div>
    <div class="card" id="card-bot"></div>
    </div>
</div>
`
var playerName = prompt('Enter your name:');
var namePlayer = document.getElementById('name-player').innerHTML = playerName;

const botName = ['BOT Itsuki', "BOT Ren", "BOT Bryan", "BOT Charles", "BOT Richard", "BOT Jack", "BOT John"];

var counterPlayer = 0;
var counterBot = 0;

var chooseEnemy = prompt('Please, choose an opponent:\nEnter "1" - Cat - easy level\nEnter "2" - Rabbit - medium level\nEnter "3" - Dog - hard level');

var btnPlay = document.getElementById('butStart');

function setGameOver() {
  btnPlay.disabled = true;
  btnPlay.style.cursor = "not-allowed";
}

function resetGame(){
 btnPlay.disabled = false;
 btnPlay.style.cursor = "pointer";
 document.getElementById('score1').innerHTML = '';
 document.getElementById('score2').innerHTML = '';
 counterPlayer = 0;
 counterBot = 0;
 document.getElementById('card-player').innerHTML = '';
 document.getElementById('card-bot').innerHTML = '';
 if(chooseEnemy == 1){
   document.getElementById("avatar-bot").src="img/cat/defaultCat.gif";
 }
 if(chooseEnemy == 2){
   document.getElementById("avatar-bot").src="img/rabbit/defaultRabbit.gif";
 }
 if(chooseEnemy == 3){
   document.getElementById("avatar-bot").src="img/shiba/defaultShiba.gif";
 }
 document.getElementById("avatar-player").src="img/playerHero/defaultPug.gif";

 document.getElementById('card-player').classList.add('shakeAnimPlayer');
 document.getElementById('card-bot').classList.add('shakeAnimBot');
 setTimeout(function(){document.getElementById('card-player').classList.remove('shakeAnimPlayer');}, 600);
 setTimeout(function(){document.getElementById('card-bot').classList.remove('shakeAnimBot');}, 600);
}

if(chooseEnemy == 1){
  let random = Math.floor(Math.random() * botName.length);
  var nameBot = document.getElementById("name-bot").innerHTML = botName[random];
  document.getElementById("avatar-bot").src="img/cat/defaultCat.gif";
  document.getElementById("avatar-player").src="img/playerHero/defaultPug.gif";
}
if(chooseEnemy == 2){
  let random = Math.floor(Math.random() * botName.length);
  var nameBot = document.getElementById("name-bot").innerHTML = botName[random];
  document.getElementById("avatar-bot").src="img/rabbit/defaultRabbit.gif";
  document.getElementById("avatar-player").src="img/playerHero/defaultPug.gif";
}
if(chooseEnemy == 3){
  let random = Math.floor(Math.random() * botName.length);
  var nameBot = document.getElementById("name-bot").innerHTML = botName[random];
  document.getElementById("avatar-bot").src="img/shiba/defaultShiba.gif";
  document.getElementById("avatar-player").src="img/playerHero/defaultPug.gif";
}

function playGame(){
  var playerUser = document.getElementById("card-player").innerHTML = Math.floor(Math.random() * 10);

  if(chooseEnemy == 1){
    var playerCat = document.getElementById("card-bot").innerHTML = Math.floor(Math.random() * 5);
    if(playerUser > playerCat){
      counterPlayer++;
      document.getElementById("score1").innerHTML = counterPlayer;
      }
    if(playerUser < playerCat){
      counterBot++;
      document.getElementById("score2").innerHTML = counterBot;
    }
     if(counterBot == 2){
      document.getElementById("avatar-bot").src="img/cat/happyCat.gif";
      document.getElementById("avatar-player").src="img/playerHero/worryPug.gif";
    }
    if(counterPlayer == 2){
      document.getElementById("avatar-bot").src="img/cat/worryCat.gif";
      document.getElementById("avatar-player").src="img/playerHero/happyPug.gif";
    }
    if(counterBot == 3){
      document.getElementById("avatar-bot").src="img/cat/winCat.gif";
      document.getElementById("avatar-player").src="img/playerHero/upsetPug.gif";
    }
    if(counterPlayer == 3){
      document.getElementById("avatar-bot").src="img/cat/upsetCat.gif";
      document.getElementById("avatar-player").src="img/playerHero/winPug.gif";
    }
  }
  else if(chooseEnemy == 2){
    var playerRabbit = document.getElementById("card-bot").innerHTML = Math.floor(Math.random() * 10);
    if(playerUser > playerRabbit){
      counterPlayer++;
      document.getElementById("score1").innerHTML = counterPlayer;
      }
    if(playerUser < playerRabbit){
      counterBot++;
      document.getElementById("score2").innerHTML = counterBot;
    }
    if(counterBot == 2){
      document.getElementById("avatar-bot").src="img/rabbit/happyRabbit.gif";
      document.getElementById("avatar-player").src="img/playerHero/worryPug.gif";
    }
    if(counterPlayer == 2){
      document.getElementById("avatar-bot").src="img/rabbit/worryRabbit.gif";
      document.getElementById("avatar-player").src="img/playerHero/happyPug.gif";
    }
    if(counterBot == 3){
      document.getElementById("avatar-bot").src="img/rabbit/winRabbit.gif";
      document.getElementById("avatar-player").src="img/playerHero/upsetPug.gif";
    }
    if(counterPlayer == 3){
      document.getElementById("avatar-bot").src="img/rabbit/upsetRabbit.gif";
      document.getElementById("avatar-player").src="img/playerHero/winPug.gif";
    }
  }
  else if(chooseEnemy == 3){
    var playerShiba = document.getElementById("card-bot").innerHTML = Math.floor(Math.random() * 25);
    if(playerUser > playerShiba){
      counterPlayer++;
      document.getElementById("score1").innerHTML = counterPlayer;
      }
    if(playerUser < playerShiba){
      counterBot++;
      document.getElementById("score2").innerHTML = counterBot;
    }
    if(counterBot == 2){
      document.getElementById("avatar-bot").src="img/shiba/happyShiba.gif";
      document.getElementById("avatar-player").src="img/playerHero/worryPug.gif";
    }
    if(counterPlayer == 2){
      document.getElementById("avatar-bot").src="img/shiba/worryShiba.gif";
      document.getElementById("avatar-player").src="img/playerHero/happyPug.gif";
    }
    if(counterBot == 3){
      document.getElementById("avatar-bot").src="img/shiba/winShiba.gif";
      document.getElementById("avatar-player").src="img/playerHero/upsetPug.gif";
    }
    if(counterPlayer == 3){
      document.getElementById("avatar-bot").src="img/shiba/upsetShiba.gif";
      document.getElementById("avatar-player").src="img/playerHero/winPug.gif";
    }
  }

  if(counterPlayer == 3){
    alert("Player " + namePlayer + ' won!');
    setGameOver();
  }
  else if(counterBot == 3){
    alert(nameBot + ' won!');
    setGameOver();
  }

  document.getElementById('card-player').classList.add('shakeAnimPlayer');
  document.getElementById('card-bot').classList.add('shakeAnimBot');
  setTimeout(function(){document.getElementById('card-player').classList.remove('shakeAnimPlayer');}, 600);
  setTimeout(function(){document.getElementById('card-bot').classList.remove('shakeAnimBot');}, 600);
}
