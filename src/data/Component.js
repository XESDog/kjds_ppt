class Component {
    set uid(value) {
        this._uid = value;
    }

    get type() {
        return this._type;
    }

    get sceneID() {
        return this._sceneID;
    }

    get uid() {
        return this._uid;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    constructor(sceneID, type, x = 0, y = 0, width = 0, height = 0) {

        this._uid = Component.UID;
        this._sceneID = sceneID;
        this._type = type;

        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;

    }

    assign(data) {
        this._uid = data.uid;
        this._sceneID = data.sceneID;
        this._type = data.type;

        this._x = data.x;
        this._y = data.y;
        this._width = data.width;
        this._height = data.height;
    }

    clone() {

    }
    toString(){

    }

}

let ComponentType = {};
ComponentType.TXT = Symbol('txt');
ComponentType.PIC = Symbol('pic');
ComponentType.MOVIE = Symbol('movie');
ComponentType.SOUND = Symbol('sound');

Component._uid = 0;
/**
 * @return {number}
 */
Object.defineProperty(Component, 'UID', {
    get: function () {
        return Component._uid++;
    }
});
export {Component, ComponentType};