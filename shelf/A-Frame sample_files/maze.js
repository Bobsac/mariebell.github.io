var maze;
(function (maze) {
    var MapObject = (function () {
        function MapObject() {
            this.list = [];
        }
        MapObject.prototype.get = function (key) {
            for (var i = 0, n = this.list.length; i < n; i++) {
                var map = this.list[i];
                if (map.key == key) {
                    return map.value;
                }
            }
            return null;
        };
        MapObject.prototype.add = function (map) {
            this.list.push(map);
        };
        return MapObject;
    }());
    var Main = (function () {
        function Main() {
            var _this = this;
            this.max = 21;
            this.blocks = new MapObject();
            this.array = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
                [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
                [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
                [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];
            this.partClickListener = function (event) {
                var target = event.currentTarget;
                var key = target.getAttribute('id').replace('part', 'block');
                if (target.getAttribute('data-state') == '1') {
                    target.setAttribute('data-state', '0');
                    target.style.background = '#ececec';
                    _this.hideBlock(key);
                }
                else {
                    target.setAttribute('data-state', '1');
                    target.style.background = '#F00';
                    _this.showBlock(key);
                }
            };
            this.scene = document.querySelector('#scene');
            this.createMap();
        }
        Main.prototype.createMap = function () {
            var map = document.createElement('div');
            map.setAttribute('id', 'map');
            map.style.position = 'fixed';
            map.style.top = '5px';
            map.style.left = '0';
            map.style.padding = '10px';
            map.style.zIndex = '100';
            document.body.appendChild(map);
            for (var i = 0; i < this.max; i++) {
                var box = document.createElement('div');
                box.style.height = '11px';
                var oldPart = null;
                for (var n = 0; n < this.max; n++) {
                    var part = document.createElement('div');
                    part.setAttribute('data-state', this.array[i][n].toString());
                    part.setAttribute('id', 'part' + i + '_' + n);
                    part.style.width = '10px';
                    part.style.height = '10px';
                    part.style.background = '#F00';
                    part.style.marginRight = '1px';
                    part.style.cursor = 'pointer';
                    part.style.display = 'inline-block';
                    part.addEventListener('click', this.partClickListener);
                    if (!oldPart) {
                        box.appendChild(part);
                    }
                    else {
                        box.insertBefore(part, oldPart);
                    }
                    oldPart = part;
                }
                map.appendChild(box);
            }
            map.style.transform = 'scale(1, -1)';
            map.style.transform = 'rotate(90deg)';
            map.style.transform = 'scale(-1, 1)';
            map.style.transform = 'rotate(-90deg)';
            this.createBlocks();
        };
        Main.prototype.createBlock = function (posX, posZ) {
            var block = document.createElement('a-entity');
            block.setAttribute('geometry', 'primitive: box; width: 5; height: 10; depth: 5;');
            block.setAttribute('material', 'src: url(https://bulan.co/swings/demo/aframe-sample_02/assets/img/floor.jpg); repeat: 10 20; color: #444444;');
            block.setAttribute('position', posX + ' 0 ' + posZ);
            block.setAttribute('data-pos', posX + ' ' + posZ);
            block.setAttribute('static-body', 'true');
            this.scene.appendChild(block);
            return block;
        };
        Main.prototype.createBlocks = function () {
            for (var i = 0; i < this.max; i++) {
                for (var n = 0; n < this.max; n++) {
                    var block = this.createBlock(i * 5, n * 5);
                    var part = document.querySelector('#part' + i + '_' + n);
                    var key = 'block' + i + '_' + n;
                    this.blocks.add({
                        key: 'block' + i + '_' + n,
                        value: block
                    });
                    if (part.getAttribute('data-state') == '1') {
                        part.style.background = '#F00';
                        this.showBlock(key);
                    }
                    else {
                        part.style.background = '#ececec';
                        this.hideBlock(key);
                    }
                }
            }
        };
        Main.prototype.showBlock = function (key) {
            var block = this.blocks.get(key);
            var position = block.getAttribute('data-pos');
            var posList = position.split(' ');
            block.setAttribute('position', posList[0] + ' 0 ' + posList[1]);
        };
        Main.prototype.hideBlock = function (key) {
            var block = this.blocks.get(key);
            var position = block.getAttribute('data-pos');
            var posList = position.split(' ');
            block.setAttribute('position', posList[0] + ' -10 ' + posList[1]);
        };
        return Main;
    }());
    maze.Main = Main;
})(maze || (maze = {}));
new maze.Main();
