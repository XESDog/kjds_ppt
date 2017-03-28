/**
 * Created by work on 2017/3/24.
 */

import {initKJDocumentFromJson} from "./data/util";

import data from "./data.json";
import {template as sceneTemplate} from "./template/sceneTemplate";

$(document).ready(function () {

    let kjDoc = initKJDocumentFromJson(data);

    window.kjDoc=kjDoc;

    let scene = new Vue({
        el: '#scene',
        data: {

            sceneData: kjDoc.scenes[0],

        },
        components: {

            'scene-template': sceneTemplate,
        }
    });
});