const timesheet = {

    /*
    |--------------------------------------------------------------------------
    | Clients
    |--------------------------------------------------------------------------
    */
    client: {
        add: function() {

            let btn_add_client = document.querySelector('button#add_client');
            let input_client_keyCode = document.querySelector('input#input_client');

            input_client_keyCode.addEventListener("keyup", function(event) {
                if (event.keyCode === 13) {
                    timesheet.client.send();
                }
            });

            btn_add_client.addEventListener('click', timesheet.client.send);
        },
        all: function() {
            return JSON.parse(timesheet.server.all('clients'))
        },
        send: function() {

            let input_client = document.querySelector('input#input_client');
            let clients = [];

            if (input_client.value.length < 1) {
                alert('Please enter a client name');
            }

            if (timesheet.server.all('clients')) {
                clients = JSON.parse(timesheet.server.all('clients'));
            }

            clients.push({ id: clients.length, name: input_client.value });
            timesheet.server.insert('clients', clients);

            timesheet.views.clientListTable();
            console.log(clients);
            input_client.value = '';
        }
    },

    /*
    |--------------------------------------------------------------------------
    | Views
    |--------------------------------------------------------------------------
    */
    views: {
        clientListTable: function() {
            let client_view = document.querySelector('#list_clients tbody').innerHTML = '';
            client_view = document.querySelector('#list_clients tbody');
            let clients = timesheet.client.all();
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
    },

    /*
    |--------------------------------------------------------------------------
    | Server
    |--------------------------------------------------------------------------
    */
    server: {
        all: function(key) {
            return localStorage.getItem(key);
        },
        insert: function(key, param) {
            localStorage.setItem(key, JSON.stringify(param));
        }
    }
}

/*
|--------------------------------------------------------------------------
| Started
|--------------------------------------------------------------------------
*/
timesheet.client.add();
timesheet.views.clientListTable();