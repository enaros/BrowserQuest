
        {{nameCapital}}: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.{{nameUppercase}}, "{{type}}");
                this.lootMessage = "Item loot text!";
                // this.isItem = true;
                // this.multiple = 5;
            },

            onLoot: function(player, game) {
                game.say('ITEM LOOTED!!!');
                this.__proto__.__proto__.onLoot.call(this, player, game); 
            }
        }),
        /* Items */