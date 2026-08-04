let users = [];

const form = document.getElementById("userForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const user = {
        id: +new Date(),
        name: document.getElementById("name").value,
        city: document.getElementById("city").value,
        age: document.getElementById("age").value
    };

    users.push(user);

    console.log(users);

    form.reset();
});