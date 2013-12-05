
        "{{name}}": [
            {
                "text" : [
                    { me: 'hi' },
                    { him: 'is this a test?' },
                    { me: 'yes it is!' },
                    { him: 'ciao!' },
                    function(game) { 
                        // game.teleport({ x: 78, y: 41 });
                        this.alreadySpoken = true; 
                    }
                ]
            },
            {
                "condition": function(game) { 
                    return (this.alreadySpoken);
                },
                "text": [
                    "Do you know the answer to life the universe and everything???",
                    "IT IS 42!"
                ]
            }
        ],
        /* npctalk */