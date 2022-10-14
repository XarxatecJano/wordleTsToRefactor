var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Key_game, _Key_code;
export class Key {
    constructor(game, code) {
        _Key_game.set(this, void 0);
        _Key_code.set(this, void 0);
        __classPrivateFieldSet(this, _Key_game, game, "f");
        __classPrivateFieldSet(this, _Key_code, code, "f");
    }
    get game() {
        return __classPrivateFieldGet(this, _Key_game, "f");
    }
    get code() {
        return __classPrivateFieldGet(this, _Key_code, "f");
    }
    newKeyPressed() {
        this.pressed();
        __classPrivateFieldGet(this, _Key_game, "f").userInterface.changeBackgroundKey(__classPrivateFieldGet(this, _Key_code, "f"));
    }
}
_Key_game = new WeakMap(), _Key_code = new WeakMap();
