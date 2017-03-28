import {Component} from "./Component";
class ImgComponent extends Component {
    get src() {
        return this._src;
    }

    constructor() {
        super(0);

        this._src = "";
    }

    assign(data) {
        super.assign(data);

        this._src = data.src;
    }
}
export {ImgComponent}