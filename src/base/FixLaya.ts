/**
 * @date 2024/4/17
 */

// 兼容打开界面的方式，调用onOpened
const ScenePrototype = Laya.Scene.prototype;
ScenePrototype.open = function (closeOther, param): void {
  this.onOpened(param);
};
