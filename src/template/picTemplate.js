/**
 * Created by work on 2017/3/27.
 */

let template = {
    name: 'pic-template',
    props: ['componentData'],
    template: `<img :style="styleObject" :src="componentData.src">`,
    data: function () {
        return {}
    },
    methods: {
        onClick: function () {
            console.log('abc');
        }
    },
    computed: {
        styleObject: function () {

            return {
                position: 'absolute',
                top: this.componentData.x + 'px',
                left: this.componentData.y + 'px',
                width: this.componentData.width + 'px',
                height: this.componentData.height + 'px',
            };
        }
    }

};

export {template};
