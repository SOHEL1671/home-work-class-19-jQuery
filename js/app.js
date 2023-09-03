
$(document).ready(function () {
    let inputCount = 0;
    function addInputField() {
        inputCount++;

        const input = $('<input>', {
            type: 'text',
            name: 'dynamicInput' + inputCount,
        });

        const label = $('<label>').text('');

        $('#input-container').append(label, input);
    }

    function removeInputField() {
        if (inputCount > 0) {
            const container = $('#input-container');

            container.children().last().remove();
            container.children().last().remove();

            inputCount--;
        }
    }
    $('#add-button').click(addInputField);
    $('#remove-button').click(removeInputField);
});
