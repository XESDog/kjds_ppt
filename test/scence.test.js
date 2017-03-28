/**
 * Created by work on 2017/3/24.
 */

import {Scene} from "../src/data/Scene";
import {expect} from 'chai';

describe('Scence.UID', () => {
    it('Scence.UID取值测试', () => {
        expect(Scene.UID).to.be.equal(0);
        expect(Scene.UID).to.be.equal(1);
        expect(Scene.UID).to.be.equal(2);
    })
})