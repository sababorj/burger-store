$(document).ready( () => {
    // seeting up function when user clicks on devour button
    $('.devour').on('click',function(){
        alert('devour')
    })

    // seeting up function when user clicks on submit button
    $('.submit').on('click', function(e){
        e.preventDefault();
        alert('submited')
    })
})