



button.addEventListener('clic', function() {
    if (input.value.trim() !== '') {
        const input = document.querySelector('#favchap');
        const button = document.querySelector('button');
        const list = document.querySelector('list');

        const li = document.createElement('li');
        const deleteButton = document.createElement('deleteButton');

        li.textContent = input.value;

        deleteButton.textContent = '❌';

        li.append(deleteButton);

        li.append(li);
    }

    else {
        input.focus();
    }
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
    input.value = '';
  });