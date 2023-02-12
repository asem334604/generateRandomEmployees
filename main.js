(() => {
    const genUsers = document.getElementById('gen_users');
    const content = document.getElementById('content');

    genUsers.addEventListener('click', (evt) => {
        content.innerHTML = '';
        const employeesGenerator = new EmployeesGenerator();
        const employees = new Employees();
        const ul = document.createElement('ul');
        content.appendChild(ul);
        const list = new List('ul');

        while (Object.keys(employees.data).length < 20) {
            const employee = employeesGenerator.getRandomEmployee();
            employees.add(employee);
        }
        console.log(employees.data);

        Object.values(employees.data).forEach(el => list.addItem(JSON.stringify(el)));
        Array.from(ul.children).forEach(el =>
            el.classList.add('card', 'my-3', 'p-3', 'h4', 'bg-light')
        )

    })

})()