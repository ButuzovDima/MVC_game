/*------------------------begin view---------------------*/
    let view = {

        // Функция showCount() - отображает на странице счет игрока
        showCount: function(count){
            let elCount  = document.getElementById('area_game__user_count--total');
            elCount.innerHTML = count;
        },

        // Функция showMsg() - отображает на странице сообщение
        showMsg: function(msg){
            let elMessage = document.getElementById('area_game__user-message--msg');
            elMessage.innerHTML = msg;
        },

        // Функция showShip() - отображает на странице корабль (синий или красный)
        showShip: function(id, color){
            let elShip = document.getElementById(id);
            if(color === 'red'){
                elShip.setAttribute('class', 'ship-red');
            } else if(color === 'blue'){
                elShip.setAttribute('class', 'ship-blue');
            }
        },

        // Функция showAsteroid() - если игрок промахнулся, отображает астероид
        showAsteoid: function(id){
            let elAsteroid = document.getElementById(id);
            elAsteroid.setAttribute('class', 'asteroid');
        },

        // Функция soundShot() - звук выстрела
        soundShot: function(){
            let audio = document.getElementsByTagName('audio')[0];
            audio.pause();
            audio.currentTime = 0;
            audio.play();
        }
    };
/*------------------------end view---------------------*/