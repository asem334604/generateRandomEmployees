class Employees {

    #data;

    constructor() {
        this.#data = {};
    }


    get data() {
        return this.#data;
    }

    add = (employee) => {
        try{
            if (this.#data.length >= 50)
                throw new Error('You used all random employees')
            else if (this.#data[employee.id]) {
                throw new Error('This employee already exists');
            } else {
                this.#data[employee.id] = employee;
                //console.log(this.#data);
                return true;
            }
        } catch (e){
            console.log(e.message);
        }
    }

    remove = (id) => {
        let index;
        this.#data.forEach((val, i) => {
            if (val.id === id)
                index = i;
        })
        if (index) {
            this.#data.splice(index, 1);
        } else throw new Error('There is not such user')

    }

    getAll = () => {
        return Array.from(this.#data);
    }
    get = (id) => {
        if (this.#data[id])
            this.#data.filter(value => value.id === id)
        else throw new Error('There is not such employee')
    }
}