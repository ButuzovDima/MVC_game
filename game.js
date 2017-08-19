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
        showAsteroid: function(id){
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

/*------------------------begin model---------------------*/
    let model = {
        sizeSpace: 	  7,	// Размер карты
        numShips: 	  6,	// Кол-во флотилий
        lengthShips:  3,	// Размеры флотилии
        destroyShips: 0,	// Уничтоженные флотилии

        spaceships: [
            { position: ["0", "0", "0"], damage: ["", "", ""], color: "red"  },
            { position: ["0", "0", "0"], damage: ["", "", ""], color: "blue" },
            { position: ["0", "0", "0"], damage: ["", "", ""], color: "red"  },
            { position: ["0", "0", "0"], damage: ["", "", ""], color: "blue" },
            { position: ["0", "0", "0"], damage: ["", "", ""], color: "red"  },
            { position: ["0", "0", "0"], damage: ["", "", ""], color: "blue" }
        ],

        // Функция shot() - производит выстрел и проверку на попадание
        shot: function(id){
            for(let i = 0; i < this.numShips; i++){
                let spaceship = this.spaceships[i];
                let posDamage = spaceship.position.indexOf(id);

                //проверяем есть ли корабль на карте
                if(posDamage >= 0){
                    if(spaceship.damage[posDamage] === 'loss'){
                        view.showMsg('Этот корабль уже подбит');
                        return true;
                    }

                    spaceship.damage[posDamage] = 'loss';
                    let color = spaceship.color;
                    view.showShip(id, color);
                    view.showMsg('Попадание');

                    if(this.checkDestroyedShip(spaceship)){
                        view.showMsg('Флотилия из 3-х кораблей потоплена');
                        this.destroyShips++;
                        return true;
                    }

                    return true;
                }
            }

            view.showAsteroid(id);
            view.showMsg('Промах');
            return false;
        },

        // Функция checkDestroyedShip() - проверяет полностью подбиты три корабля
        checkDestroyedShip: function(ship){
            for(let i = 0; i < this.lengthShips; i++){
                if(ship.damage[i] === ''){
                    return false;
                }
            }
            return true;
        }

    };
/*------------------------end model---------------------*/