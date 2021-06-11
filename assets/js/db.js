let db = openDatabase('mytimesheet', '1.0', 'Timesheet', 3 * 1024 * 1024);

db.transaction(function(tx) {
    tx.executeSql(`CREATE TABLE IF NOT EXISTS clientes (cliente_id INTEGER PRIMARY KEY, cliente_nome TEXT)`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS projetos (projeto_id INTEGER PRIMARY KEY, cliente_id INTEGER, projeto_descricao TEXT)`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS tarefas (tarefa_id INTEGER PRIMARY KEY, projeto_id INTEGER, tarefa_descricao TEXT)`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS timers (timer_id INTEGER PRIMARY KEY, tarefa_id INTEGER, tempo VARCHAR)`);
});

//INSERT setCliente('worldvisual');
//UPDATE setCliente('worldvisual', 3);
function setCliente(cliente_nome, where = null) {
    db.transaction(function(tx) {
        if (!where) {
            tx.executeSql('INSERT INTO clientes (cliente_nome) VALUES (?)', [cliente_nome]);
        } else {
            tx.executeSql('UPDATE clientes SET cliente_nome=? WHERE cliente_id=?', [cliente_nome, where]);
        }
    });
}

//INSERT setProjeto(1, 'apenas um teste 5')
//UPDATE setProjeto(1, 'apenas um teste 5', 2)
function setProjeto(cliente_id, projeto_descricao, where = null) {
    db.transaction(function(tx) {
        if (!where) {
            tx.executeSql('INSERT INTO projetos (cliente_id, projeto_descricao) VALUES (?, ?)', [cliente_id, projeto_descricao]);
        } else {
            tx.executeSql('UPDATE projetos SET cliente_id=?, projeto_descricao=?  WHERE projeto_id=?', [cliente_id, projeto_descricao, where]);
        }
    });
}

//INSERT setTarefa(2, 'dddddd')
//UPDATE setTarefa(2, 'dddddd', 1)
function setTarefa(projeto_id, tarefa_descricao, where = null) {
    db.transaction(function(tx) {
        if (!where) {
            tx.executeSql('INSERT INTO tarefas (projeto_id, tarefa_descricao) VALUES (?, ?)', [projeto_id, tarefa_descricao]);
        } else {
            tx.executeSql('UPDATE tarefas SET projeto_id=?, tarefa_descricao=?  WHERE tarefa_id=?', [projeto_id, tarefa_descricao, where]);
        }
    });
}

//INSERT setTimer(1, '00:00:20')
//UPDATE setTimer(1, '00:00:20', 1)
function setTimer(tarefa_id, tempo, where = null) {
    db.transaction(function(tx) {
        if (!where) {
            tx.executeSql('INSERT INTO timers (tarefa_id, tempo) VALUES (?, ?)', [tarefa_id, tempo]);
        } else {
            tx.executeSql('UPDATE timers SET tarefa_id=?, tempo=?  WHERE timer_id=?', [tarefa_id, tempo, where]);
        }
    });
}

//REMOVE removeColumn('tarefa', 3);
function removeColumn(table, id) {
    db.transaction(function(tx) {
        tx.executeSql('DELETE FROM ' + table + 's  WHERE ' + table + '_id=?', [id]);
    });
}