class Action {
    get effects() {
        return this._effects;
    }

    get endUID() {
        return this._endUID;
    }

    get condition() {
        return this._condition;
    }

    get startUID() {
        return this._startUID;
    }

    constructor() {

        this._startUID = -1;//触发者
        this._condition = -1;
        this._endUID = -1;//响应者
        this._effects = [];

    }

    assign(data) {
        this._startUID = data._startUID;
        this._endUID = data._endUID;
        this._condition = data._condition;
        this._effects = data._effects;
    }
}

let ActionCondition = {};
ActionCondition.CLICK = Symbol('click');
ActionCondition.MOUSE_OVER = Symbol('mouse_over');
ActionCondition.MOUSE_DOWN = Symbol('mouse_down');
ActionCondition.MOUSE_UP = Symbol('mouse_up');

let Effect = {};
Effect.FADE_IN = Symbol('fadeIn');


export {Action, ActionCondition, Effect}