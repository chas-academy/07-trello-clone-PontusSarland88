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
    });

    $('body').on('click', '.list-cards .card .delete', function(event){
        $(event.target).parent().remove();
    });

    $('body').on('click', '.new-card', function() {
        event.preventDefault();
        var defaultThis = this;
        var dialogOverlay = $('#dialog-overlay');
        dialogOverlay.removeClass('hidden');
        $("#dialog").dialog();
        dialogOverlay.on('click', function() {
            dialogOverlay.addClass('hidden');
            $('#dialog').dialog('close');
        });

        $(function() {
            $('.save-card').submit(function (event) {
                var cardText = $(event.target).serializeArray();
                event.preventDefault();
                event.stopImmediatePropagation();
                $(event.target).find('input').val('');
                var date = getDate();
                if(cardText[0].value !== "") {
                    var newCard = `<li class="card">
                    <span class="card-title">${cardText[0].value} | </span>
                    <span class="date-title"> due date:  ${date}</span>
                    <button class="button cardInfo">&#128712;</button>
                    <button class="button delete">&#10007;</button>
                    </li>`;
                    $(defaultThis).closest('.add-new-card').before(newCard);
                }
                else {
                    alert("You must enter a valid name!");
                }
                dialogOverlay.addClass('hidden');
                $('#dialog').dialog('close');
            });
        });
    });

    $('#effect').on('click', function() {
        $( "#effect" ).animate({
            backgroundColor: "#000000",
            color: "#ffffff",
            width: 500
          }, 1000 );
    });


    function getDate() {
        var date =  $('#datepicker').datepicker('getDate');
        return date.toISOString().substring(0, 10);
    }

    $('#datepicker').datepicker({
        changeMonth: true,
        changeYear: true
      });

    $('#tabs').tabs({
        event: "mouseover"
    });
});
