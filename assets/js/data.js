var client = {
    add: function() {
        //event.keyCode === 13
        let btn_add_client = document.querySelector('button#add_client');
        let input_client_keyCode = document.querySelector('input#input_client');

        input_client_keyCode.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                client.send();
            }
        });

        btn_add_client.addEventListener('click', client.send);
    },
    all: function() {
        return JSON.parse(server.all('clients'))
    },
    send: function() {

        let input_client = document.querySelector('input#input_client');
        let clients = [];

        if (input_client.value.length < 1) {
            alert('Please enter a client name');
        }

        if (server.all('clients')) {
            clients = JSON.parse(server.all('clients'));
        }

        clients.push({ id: clients.length, name: input_client.value });
        server.insert('clients', clients);

        views.clientListTable();
        console.log(clients);
        input_client.value = '';
    }
}
var views = {
    clientListTable: function() {
        let client_view = document.querySelector('#list_clients tbody').innerHTML = '';
        client_view = document.querySelector('#list_clients tbody');
        let clients = client.all();
        if (clients.length != -1) {
            clients.forEach(function(client, key) {
                client_view.innerHTML += `
            <tr id="${client.id}">
                <td>${client.id}</td>
                <td>${client.name}</td>
                <td>
                    <button class="btn btn-sm btn-success">
                        <i class="fas fa-eye"></i> Ativar
                    </button>
                </td>
            </tr>
            `;
            });
        }
    }
}

var server = {
    all: function(key) {
        return localStorage.getItem(key);
    },
    insert: function(key, param) {
        localStorage.setItem(key, JSON.stringify(param));
    }
}

/*
|--------------------------------------------------------------------------
| Started
|--------------------------------------------------------------------------
*/
client.add();
views.clientListTable();