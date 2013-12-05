
define(['item'], function(Item) {

    var Items = {

        Sword2: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.SWORD2, "weapon");
                this.lootMessage = "You pick up a steel sword";
            },
        }),

       
        Test: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.TEST, "object");
                this.lootMessage = "Item loot text!";
                // this.isItem = true;
                // this.multiple = 5;
            },

            onLoot: function(player, game) {
                game.say('ITEM LOOTED!!!');
                this.__proto__.__proto__.onLoot.call(this, player, game); 
            }
        }),
       
        Pearlring: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.PEARLRING, "object");
                this.lootMessage = "Item loot text!";
                // this.isItem = true;
                // this.multiple = 5;
            },

            onLoot: function(player, game) {
                game.say('ITEM LOOTED!!!');
                this.__proto__.__proto__.onLoot.call(this, player, game); 
            }
        }),
       
        Legolasarmor: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.LEGOLASARMOR, "object");
                this.lootMessage = "Item loot text!";
                // this.isItem = true;
                // this.multiple = 5;
            },

            onLoot: function(player, game) {
                game.say('ITEM LOOTED!!!');
                this.__proto__.__proto__.onLoot.call(this, player, game); 
            }
        }),
       
        Snowpotion: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.SNOWPOTION, "object");
                this.lootMessage = "You have found a snow potion!";
                this.isItem = true;
                this.multiple = 1;
            },

            onUse : function(game, el) {
                console.log('=======>', this, game, el);
                game.player.startHealeffect();
            }
        }),
        /* Items */

        Axe: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.AXE, "weapon");
                this.lootMessage = "You pick up an axe";
            },
        }),

        RedSword: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.REDSWORD, "weapon");
                this.lootMessage = "You pick up a blazing sword";
            },
        }),

        BlueSword: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.BLUESWORD, "weapon");
                this.lootMessage = "You pick up a magic sword";
            },
        }),

        GoldenSword: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.GOLDENSWORD, "weapon");
                this.lootMessage = "You pick up the ultimate sword";
            },
        }),

        MorningStar: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.MORNINGSTAR, "weapon");
                this.lootMessage = "You pick up a morning star";
            },
        }),

        LeatherArmor: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.LEATHERARMOR, "armor");
                this.lootMessage = "You equip a leather armor";
            },
        }),

        MailArmor: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.MAILARMOR, "armor");
                this.lootMessage = "You equip a mail armor";
            },
        }),

        PlateArmor: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.PLATEARMOR, "armor");
                this.lootMessage = "You equip a plate armor";
            },
        }),

        RedArmor: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.REDARMOR, "armor");
                this.lootMessage = "You equip a ruby armor";
            },
        }),

        GoldenArmor: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.GOLDENARMOR, "armor");
                this.lootMessage = "You equip a golden armor";
            },
        }),

        IronmanArmor: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.IRONMANARMOR, "armor");
                this.lootMessage = "You feel the ironman power!";
            },

            onLoot: function(player) {
                game.say('I feeeeel goood');
                this.__proto__.__proto__.onLoot.call(this, player, game); 
            }
        }),

        Marblependant: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.MARBLEPENDANT, "object");
                this.lootMessage = "You found a marble pendant!";
                this.isItem = true;
            },

            onLoot: function(player, game) {
                game.say('I love jewerly!');
                this.__proto__.__proto__.onLoot.call(this, player, game); 
                // herency call
                // TODO: I should check why _super isnt working
            }
        }),

        Mushroom: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.MUSHROOM, "object");
                this.lootMessage = "You found 5 mushrooms!";
                this.isItem = true;
                this.multiple = 5;
            },

            onLoot: function(player, game) {
                game.say('Mushrooms!!!');
                this.__proto__.__proto__.onLoot.call(this, player, game); 
            }
        }),

        Flask: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.FLASK, "object");
                this.lootMessage = "You drink a health potion";
            },
        }),

        Cake: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.CAKE, "object");
                this.lootMessage = "You eat a cake";
            },
        }),

        Burger: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.BURGER, "object");
                this.lootMessage = "You can haz rat burger";
            },
        }),

        FirePotion: Item.extend({
            init: function(id) {
                this._super(id, Types.Entities.FIREPOTION, "object");
                this.lootMessage = "You feel the power of Firefox!";
            },

            onLoot: function(player) {
                player.startInvincibility();
            },
        }),
    };

    return Items;
});
