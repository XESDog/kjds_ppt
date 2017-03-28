/**
 * Created by work on 2017/3/27.
 */

let template = {
    props: ['componentData'],
    template: `<button :style="styleObject">click</button>`,
    data: function () {
        return {}
    },
    methods:{

    },
    computed: {

        styleObject: function () {
            return {
                position: "absolute",
                top: this.componentData.x + 'px',
                left: this.componentData.y + 'px',
            }
        }
    }
}

export {template}
