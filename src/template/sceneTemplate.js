/**
 * Created by work on 2017/3/27.
 */

import {template as txtTemplate} from "./txtTemplate";
import {template as picTemplate} from "./picTemplate";
import {template as btnTemplate} from "./btnTemplate";
let template = {
    props: ['sceneData'],
    template: `<div :style="styleObject">
                    <div v-for="component in sceneData.components">
                        <div v-if="component.type==='txt'">
                            <txt-template :component-data="component"></txt-template>
                        </div>
                        <div v-if="component.type==='pic'">
                            <pic-template :component-data="component"></pic-template>
                        </div>
                        <div v-if="component.type==='btn'">
                            <btn-template :component-data="component"></btn-template>
                        </div>
                    </div>
                </div>`,

    data: function () {

        return {};

    },
    computed: {
        styleObject: function () {
            return {
                width: this.sceneData.width + 'px',
                height: this.sceneData.height + 'px',
                border: '1px solid black'
            }
        }
    },
    components: {
        'txt-template': txtTemplate,
        'pic-template': picTemplate,
        'btn-template': btnTemplate,
    }
};

export {template};
