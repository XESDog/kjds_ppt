import {Component} from "./Component";
class TxtComponent extends Component {
    get value() {
        return this._value;
    }

    constructor() {
        super(0);
        this._value = '';
    }

    assign(data) {
        super.assign(data);
        this._value = data.value;
    }

}
export {TxtComponent}