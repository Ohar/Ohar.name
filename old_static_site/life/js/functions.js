function createField (FIELD_SIZE, KOEF){
    var rows = '',
        $field,
        fieldId = '#lifeGrid';
        
    sizeX = FIELD_SIZE[0];
    sizeY = FIELD_SIZE[1];
    
    for (var i = 0; i < sizeY; i++) {
        rows += row(i, KOEF);
    }
            
    $('body').append('<table id="lifeGrid"><tbody">' + rows + '</tbody></table>');
         
    $field = $(fieldId);
    
    saveDOMLinks($field);
            
    return $field;
}
    
function nextLifeCycle (){
    setTimeout(function() {
        var $cells = $('td', field.DOMel),
            isNeedToChange = false;
        
        newStates = [];
        
        _.each($cells, function(cell){
            isNeedToChange = ifStateNeedToChange(cell) || isNeedToChange;
        });
        
        if (isNeedToChange) {
            setNewStates($cells);
            game.nextLifeCycle(field.DOMel);
        } else {
            field.DOMel.prepend('<caption>Игра окончена</caption>');
        }
    }, TIME);
}
                    
function cell (i, j, KOEF){
    return '<td id="' + j + '?' + i + '" ' +
           '   class="' + cellCondition(j, i, KOEF) + '" ' +
           '   data-i="' + i + '" ' +
           '   data-j="' + j + '">' + 
           '</td>';
}
                
function row (i, KOEF){
    var cells = '';
    for (var j = 0; j < sizeX; j++) {
        cells += cell(i, j, KOEF);
    }
    return '<tr>' + cells + '</tr>';
}
        
function cellCondition (x, y, KOEF){
    var condition;
    if (game && game.mode) {
        switch (game.mode || 'random') {
            case 'random':
                condition = Math.random() < (KOEF ? 1 - KOEF : .5);
                break;
            default:
                condition = checkIfInCoords(figures[game.mode], x, y);
        }
    }
    
    return condition ? 'alive' : 'dead';
}

function checkIfInCoords(coords, x, y){
    return Boolean(_.find(coords, function(e){
            return e[0] === x && e[1] === y;
        }) + 1);
}

function saveDOMLinks($field){
    var $tds = $('td', $field);
    _.each($tds, function(td){
        var $td = $(td),
            i = $td.data('i'),
            j = $td.data('j');
            
        if (!field.DOMcells[i]){
            field.DOMcells[i] = [];					
        }
        field.DOMcells[i][j] = $td;
    });
}

function setNewStates($cells) {
    _.each($cells, function(cell){ 
        var $cell = $(cell),
            i = $cell.data('i'),
            j = $cell.data('j');
    
        if (newStates[i][j]) {
            $cell.removeClass('dead').addClass('alive');
        } else{
            $cell.removeClass('alive').addClass('dead');
        }
    });
}

function ifStateNeedToChange(cell) {
    var $cell = $(cell),
        i = $cell.data('i'),
        j = $cell.data('j'),
        needChangeState = checkNeedChangeState($cell, j, i),
        oldState = checkState($cell),
        newState = needChangeState ? !oldState : oldState;
    newStates[i] = newStates[i] ? newStates[i] : [];
    newStates[i][j] = newState;
        
    return needChangeState;
}

function checkNeedChangeState($cell, x, y){
    var ngbrs = [
            getCellLink(y + 1, x + 1),
            getCellLink(y    , x + 1),
            getCellLink(y - 1, x + 1),
            getCellLink(y + 1, x    ),
            getCellLink(y - 1, x    ),
            getCellLink(y + 1, x - 1),
            getCellLink(y    , x - 1),
            getCellLink(y - 1, x - 1),
        ],
        aliveNgbsNumber = 0,
        cellIsAlive = checkState($cell),
        needChangeState = false;
    
    _.each(ngbrs, function(neigbour){
        if (neigbour && checkState(neigbour)) {
            aliveNgbsNumber++;
        }
    });
        
    // В пустой (мёртвой) клетке, 
    // рядом с которой ровно три живые клетки, зарождается жизнь.
    if (!cellIsAlive && aliveNgbsNumber == 3) {
        needChangeState = true;
    } else 
                
    // Если у живой клетки есть две или три живые соседки, 
    // то эта клетка продолжает жить. 
    if (cellIsAlive && (aliveNgbsNumber == 2 || aliveNgbsNumber == 3)) {
        needChangeState = false;
    } else 
                
    // В противном случае (если соседей меньше двух или больше трёх) 
    // клетка умирает («от одиночества» или «от перенаселённости»).
    if (cellIsAlive && (aliveNgbsNumber < 2 || aliveNgbsNumber > 3)) {
        needChangeState = true;
    }
        
    return needChangeState;
}
    
function getCellLink(y, x){
    if (y < 0) {
        y = FIELD_SIZE[1] + y;
    }
    if (y >= FIELD_SIZE[1]) {
        y = y - FIELD_SIZE[1];
    }
    if (x < 0) {
        x = FIELD_SIZE[0] + x;
    }
    if (x >= FIELD_SIZE[0]) {
        x = x - FIELD_SIZE[0];
    }
    return field.DOMcells[y][x];
}
    
function checkState($cell){
    return $cell.hasClass('alive');
}
    
function syncGameMode(){
    game.mode = location.hash.slice(1) || game.mode;
    location.hash = game.mode;
    $('.js-restart_game').val(game.mode);
}
