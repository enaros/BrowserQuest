
        {{nameCapital}}: Mob.extend({
            init: function(id) {
                this._super(id, Types.Entities.{{nameUppercase}});
                this.moveSpeed = 300;
                this.atkSpeed = 50;
                this.idleSpeed = 400;
                this.atkRate = 2000;
                this.attackCooldown = new Timer(this.atkRate);
                this.aggroRange = 3;
            },

            idle: function(orientation) {
                if(!this.hasTarget()) {
                    this._super(Types.Orientations.DOWN);
                } else {
                    this._super(orientation);
                }
            }
        }),
        /* mobs */