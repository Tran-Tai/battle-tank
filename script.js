var a = [[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
                [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
                [9, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 9],
                [9, 0, 2, 2, 0, 2, 2, 1, 2, 0, 0, 2, 2, 0, 2, 2, 0, 0, 2, 1, 2, 2, 0, 2, 2, 0, 9],
                [9, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 9],
                [9, 0, 2, 2, 0, 2, 2, 0, 1, 2, 0, 2, 2, 0, 2, 2, 0, 2, 1, 0, 2, 2, 0, 2, 2, 0, 9],
                [9, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 9],
                [9, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 9],
                [9, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 9],
                [9, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 9],
                [9, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 9],
                [9, 0, 2, 2, 0, 2, 2, 0, 1, 2, 0, 2, 2, 0, 2, 2, 0, 2, 1, 0, 2, 2, 0, 2, 2, 0, 9],
                [9, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 9],
                [9, 0, 2, 2, 0, 2, 2, 1, 2, 0, 0, 2, 2, 0, 2, 2, 0, 0, 2, 1, 2, 2, 0, 2, 2, 0, 9],
                [9, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 9],
                [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
                [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]];
        var playerTank;
        var endframe;
        var pause = true;
        var endgame = false;
        var enemyTank = [];
        var playerShell = [];
        var enemyShell = [];
        var enemyTankCount = 0;
        var explosion = [];
        var score = 0;
        function startGame() {
            myGameArea.start();
            playerTank = new tank(32, 32, "Images/t1.png", 300, 594);
        }
        var myGameArea = {
            canvas: document.createElement("canvas"),
            start: function () {
                this.canvas.width = 800;
                this.canvas.height = 626;
                this.context = this.canvas.getContext("2d");
                this.context.fillStyle = "#FF0000";
                this.context.fillRect(0, 0, 800, 33);
                this.frameNo = 0;
                document.body.insertBefore(this.canvas, document.body.childNodes[0]);
                this.interval = setInterval(updateGameArea, 20);
                window.addEventListener('keydown', function (e) {
                    myGameArea.keys = (myGameArea.keys || []);
                    if (e.keyCode != 90) myGameArea.keys[e.keyCode] = true;
                })
                window.addEventListener('keyup', function (e) {
                    if (e.keyCode != 90) myGameArea.keys[e.keyCode] = false;
                    if (e.keyCode == 90) myGameArea.keys[90] = true;
                })
            },
            clear: function () {
                this.context.clearRect(0, 46, this.canvas.width, this.canvas.height);
                this.context.fillStyle = "#888888";
                this.context.fillRect(2, 2, 796, 29);
                this.context.fillStyle = "DDDDDD";
                this.context.font = "25px Arial";
                this.context.strokeText("SCORE - " + score, 10, 25);
                this.context.strokeText("DESTROYED - " + (enemyTankCount - enemyTank.length), 320, 25);
                this.context.strokeText("TOTAL - " + enemyTankCount, 640, 25);
                this.context.fillStyle = "#555555";
                this.context.fillRect(0, 34, 800, 12);
                for (i = 1; i < 19; i++)
                    for (j = 1; j < 26; j++) {
                        if (a[i][j] == 1) {
                            let img = new Image();
                            img.src = "Images/brick.png";
                            ctx = myGameArea.context;
                            ctx.drawImage(img, (j - 1) * 32, (i - 1) * 32 + 50, 32, 32);
                        }
                        if (a[i][j] == 2) {
                            let img = new Image();
                            img.src = "Images/steel.png";
                            ctx = myGameArea.context;
                            ctx.drawImage(img, (j - 1) * 32, (i - 1) * 32 + 50, 32, 32);
                        }
                    }
            },
            pause: function () {
                clearInterval(this.interval);
            },
            continue: function () {
                this.interval;
            },
            stop: function () {
                clearInterval(this.interval);
                setTimeout(function () { alert("game over"); }, 0);
            }
        }

        function tank(width, height, url, x, y) {
            this.img = new Image();
            this.img.src = url;
            this.gamearea = myGameArea;
            this.width = width;
            this.height = height;
            this.speedX = 0;
            this.speedY = 0;
            this.cooldown = 0;
            this.x = x;
            this.y = y;
            this.ix = Math.floor((this.x) / 32 + 1);
            this.iy = Math.floor((this.y - 50) / 32 + 1);
            this.dir = "up";
            this.update = function () {
                ctx = myGameArea.context;
                ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
                if (this.cooldown > 0) this.cooldown -= 1;
            }
            this.newPos = function () {
                this.x += this.speedX;
                this.y += this.speedY;
                this.ix = Math.floor((this.x) / 32 + 1);
                this.iy = Math.floor((this.y - 50) / 32 + 1);
            }

            this.moveUp = function () {
                if (myGameArea.frameNo % 2 == 0) this.img.src = "Images/t1.png";
                else this.img.src = "Images/t12.png";
                if ((a[this.iy - 1][this.ix] == 0 && (a[this.iy - 1][this.ix + 1] == 0 || (this.x % 32) == 0))
                    || this.y - (this.iy * 32 + 18) > 0) this.speedY = -2;
                this.dir = "up";
            }

            this.moveDown = function () {
                if (myGameArea.frameNo % 2 == 0) this.img.src = "Images/t3.png";
                else this.img.src = "Images/t32.png";
                if (a[this.iy + 1][this.ix] == 0 && (a[this.iy + 1][this.ix + 1] == 0 || (this.x % 32) == 0)) this.speedY = 2;
                this.dir = "down";
            }

            this.moveLeft = function () {
                if (myGameArea.frameNo % 2 == 0) this.img.src = "Images/t4.png";
                else this.img.src = "Images/t42.png";
                if (((a[this.iy][this.ix - 1] == 0) && ((a[this.iy + 1][this.ix - 1] == 0) || ((this.y - 18) % 32) == 0))
                    || (this.x - ((this.ix - 1) * 32) > 0)) this.speedX = -2;
                this.dir = "left";
            }

            this.moveRight = function () {
                if (myGameArea.frameNo % 2 == 0) this.img.src = "Images/t2.png";
                else this.img.src = "Images/t22.png";
                if (a[this.iy][this.ix + 1] == 0 && (a[this.iy + 1][this.ix + 1] == 0 || (this.y - 18) % 32 == 0)) this.speedX = 2;
                this.dir = "right";
            }
            this.shoot = function () {
                if (this.cooldown == 0) {
                    let xs, ys;
                    switch (this.dir) {
                        case "up":
                            xs = this.x + 12;
                            ys = this.y - 8;
                            break;
                        case "down":
                            xs = this.x + 12;
                            ys = this.y + 28;
                            break;
                        case "left":
                            xs = this.x - 8;
                            ys = this.y + 12;
                            break;
                        case "right":
                            xs = this.x + 28;
                            ys = this.y + 12;
                            break;
                    }
                    playerShell[playerShell.length] = new shell(8, 8, this.dir, xs, ys);
                    this.cooldown = 10;
                    myGameArea.keys[90] = false;
                }
            }
        }

        function eTank(width, height, type, x, y) {
            switch (type) {
                case 0:
                    this.type = "g";
                    break;
                case 1:
                    this.type = "y";
                    break;
                case 2:
                    this.type = "r";
                    break;
            }
            this.img = new Image();
            this.img.src = "Images/" + this.type + "3.png";
            this.gamearea = myGameArea;
            this.width = width;
            this.height = height;
            this.speedX = 0;
            this.speedY = 0;
            this.time = Math.floor(Math.random() * 3 + 1) * 32;
            this.x = x;
            this.y = y;
            this.ix = Math.floor((this.x) / 32 + 1);
            this.iy = Math.floor((this.y - 50) / 32 + 1);
            this.existence = true;
            this.dir = "down";
            this.cooldown = 0;
            this.update = function () {
                ctx = myGameArea.context;
                ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
                if (this.cooldown > 0) this.cooldown -= 1;
            }
            this.newPos = function () {
                this.x += this.speedX;
                this.y += this.speedY;
                this.ix = Math.floor((this.x) / 32 + 1);
                this.iy = Math.floor((this.y - 50) / 32 + 1);
            }
            this.autoDrive = function () {
                if (myGameArea.frameNo % this.time == 0) {
                    let r = Math.floor(Math.random() * 4);
                    switch (r) {
                        case 0:
                            this.dir = "up";
                            break;
                        case 1:
                            this.dir = "right";
                            break;
                        case 2:
                            this.dir = "down";
                            break;
                        case 3:
                            this.dir = "left";
                            break;
                    }
                }
                switch (this.dir) {
                    case "up":
                        this.moveUp();
                        break;
                    case "right":
                        this.moveRight();
                        break;
                    case "down":
                        this.moveDown();
                        break;
                    case "left":
                        this.moveLeft();
                        break;
                }
                if (this.cooldown == 0) this.autoAim();
            }

            this.autoAim = function () {
                if (myGameArea.frameNo % 125 == 0) this.shoot()
                switch (this.dir) {
                    case "up":
                        if ((Math.abs(playerTank.x - this.x) < Math.abs(playerTank.y - this.y) / 2)
                            && (playerTank.y < this.y)) this.shoot();
                        break;
                    case "down":
                        if ((Math.abs(playerTank.x - this.x) < Math.abs(playerTank.y - this.y) / 2)
                            && (playerTank.y > this.y)) this.shoot();
                        break;
                    case "left":
                        if ((playerTank.x < this.x)
                            && (Math.abs(playerTank.y - this.y) < Math.abs(playerTank.x - this.x) / 2)) this.shoot();
                        break;
                    case "right":
                        if ((playerTank.x > this.x)
                            && (Math.abs(playerTank.y - this.y) < Math.abs(playerTank.x - this.x) / 2)) this.shoot();
                        break;
                }
            }

            this.moveUp = function () {
                this.img.src = "Images/" + this.type + "1.png";
                if ((a[this.iy - 1][this.ix] == 0) || (this.y - (this.iy * 32 + 18) > 0)) {
                    this.speedY = -1;
                    this.speedX = 0;
                }
                else {
                    this.speedY = 0;
                    this.speedX = 0;
                }
            }

            this.moveDown = function () {
                this.img.src = "Images/" + this.type + "3.png";
                if (a[this.iy + 1][this.ix] == 0) {
                    this.speedY = 1;
                    this.speedX = 0;
                }
                else {
                    this.speedY = 0;
                    this.speedX = 0;
                }
            }

            this.moveLeft = function () {
                this.img.src = "Images/" + this.type + "4.png";
                if (((a[this.iy][this.ix - 1] == 0) || (this.x - ((this.ix - 1) * 32) > 0))) {
                    this.speedX = -1;
                    this.speedY = 0;
                }
                else {
                    this.speedY = 0;
                    this.speedX = 0;
                }
            }

            this.moveRight = function () {
                this.img.src = "Images/" + this.type + "2.png";
                if (a[this.iy][this.ix + 1] == 0) {
                    this.speedX = 1;
                    this.speedY = 0;
                }
                else {
                    this.speedY = 0;
                    this.speedX = 0;
                }
            }
            this.shoot = function () {
                let xs, ys;
                switch (this.dir) {
                    case "up":
                        xs = this.x + 12;
                        ys = this.y - 8;
                        break;
                    case "down":
                        xs = this.x + 12;
                        ys = this.y + 28;
                        break;
                    case "left":
                        xs = this.x - 8;
                        ys = this.y + 12;
                        break;
                    case "right":
                        xs = this.x + 28;
                        ys = this.y + 12;
                        break;
                }
                enemyShell[enemyShell.length] = new shell(8, 8, this.dir, xs, ys);
                this.cooldown = 50;
            }
        }

        function shell(width, height, dir, x, y) {
            this.img = new Image();
            this.gamearea = myGameArea;
            this.width = width;
            this.height = height;
            this.dir = dir;
            switch (this.dir) {
                case "up":
                    this.speedX = 0;
                    this.speedY = -3;
                    this.img.src = "Images/b1.png";
                    break;
                case "down":
                    this.speedX = 0;
                    this.speedY = 3;
                    this.img.src = "Images/b3.png";
                    break;
                case "left":
                    this.speedX = -3;
                    this.speedY = 0;
                    this.img.src = "Images/b4.png";
                    break;
                case "right":
                    this.speedX = 3;
                    this.speedY = 0;
                    this.img.src = "Images/b2.png";
                    break;
            }
            this.x = x;
            this.y = y;
            this.ix = Math.floor((this.x) / 32 + 1);
            this.iy = Math.floor((this.y - 50) / 32 + 1);
            this.existence = true;
            this.update = function () {
                ctx = myGameArea.context;
                ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
                switch (this.dir) {
                    case "up":
                        if (a[this.iy][this.ix] != 0 && ((this.y + 8 - ((this.iy) * 32 + 50) <= 8))) {
                            this.existence = false;
                            if (a[this.iy][this.ix] == 1) a[this.iy][this.ix] = 0;
                        }
                        break;
                    case "down":
                        if (a[this.iy + 1][this.ix] != 0 && ((((this.iy) * 32 + 50) - this.y <= 8))) {
                            this.existence = false;
                            if (a[this.iy + 1][this.ix] == 1) a[this.iy + 1][this.ix] = 0;
                        }
                        break;
                    case "left":
                        if (a[this.iy][this.ix] != 0 && ((this.x + 8 - (this.ix * 32) <= 8))) {
                            this.existence = false;
                            if (a[this.iy][this.ix] == 1) a[this.iy][this.ix] = 0;
                        }
                        break;
                    case "right":
                        if (a[this.iy][this.ix + 1] != 0 && this.ix * 32 - this.x <= 8) {
                            this.existence = false;
                            if (a[this.iy][this.ix + 1] == 1) a[this.iy][this.ix + 1] = 0;
                        }
                        break;
                }
            }
            this.newPos = function () {
                this.x += this.speedX;
                this.y += this.speedY;
                this.ix = Math.floor((this.x) / 32 + 1);
                this.iy = Math.floor((this.y - 50) / 32 + 1);
            }
        }

        function explode(x, y) {
            this.step = 1;
            this.img = new Image();
            this.existence = function () {
                if (this.step > 25) return false;
                else return true;
            }
            this.update = function () {
                this.img.src = "Images/e" + Math.ceil(this.step / 5) + ".png";
                ctx = myGameArea.context;
                switch (Math.ceil(this.step / 5)) {
                    case 1:
                        this.x = x + 4;
                        this.y = y + 4;
                        this.step += 1;
                        ctx.drawImage(this.img, this.x, this.y, 24, 24);
                        break;
                    case 2:
                        this.x = x + 1;
                        this.y = y + 1;
                        ctx.drawImage(this.img, this.x, this.y, 30, 30);
                        this.step += 1;
                        break;
                    case 3:
                        this.x = x;
                        this.y = y;
                        ctx.drawImage(this.img, this.x, this.y, 32, 32);
                        this.step += 1;
                        break;
                    case 4:
                        this.x = x - 14;
                        this.y = y - 14;
                        ctx.drawImage(this.img, this.x, this.y, 60, 60);
                        this.step += 1;
                        break;
                    case 5:
                        this.x = x - 17;
                        this.y = y - 17;
                        ctx.drawImage(this.img, this.x, this.y, 66, 66);
                        this.step += 1;
                        break;
                }
            }
        }

        function updateGameArea() {
            myGameArea.clear();
            playerTank.speedX = 0;
            playerTank.speedY = 0;
            if (myGameArea.keys && myGameArea.keys[37]) { playerTank.moveLeft(); }
            if (myGameArea.keys && myGameArea.keys[39]) { playerTank.moveRight(); }
            if (myGameArea.keys && myGameArea.keys[38]) { playerTank.moveUp(); }
            if (myGameArea.keys && myGameArea.keys[40]) { playerTank.moveDown(); }
            if (myGameArea.keys && myGameArea.keys[90]) { playerTank.shoot(); }
            if (endgame == false) {
                playerTank.newPos();
                playerTank.update();
            }
            if (playerShell.length > 0) {
                for (i = 0; i < playerShell.length; i++) {
                    if (playerShell[i].existence) {
                        playerShell[i].newPos();
                        playerShell[i].update();
                        for (j = 0; j < enemyTank.length; j++) {
                            if ((Math.abs(enemyTank[j].x - playerShell[i].x + 12) < 18)
                                && (Math.abs(enemyTank[j].y - playerShell[i].y + 12) < 18)) {
                                explosion[explosion.length] = new explode(enemyTank[j].x, enemyTank[j].y);
                                enemyTank.splice(j, 1);
                                playerShell[i].existence = false;
                                score += 1000;
                            }
                        }
                    }
                    else playerShell.splice(i, 1);
                }
            }
            if (myGameArea.frameNo % 192 == 0 && enemyTankCount < 21) {
                enemyTankCount++;
                let r = Math.floor(Math.random() * 3);
                enemyTank[enemyTank.length] = new eTank(32, 32, r, (enemyTankCount % 3) * 384, 50);
            }
            if (enemyTank.length > 0) {
                for (i = 0; i < enemyTank.length; i++) {
                    enemyTank[i].autoDrive();
                    enemyTank[i].newPos();
                    enemyTank[i].update();
                }
            }
            if (enemyShell.length > 0) {
                for (i = 0; i < enemyShell.length; i++) {
                    if (enemyShell[i].existence) {
                        enemyShell[i].newPos();
                        enemyShell[i].update();
                        if ((Math.abs(playerTank.x - enemyShell[i].x + 12) < 18)
                            && (Math.abs(playerTank.y - enemyShell[i].y + 12) < 18)) {
                            if (endgame == false) {
                                explosion[explosion.length] = new explode(playerTank.x, playerTank.y);
                                enemyShell[i].existence = false;
                                endframe = myGameArea.frameNo + 25;
                                endgame = true;
                            }
                        }
                    }
                    else enemyShell.splice(i, 1);
                }
            }
            for (i = 0; i < explosion.length; i++) {
                if (explosion[i].existence()) {
                    explosion[i].update();
                }
                else explosion.splice(i, 1);
            }
            myGameArea.frameNo += 1;
            if (myGameArea.frameNo == endframe) { myGameArea.stop(); }
        }