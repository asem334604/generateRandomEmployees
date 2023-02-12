class Company {
    #employees

    constructor(employees) {
        this.#employees = employees;
    }

    hire = (employee) => {
        return this.#employees.add(employee);
    }

    fire = (id) => {
        return this.#employees.remove(id);
    }

    computeBudget = () => {
        this.#employees.getAll().reduce((acc,val) => {
            return acc+=val.salary;
        },0)
    }
}