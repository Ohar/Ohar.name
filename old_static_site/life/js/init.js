var KOEF = .85,
    FIELD_SIZE = [60, 40],
    TIME = 300,
    newStates = [],
    game = {
        nextLifeCycle: nextLifeCycle,
        mode: 'random',
        restart: function(mode){
                    this.mode = mode;
                    field.recreate();
                },
    },
    field = {
        DOMel: null,
        DOMcells: [],
        create: function(){
                    this.DOMel = createField(FIELD_SIZE, KOEF);
                },
        destroy: function(){
                    this.DOMel.remove();
                },
        recreate: function(){
                    this.destroy();
                    this.DOMcells = [];
                    this.create();
                },
    };

$(function(){
    // syncGameMode();
	field.create();        
	game.nextLifeCycle();
});