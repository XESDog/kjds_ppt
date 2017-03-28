/**
 * Created by work on 2017/3/27.
 */

import {KJDocument} from "./KJDocument";
import {LocalLibrary} from "./LocalLibrary";
import {Scene} from "./Scene";
import {ImgComponent} from "./ImgComponent";
import {TxtComponent} from "./TxtComponent";
import {BtnComponent} from "./BtnComponent";
import {Action} from "./Action";

function initLocalLibrary(localLibrary) {
    let lib = new LocalLibrary();
    lib.assign(localLibrary);
    return lib;
}

function initComponent(sceneID, component) {
    let comp, type = component.type;

    if (type === 'pic') {
        comp = new ImgComponent(sceneID, type);
    } else if (type === 'txt') {
        comp = new TxtComponent(sceneID, type);
    } else if (type === 'btn') {
        comp = new BtnComponent(sceneID, type);
    }

    comp.assign(component);

    return comp;
}
function initScenes(scenes) {
    let ss = [];
    scenes.forEach((value) => {
        let s = new Scene(value.width, value.height);
        s.assign(value);

        value.components
        && value.components.length > 0
        && value.components.forEach((value) => {
            s.addComponent(initComponent(s.UID, value));
        });


        value.actions
        && value.actions.length > 0
        && value.actions.forEach((value) => {
            s.addAction(initAction(value));
        });


        ss.push(s);
    });
    return ss;
}
function initAction(action) {
    let a = new Action();
    a.assign(action);
    return a;
}

/**
 * 初始化KJDocument数据
 * @param kjDocument
 * @returns {KJDocument}
 */
function initKJDocumentFromJson(kjDocument) {
    let kjDoc = new KJDocument();


    let currentSceneID = kjDocument.currentSceneID;
    let localLibrary = initLocalLibrary(kjDocument.localLibrary);
    let scenes = initScenes(kjDocument.scenes);

    kjDoc.assign({currentSceneID, localLibrary, scenes});

    return kjDoc;
}

export {initKJDocumentFromJson};
