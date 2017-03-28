/**
 * Created by work on 2017/3/27.
 */



let template = {
    name: 'txt-template',
    props: ['componentData'],
    template: `<input type="text" :value="componentData.value">`,
    data: function () {
        return {}
    },

};

export {template}