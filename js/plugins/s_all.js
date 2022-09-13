//調整
// Copyright (c) 2017 s1z

/*:
 * @plugindesc 調整
 * @author s1z
*/

//メニューステータス画面調整
Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 180;
    var width2 = Math.min(200, width - 180 - this.textPadding());
//    this.drawActorName(actor, x, y);
    this.drawActorName(actor, x, y + lineHeight * 2);
//    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorLevel(actor, x, y + lineHeight * 3);
//    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorIcons(actor, x2, y + lineHeight * 2);
//    this.drawActorClass(actor, x2, y);
//    this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
    this.drawActorHp(actor, x2, y + lineHeight * 3, width2);
//    this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
};

//アイテムカテゴリの調整と所持金窓非表示
Window_ItemCategory.prototype.makeCommandList = function() {
    this.addCommand(TextManager.item,    'item');
  //  this.addCommand(TextManager.weapon,  'weapon');
  //  this.addCommand(TextManager.armor,   'armor');
    this.addCommand(TextManager.keyItem, 'keyItem');
};

Window_ItemCategory.prototype.maxCols = function() {
    return 2;
};
//所持金窓非表示

Window_Gold.prototype.initialize = function(x, y) {
//var width = this.windowWidth();
//var height = this.windowHeight();
var width = 0;
var height = 0;
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

//メッセージウインドウのＸ位置変更
Window_Message.prototype.initialize = function() {
    var width = this.windowWidth();
    var height = this.windowHeight();
    var x = 50;  //////////
    Window_Base.prototype.initialize.call(this, x, 0, width, height);
    this.openness = 0;
    this.initMembers();
    this.createSubWindows();
    this.updatePlacement();
};

//メッセージウインドウのＹ位置変更
Window_Message.prototype.updatePlacement = function() {
    this._positionType = $gameMessage.positionType();

    this.y = this._positionType * (440) / 2;///////
};


//アイテム画面の文字の一行あたりの高さ変更
Window_ItemList.prototype.lineHeight = function() {
    return 58;
};



//選択肢の行間を変える
// Window_ChoiceList
//
// The window used for the event command [Show Choices].

Window_ChoiceList.prototype.lineHeight = function() {
    return 80;
};

//ゲームオーバー移行時のフェードアウトを失くす
Scene_Map.prototype.needsSlowFadeOut = function() {
    return (SceneManager.isNextScene(Scene_Title) 
        //||
            //SceneManager.isNextScene(Scene_Gameover)
            );
};

Scene_Gameover.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
  //  this.startFadeIn(this.slowFadeSpeed(), false);
};

//歩き速度変更（デフォルト256）
Game_CharacterBase.prototype.distancePerFrame = function() {
    return Math.pow(2, this.realMoveSpeed()) / 256;
};

//長押し2倍速の禁止
Scene_Map.prototype.isFastForward = function() {
　return false;
};
