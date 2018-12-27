$(function(){
    var socket = io.connect('http://localhost:8001');
    socket.on('connected', (response) => console.log(response));

    socket.on('all', (response) => {
        response.data.forEach(element => {
            $('#data').append(
                `<tr>
                    <td>${element.id}</td>
                    <td>${element.task}</td>
                    <td>${element.start}</td>
                    <td>${element.end}</td>
                    <td>${element.note}</td>
                </tr>`
            );
        });
    })

    $('#save').on('click', () => {
        let task = $('#task').val()
        let start = $('#start').val()
        let end = $('#end').val()
        let note = $('#note').val()

        socket.emit('save', {
            'task': task,
            'start': start,
            'end': end,
            'note': note
        })
        
    })

    socket.on('save-msg', (response) => {
        
        $('#msg').append(response.data.msg)
    })
});