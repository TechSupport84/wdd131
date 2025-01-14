const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value.trim() !== '') {
        const li = document.createElement("li");
        li.textContent = input.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        li.append(deleteButton);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        list.append(li);
        input.value = '';
        input.focus();
    }
});
