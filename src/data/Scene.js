class Scene {
    get actions() {
        return this._actions;
    }

    get components() {
        return this._components;
    }

    set uid(value) {
        this._uid = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get uid() {
        return this._uid;
    }

    constructor(width = 400, height = 300) {
        this._width = width;
        this._height = height;
        this._uid = Scene.UID;

        this._components = [];
        this._actions = [];
    }

    assign(data) {
        this._uid = data.uid;
        this._width = data.width;
        this._height = data.height;
    }

    /**
     * 添加组件，如果已经存在了，则不需要添加，返回false，添加成功返回true
     *
     * @param component
     * @returns {boolean}
     */
    addComponent(component) {
        if (this.hasComponent(component)) {
            return false;
        }
        this._components.push(component);
        return true;
    }

    /**
     * 是否有该组件
     *
     * @param component
     * @returns {boolean}
     */
    hasComponent(component) {
        return this._components.indexOf(component) !== -1;
    }

    /**
     * 移除该组件，如果没有该组件，则不需要移除，返回false，移除成功返回true
     * @param component
     * @returns {boolean}
     */
    removeComponent(component) {
        let result = [];
        if (this.hasComponent(component)) {
            let index = this._components.indexOf(component);
            result = this._components.splice(index, 1);
            return result.length > 0;
        }
        return false;
    }

    getComponentByUID(uid) {
        let result = this._components.filter((value) => {
            return value.uid === uid;
        });

        return result.length > 0 ? result[0] : null;
    }

    /**
     * 根据UID移除组件，返回移除的组件
     * @param uid
     * @returns {Component}
     */
    removeComponentByUID(uid) {
        let comp = this.getComponentByUID(uid);
        if (comp) {
            this.removeComponent(comp);
            return comp;
        }
        return null;
    }

    cleanComponent() {
        this._components = [];
    }

    addAction(action) {
        this._actions.push(action);
    }
}


Scene._uid = 0;
/**
 * @return {number}
 */
Object.defineProperty(Scene, 'UID', {
    get: function () {
        return Scene._uid++;
    }
});
export {Scene}