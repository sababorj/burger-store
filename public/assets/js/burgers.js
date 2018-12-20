$(document).ready( () => {
    // seeting up function when user clicks on devour button
    $('.devour').on('click',function(e){
        e.preventDefault();
        var id = 1;
        $.ajax('/api/put/'+ id, { method : "put"}).then( function(res){
            console.log(res);
            location.reload();
        })
    })

    // seeting up function when user clicks on submit button
    $('.submit').on('click', function(e){
        e.preventDefault();
        var name = $('#burgerName').val()
        $.ajax('/api/add/'+ name, { method : 'POSt'}).then( function(){
            location.reload();
        })
    })
})