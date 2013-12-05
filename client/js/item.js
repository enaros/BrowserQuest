
define(['entity'], function(Entity) {

    var Item = Entity.extend({
        init: function(id, kind, type) {
            this._super(id, kind);

            this.itemKind = Types.getKindAsString(kind);
            this.type = type;
            this.wasDropped = false;
        },

        hasShadow: function() {
            return true;
        },

        onLoot: function(player, game) {
            if(this.type === "weapon") {
                player.switchWeapon(this.itemKind);
            }
            else if(this.type === "armor") {
                player.armorloot_callback(this.itemKind);
            }

            if (this.isItem) {
                if (this.multiple) {
                    game.setItemMenu(this.itemKind, game.storage.getItem(this.itemKind) + this.multiple);
                } else {
                    game.setItemMenu(this.itemKind, 1);    
                }
                
                console.log(this);
            }
        },

        getSpriteName: function() {
            return "item-"+ this.itemKind;
        },

        getLootMessage: function() {
            return this.lootMessage;
        }
    });

    return Item;
});
