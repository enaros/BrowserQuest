#!/usr/bin/env node

var util = require('util'),
    path = require("path"),
    fs = require("fs"),
    Mustache = require("mustache"),
    copyFile = require("./lib/functions.js"),
    _ = require("underscore");

var getSpritesPath = function(name) {
    if (name) {
        return '../client/sprites/item-' + name + '.json'
    }
    return '../client/sprites/item-mushroom.json';
}

/* --------------------------------------------------------------------------------------------------- */

var entity = process.argv[2];
var name = process.argv[3];

var ENTITIES = ['mob', 'armor', 'object', 'npc', 'weapon'];

if (!_.contains(ENTITIES, entity)) {
    return console.log('error, first parameter should one of the following:', ENTITIES);
}

var o = {
    nameCapital: name.capitalize(),
    nameUppercase: name.toUpperCase(),
    name: name.toLowerCase(),
    type: entity,
    entityClassName: function() {
        if (this.type == 'mob') return 'Mobs';
        if (this.type == 'npc') return 'NPCs';
        return 'Items';
    },
    nextId: function() { return this.id + 1 },
    spriteName: function() { return (this.type == 'object') ? 'item-' + this.name : this.name; } ,
    exampleSpritePath: function(type) { 
            return '../client/sprites/_template_sprite_' + type + '.json'; 
    },
    spritePath: function() { 
            return '../client/sprites/' + this.spriteName() + '.json'; 
    },
    imgPath: function() { 
            return '../client/img/3/' + this.spriteName() + '.png'; 
    },
    exampleImgPath: function() { 
            return '../client/img/3/_template_' + this.type + '.png'; 
    }

}

// Define the rendering of the sprite in a json file
// ===================================================
// copy client/sprites/_template_sprite_{{type}}.json --> client/sprites/{{spriteName}}.json
// there are 5 different templates for: [mobs, npcs, objects, armors, weapons]

copyFile(o.exampleSpritePath(o.type), o.spritePath(), function(err) {
    if (err) console.log('error copying template sprite file');
    var data = fs.readFileSync(o.spritePath(), 'utf8');
    fs.writeFileSync(o.spritePath(), data.replace('template', o.spriteName()));
});


// Create the image in HI RES
// ===================================================
// copy client/img/3/_template_{{type}}.json --> client/img/3/{{spriteName}}.json
// there are 5 different templates for: [mobs, npcs, objects, armors, weapons]

copyFile(o.exampleImgPath(), o.imgPath(), function(err) {
    if (err) console.log('error copying template img file');
});



// Add it to the list of sprites
// =============================
var template = fs.readFileSync('./mustache_templates/sprites.js', 'utf8');
var data = fs.readFileSync('../client/js/sprites.js', 'utf8');
fs.writeFileSync('../client/js/sprites.js', data.replace(' /* sprites */', Mustache.render(template, o)));

// Add it to game.js
// =================
var template = fs.readFileSync('./mustache_templates/game.js', 'utf8');
var data = fs.readFileSync('../client/js/game.js', 'utf8');
fs.writeFileSync('../client/js/game.js', data.replace(' /* this.SpriteNames */', Mustache.render(template, o)));

// Add to Entities Array gametypes.js
// ==================================
var template = fs.readFileSync('./mustache_templates/gametypes1.js', 'utf8');
var data = fs.readFileSync('../shared/js/gametypes.js', 'utf8');
o.id = parseInt(data.match(/gametypes entities (\d+)/)[1]);
fs.writeFileSync('../shared/js/gametypes.js', data.replace(' /* gametypes entities ' + o.id + ' */', Mustache.render(template, o)));

// Add kind (gametypes.js)
// =======================
var template = fs.readFileSync('./mustache_templates/gametypes2.js', 'utf8');
var data = fs.readFileSync('../shared/js/gametypes.js', 'utf8');
fs.writeFileSync('../shared/js/gametypes.js', data.replace(' /* kinds */', Mustache.render(template, o)));

// EntityFactory (entityfactory.js)
// ================================
var template = fs.readFileSync('./mustache_templates/entityfactory.js', 'utf8');
var data = fs.readFileSync('../client/js/entityfactory.js', 'utf8');
fs.writeFileSync('../client/js/entityfactory.js', data.replace(' /* EntityFactory */', Mustache.render(template, o)));

// Items (items.js)
// ================
if (o.type == 'object') {
    var template = fs.readFileSync('./mustache_templates/items.js', 'utf8');
    var data = fs.readFileSync('../client/js/items.js', 'utf8');
    fs.writeFileSync('../client/js/items.js', data.replace(' /* Items */', Mustache.render(template, o)));
}

if (o.type == 'npc') {
    var template = fs.readFileSync('./mustache_templates/npcs.js', 'utf8');
    var data = fs.readFileSync('../client/js/npcs.js', 'utf8');
    fs.writeFileSync('../client/js/npcs.js', data.replace(' /* npcs */', Mustache.render(template, o)));
    
    var template = fs.readFileSync('./mustache_templates/npc.js', 'utf8');
    var data = fs.readFileSync('../client/js/npc.js', 'utf8');
    fs.writeFileSync('../client/js/npc.js', data.replace(' /* npctalk */', Mustache.render(template, o)));
}

if (o.type == 'mob') {
    var template = fs.readFileSync('./mustache_templates/mobs.js', 'utf8');
    var data = fs.readFileSync('../client/js/mobs.js', 'utf8');
    fs.writeFileSync('../client/js/mobs.js', data.replace(' /* mobs */', Mustache.render(template, o)));
    
    var template = fs.readFileSync('./mustache_templates/properties.js', 'utf8');
    var data = fs.readFileSync('../server/js/properties.js', 'utf8');
    fs.writeFileSync('../server/js/properties.js', data.replace(' /* properties */', Mustache.render(template, o)));
}

