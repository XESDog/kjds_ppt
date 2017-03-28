import {LocalLibrary} from "./LocalLibrary";
class KJDocument {
    get currentSceneID() {
        return this._currentSceneID;
    }

    set currentSceneID(value) {
        this._currentSceneID = value;
    }

    get localLibrary() {
        return this._localLibrary;
    }

    get scenes() {
        return this._scenes;
    }

    getSceneByUID(uid) {
        for (let [key,] of this._scenes) {
            if (key.uid === uid) {
                return key;
            }
        }
        return null;
    }

    constructor() {
        this._scenes = new Map();
        this._localLibrary = new LocalLibrary();
        this._currentSceneID = -1;
    }

    assign(data) {
        this._currentSceneID = data.currentSceneID;
        this._localLibrary = data.localLibrary;
        this._scenes = data.scenes;
    }
}
export {KJDocument}