$(function() {
    function initSort() {
        $('.column').sortable({
            cursor: 'move',
            connectWith: '.column',
            handle: '.column-header',
            helper: 'clone',
            placeholder: 'sortable-placeholder',
            revert: true
        });
    }
    initSort();

    $( ".list-cards" ).sortable({
        connectWith: ".list-cards"
      }).disableSelection();

    // function addList(event) {
    //     event.preventDefault();
        
    //     var listName = $(event.target).offsetParent().find("form").serializeArray();
    //     consoel.log(listName);
    // }


    $('body').on('click', '.list-cards .card .delete', function(event){
        $(event.target).parent().remove();
    });

    $('.new-card').submit(function(event) {
        event.preventDefault();
        var cardText = $(event.target).serializeArray();
        $(event.target).find('input').val('');

        if(cardText[0].value !== "") {
            var newCard = `<li class="card">
            ${cardText[0].value}
            <button class="button delete">&#10007;</button>
            </li>`;
            
            $(event.target).closest('.add-new-card').before(newCard);
        }
        else{
            alert("You must enter a valid name!");
        }
    });
});
