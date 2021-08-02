
var a = [[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
[9, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 1, 9],
[9, 0, 4, 4, 0, 4, 4, 3, 4, 0, 0, 4, 4, 0, 4, 4, 0, 0, 4, 3, 4, 4, 0, 4, 4, 0, 9],
[9, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 9],
[9, 0, 4, 4, 0, 4, 4, 0, 3, 4, 0, 4, 4, 0, 4, 4, 0, 4, 3, 0, 4, 4, 0, 4, 4, 0, 9],
[9, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 1, 9],
[9, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 9],
[9, 1, 0, 0, 0, 0, 4, 4, 0, 0, 4, 4, 1, 3, 1, 4, 4, 0, 0, 4, 4, 0, 0, 0, 0, 1, 9],
[9, 0, 0, 4, 0, 0, 0, 0, 2, 2, 0, 0, 3, 2, 3, 0, 0, 2, 2, 0, 0, 0, 0, 4, 0, 0, 9],
[9, 1, 0, 0, 0, 0, 4, 4, 0, 0, 4, 4, 1, 3, 1, 4, 4, 0, 0, 4, 4, 0, 0, 0, 0, 1, 9],
[9, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 9],
[9, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 1, 9],
[9, 0, 4, 4, 0, 4, 4, 0, 3, 4, 0, 4, 4, 0, 4, 4, 0, 4, 3, 0, 4, 4, 0, 4, 4, 0, 9],
[9, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 9],
[9, 0, 4, 4, 0, 4, 4, 3, 4, 0, 0, 4, 4, 0, 4, 4, 0, 0, 4, 3, 4, 4, 0, 4, 4, 0, 9],
[9, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 1, 9],
[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]];
var playerTank;
var endframe;
var endgame = false;
var enemyTank = [];
var playerShell = [];
var enemyShell = [];
var enemyTankCount = 0;
var explosion = [];
var score = 0;
var playerLife = 0;
var enemyMax = 10;
var bonusLevel = 1;
var ingame = false;
const TS = 32;
const SS = 8;
var bgm = document.getElementById("bgm");
function startGame() {
document.getElementById("startgame").style.display = "none";
document.getElementById("block").style.display = "none";
myGameArea.start();
//tạo xe tank của người chơi là 1 object thuộc lớp pTank
playerTank = new pTank("Images/t1.png", 300, 594);
ingame = true;
playBGM();
}
function playBGM() {
if (ingame) {
let track = Math.ceil(Math.random() * 5);
if (track < 4) bgm.src = "BGM/track" + track + ".wav";
else bgm.src = "BGM/track" + track + ".flac";
bgm.play();
bgm.loop = true;
}
}
function reset() {
location.reload();
}
//khai báo đối tượng myGameArea là nền canvas dùng để vẽ các đối tượng khác
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
//update màn hình game sau mỗi 20 milisecond
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
//khởi tạo lại nền màn hình sau mỗi frame
clear: function () {
let ctx = this.context;
ctx.clearRect(0, 46, this.canvas.width, this.canvas.height);
ctx.fillStyle = "#888888";
ctx.fillRect(2, 2, 796, 29);
ctx.fillStyle = "DDDDDD";
ctx.font = "25px Arial";
ctx.strokeText("SCORE - " + score, 10, 25);
ctx.strokeText("ENEMY - " + enemyTank.length, 340, 25);
ctx.strokeText("PLAYER x " + playerLife, 640, 25);
ctx.fillStyle = "#555555";
ctx.fillRect(0, 34, 800, 12);
},
//duyệt mảng 2 chiều để hiển thị bản đồ
drawMap: function () {
let ctx = this.context;
for (i = 1; i < 19; i++)
    for (j = 1; j < 26; j++) {      
        if (a[i][j] == 2) {
            let img = new Image();
            img.src = "Images/river.png";
            ctx.drawImage(img, (j - 1) * 32, (i - 1) * 32 + 50, 32, 32);
        }
        else if (a[i][j] == 3) {
            let img = new Image();
            img.src = "Images/brick.png";
            ctx.drawImage(img, (j - 1) * 32, (i - 1) * 32 + 50, 32, 32);
        }
        else if (a[i][j] == 4) {
            let img = new Image();
            img.src = "Images/steel.png";
            ctx.drawImage(img, (j - 1) * 32, (i - 1) * 32 + 50, 32, 32);
        }
    }
},
//hiển thị các mảng rừng
drawJungle: function () {
let ctx = this.context;
for (i = 1; i < 19; i++)
    for (j = 1; j < 26; j++)      
        if (a[i][j] == 1) {
            let img = new Image();
            img.src = "Images/jungle.png";
            ctx.drawImage(img, (j - 1) * 32, (i - 1) * 32 + 50, 32, 32);
        }
},
//dừng cập nhật màn hình, dừng BGM, thông báo game over và hiển thị điểm người chơi
stop: function () {
clearInterval(this.interval);
let scoreBox = document.getElementById("gameOver");
scoreBox.style.display = "block";
let pos = Math.round((window.innerWidth - 304) / 2);
let text = pos.toString();
document.getElementById("gameOver").style.left = text + "px";
document.getElementById("outputScore").innerHTML = ("Your score is " + score);
bgm.pause();
ingame = false;
}
}
//tạo class pTank
function pTank(url, x, y) {
this.img = new Image();
this.img.src = url;
this.gamearea = myGameArea;
this.speedX = 0;
this.speedY = 0;
this.cooldown = 0;
this.x = x;
this.y = y;
this.ix = Math.floor((this.x) / 32 + 1);
this.iy = Math.floor((this.y - 50) / 32 + 1);
this.dir = "up";
//vẽ lại xe tăng người chơi sau mỗi frame
this.update = function () {
ctx = myGameArea.context;
ctx.drawImage(this.img, this.x, this.y, TS, TS);
if (this.cooldown > 0) this.cooldown -= 1;
}
//tính toán lại vị trí xe tăng người chơi sau mỗi frame
this.newPos = function () {
this.x += this.speedX;
this.y += this.speedY;
this.ix = Math.floor((this.x) / 32 + 1);
this.iy = Math.floor((this.y - 50) / 32 + 1);
}

this.moveUp = function () {
if (myGameArea.frameNo % 2 == 0) this.img.src = "Images/t1.png";
else this.img.src = "Images/t12.png";
//kiểm tra điều kiện (vật cản) cho phép xe đi lên
if ((a[this.iy - 1][this.ix] < 2 && (a[this.iy - 1][this.ix + 1] < 2 || (this.x % 32) == 0))
    || this.y - (this.iy * 32 + 18) > 0) this.speedY = -2;
this.dir = "up";
}

this.moveDown = function () {
if (myGameArea.frameNo % 2 == 0) this.img.src = "Images/t3.png";
else this.img.src = "Images/t32.png";
if (a[this.iy + 1][this.ix] < 2 && (a[this.iy + 1][this.ix + 1] < 2 || (this.x % 32) == 0)) this.speedY = 2;
this.dir = "down";
}

this.moveLeft = function () {
if (myGameArea.frameNo % 2 == 0) this.img.src = "Images/t4.png";
else this.img.src = "Images/t42.png";
if (((a[this.iy][this.ix - 1] < 2) && ((a[this.iy + 1][this.ix - 1] < 2) || ((this.y - 18) % 32) == 0))
    || (this.x - ((this.ix - 1) * 32) > 0)) this.speedX = -2;
this.dir = "left";
}

this.moveRight = function () {
if (myGameArea.frameNo % 2 == 0) this.img.src = "Images/t2.png";
else this.img.src = "Images/t22.png";
if (a[this.iy][this.ix + 1] < 2 && (a[this.iy + 1][this.ix + 1] < 2 || (this.y - 18) % 32 == 0)) this.speedX = 2;
this.dir = "right";
}
this.shoot = function () {
if (this.cooldown == 0) {
    let xs, ys;
    switch (this.dir) {
        case "up":
            xs = this.x + 12;
            ys = this.y - 9;
            break;
        case "down":
            xs = this.x + 12;
            ys = this.y + 27;
            break;
        case "left":
            xs = this.x - 9;
            ys = this.y + 12;
            break;
        case "right":
            xs = this.x + 27;
            ys = this.y + 12;
            break;
    }
    playerShell[playerShell.length] = new shell(this.dir, xs, ys, 3);
    this.cooldown = 10;
    myGameArea.keys[90] = false;
}
}
}
//tạo class cho xe tăng địch
function eTank(color, type, armor, x, y) {
//chọn màu xe dựa vào tham số color
switch (color) {
case 0:
    this.color = "g";
    break;
case 1:
    this.color = "y";
    break;
case 2:
    this.color = "r";
    break;
}
//chọn tốc độ chạy, vỏ giáp, tốc độ đạn, điểm số dựa vào loại xe truyền qua tham số type
switch (type) {
case 1:
    this.speed = 1;
    this.shellSpeed = 2;
    this.armor = armor;
    this.time = Math.floor(Math.random() * 3 + 1) * 32;
    this.score = this.armor * 1000;
    break;
case 2:
    this.speed = 1;
    this.shellSpeed = 3;
    this.armor = armor;
    this.time = Math.floor(Math.random() * 3 + 1) * 32;
    this.score = this.armor * 1000;
    break;
case 3:
    this.speed = 2;
    this.time = Math.floor(Math.random() * 3 + 1) * 16;
    this.shellSpeed = 2.5;
    this.armor = 1;
    this.score = 2000;
    break;
}
this.type = type;
this.img = new Image();
this.img.src = "Images/" + this.color + "" + this.type + "" + this.armor + "3.png";
this.gamearea = myGameArea;
this.speedX = 0;
this.speedY = 0;
this.x = x;
this.y = y;
this.ix = Math.floor((this.x) / 32 + 1);
this.iy = Math.floor((this.y - 50) / 32 + 1);
this.existence = true;
this.dir = "down";
this.cooldown = 0;
//vẽ lại xe tăng địch sau mỗi frame
this.update = function () {
ctx = myGameArea.context;
ctx.drawImage(this.img, this.x, this.y, TS, TS);
if (this.cooldown > 0) this.cooldown -= 1;
}
//cập nhập lại vị trí xe tăng địch sau mỗi frame
this.newPos = function () {
this.x += this.speedX;
this.y += this.speedY;
this.ix = Math.floor((this.x) / 32 + 1);
this.iy = Math.floor((this.y - 50) / 32 + 1);
}
//hàm điều khiển xe địch tự lái
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
//hàm điều khiển xe địch tự động bắn khi xe người chơi nằm trong khoảng 53 độ phía trước
this.autoAim = function () {
if (myGameArea.frameNo % 96 == 0) this.shoot()
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
this.img.src = "Images/" + this.color + "" + this.type + "" + this.armor + "1.png";
if ((a[this.iy - 1][this.ix] < 2) || (this.y - (this.iy * 32 + 18) > 0)) {
    this.speedY = -this.speed;
    this.speedX = 0;
}
else {
    this.speedY = 0;
    this.speedX = 0;
}
}

this.moveDown = function () {
this.img.src = "Images/" + this.color + "" + this.type + "" + this.armor + "3.png";
if (a[this.iy + 1][this.ix] < 2) {
    this.speedY = this.speed;
    this.speedX = 0;
}
else {
    this.speedY = 0;
    this.speedX = 0;
}
}

this.moveLeft = function () {
this.img.src = "Images/" + this.color + "" + this.type + "" + this.armor + "4.png";
if (((a[this.iy][this.ix - 1] < 2) || (this.x - ((this.ix - 1) * 32) > 0))) {
    this.speedX = -this.speed;
    this.speedY = 0;
}
else {
    this.speedY = 0;
    this.speedX = 0;
}
}

this.moveRight = function () {
this.img.src = "Images/" + this.color + "" + this.type + "" + this.armor + "2.png";
if (a[this.iy][this.ix + 1] < 2) {
    this.speedX = this.speed;
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
enemyShell[enemyShell.length] = new shell(this.dir, xs, ys, this.shellSpeed);
if (this.type == 1) this.cooldown = 30; //xe tăng thuộc loại 1 sẽ có tốc độ cooldown nhanh hơn
else this.cooldown = 50;
}
}

//tạo class cho đạn pháo của xe
function shell(dir, x, y, speed) {
this.img = new Image();
this.gamearea = myGameArea;
this.dir = dir;
this.speed = speed;
switch (this.dir) {
case "up":
    this.speedX = 0;
    this.speedY = -this.speed;
    this.img.src = "Images/b1.png";
    break;
case "down":
    this.speedX = 0;
    this.speedY = this.speed;
    this.img.src = "Images/b3.png";
    break;
case "left":
    this.speedX = -this.speed;
    this.speedY = 0;
    this.img.src = "Images/b4.png";
    break;
case "right":
    this.speedX = this.speed;
    this.speedY = 0;
    this.img.src = "Images/b2.png";
    break;
}
this.x = x;
this.y = y;
this.ix = Math.floor((this.x) / 32 + 1);
this.iy = Math.floor((this.y - 50) / 32 + 1);
this.existence = true;
//vẽ lại đạn sau mỗi frame và kiểm tra va chạm vật cản
this.update = function () {
ctx = myGameArea.context;
ctx.drawImage(this.img, this.x, this.y, SS, SS);
switch (this.dir) {
    case "up":
        //kiểm tra nếu gặp vật cản sẽ xóa bỏ đạn
        if (a[this.iy][this.ix] > 2 && ((this.y + 8 - ((this.iy) * 32 + 50) <= 8))) {
            this.existence = false;
            //kiểm tra nếu vật cản là tường gạch thì sẽ khiến tường nổ và biến mất
            if (a[this.iy][this.ix] == 3) {
                a[this.iy][this.ix] = 0;
                explosion[explosion.length] =
                    new explode((this.ix - 1) * 32, (this.iy - 1) * 32 + 50, 3)
            }
        }
        break;
    case "down":
        if (a[this.iy + 1][this.ix] > 2 && ((((this.iy) * 32 + 50) - this.y <= 8))) {
            this.existence = false;
            if (a[this.iy + 1][this.ix] == 3) {
                a[this.iy + 1][this.ix] = 0;
                explosion[explosion.length] =
                    new explode((this.ix - 1) * 32, this.iy * 32 + 50, 3)
            }
        }
        break;
    case "left":
        if (a[this.iy][this.ix] > 2 && ((this.x + 8 - (this.ix * 32) <= 8))) {
            this.existence = false;
            if (a[this.iy][this.ix] == 3) {
                a[this.iy][this.ix] = 0;
                explosion[explosion.length] =
                    new explode((this.ix - 1) * 32, (this.iy - 1) * 32 + 50, 3)
            }
        }
        break;
    case "right":
        if (a[this.iy][this.ix + 1] > 2 && this.ix * 32 - this.x <= 8) {
            this.existence = false;
            if (a[this.iy][this.ix + 1] == 3) {
                a[this.iy][this.ix + 1] = 0;
                explosion[explosion.length] =
                    new explode((this.ix) * 32, (this.iy - 1) * 32 + 50, 3)
            }
        }
        break;
}
}
//cập nhật lại vị trí đạn sau mỗi frame
this.newPos = function () {
this.x += this.speedX;
this.y += this.speedY;
this.ix = Math.floor((this.x) / 32 + 1);
this.iy = Math.floor((this.y - 50) / 32 + 1);
}
}
//tạo các vụ nổ
function explode(x, y, t) {
this.step = 1;
this.time = t * 5;
this.img = new Image();
//hàm kiểm tra, khi qua đủ thời gian sẽ xóa sự tồn tại của vụ nổ
this.existence = function () {
if (this.step > this.time) return false;
else return true;
}
//cập nhật lại hình dạng vụ nổ qua các giai đoạn
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
    case 6:
        this.x = x - 17;
        this.y = y - 17;
        ctx.drawImage(this.img, this.x, this.y, 66, 66);
        this.step += 1;
        break;
}
}
}
//cập nhật lại toàn bộ màn hình game cùng các đối tượng bên trong theo mỗi frame
function updateGameArea() {
myGameArea.clear();
playerTank.speedX = 0;
playerTank.speedY = 0;
//nhận sự kiện bàn phím để điều khiển xe người chơi
if (myGameArea.keys && myGameArea.keys[37]) { playerTank.moveLeft(); }
if (myGameArea.keys && myGameArea.keys[39]) { playerTank.moveRight(); }
if (myGameArea.keys && myGameArea.keys[38]) { playerTank.moveUp(); }
if (myGameArea.keys && myGameArea.keys[40]) { playerTank.moveDown(); }
if (myGameArea.keys && myGameArea.keys[90]) { playerTank.shoot(); }
//cập nhật vị trí, vẽ xe tăng người chơi nếu game chưa kết thúc
if (endgame == false) {
playerTank.newPos();
playerTank.update();
}
//tạo xe tăng mới của địch
if (myGameArea.frameNo % 192 == 0 && enemyTank.length < enemyMax) {
enemyTankCount++;
let color = Math.floor(Math.random() * 3);
let type = Math.ceil(Math.random() * 3);
let armor = Math.ceil(Math.random() * 3);
enemyTank[enemyTank.length] = new eTank(color, type, armor, (enemyTankCount % 3) * 384, 50);
}
//điều khiển xe địch tự động lái, cập nhật vị trí và vẽ xe tăng địch
if (enemyTank.length > 0) {
for (i = 0; i < enemyTank.length; i++) {
    enemyTank[i].autoDrive();
    enemyTank[i].newPos();
    enemyTank[i].update();
}
}
//vẽ các vụ nổ, loại bỏ các vụ nổ đã trải qua đủ các giai đoạn (không còn tồn tại)
for (i = 0; i < explosion.length; i++) {
if (explosion[i].existence()) {
    explosion[i].update();
}
else explosion.splice(i, 1);
}
//vẽ lại bản đồ (ngoại trừ các mảng rừng)
myGameArea.drawMap();
//kiểm tra va chạm của đạn người chơi với xe tăng địch
if (playerShell.length > 0) {
for (i = 0; i < playerShell.length; i++) {
    if (playerShell[i].existence) {
        playerShell[i].newPos();
        playerShell[i].update();
        for (j = 0; j < enemyTank.length; j++) {
            if ((Math.abs(enemyTank[j].x - playerShell[i].x + 12) < 18)
                && (Math.abs(enemyTank[j].y - playerShell[i].y + 12) < 18)) {
                playerShell[i].existence = false;
                if (enemyTank[j].armor > 1) enemyTank[j].armor -= 1;
                else {
                    explosion[explosion.length] = new explode(enemyTank[j].x, enemyTank[j].y, 5);
                    score += enemyTank[j].score;
                    enemyTank.splice(j, 1);
                    if (Math.floor(score / 50000) == bonusLevel) {
                        enemyMax += 2;
                        playerLife += 1;
                        bonusLevel += 1;
                    }
                }
            }
        }
    }
    //loại bỏ các viên đạn không còn tồn tại (đã va chạm)
    else playerShell.splice(i, 1);
}
}
//kiểm tra va chạm của đạn của địch với xe tăng người chơi
if (enemyShell.length > 0) {
for (i = 0; i < enemyShell.length; i++) {
    if (enemyShell[i].existence) {
        enemyShell[i].newPos();
        enemyShell[i].update();
        if ((Math.abs(playerTank.x - enemyShell[i].x + 12) < 18)
            && (Math.abs(playerTank.y - enemyShell[i].y + 12) < 18)) {
            if (playerLife > 0) {
                explosion[explosion.length] = new explode(playerTank.x, playerTank.y, 5);
                enemyShell[i].existence = false;
                playerLife -= 1;
                playerTank.x = 300;
                playerTank.y = 594;
                playerTank.img.src = "Images/t1.png";
            }
            else if (endgame == false) {
                explosion[explosion.length] = new explode(playerTank.x, playerTank.y, 5);
                enemyShell[i].existence = false;
                endframe = myGameArea.frameNo + 25;
                endgame = true;
            }
        }
    }
    //loại bỏ các viên đạn không còn tồn tại (đã va chạm)
    else enemyShell.splice(i, 1);
}
}
//vẽ các mảng rừng
myGameArea.drawJungle();
//ghi lại số frame
myGameArea.frameNo += 1;
if (myGameArea.frameNo == endframe) { myGameArea.stop(); }
}