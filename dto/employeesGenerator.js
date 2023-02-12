class EmployeesGenerator {
    #random;
    #database;

    constructor(random) {
        this.#random = random;
        this.#database = [
            {
                'id': 1,
                'emailAddress': 'uthjn8rl1F@example.com',
                'name': 'Rocco Rivera',
                'salary': 98534,
                'gender': 'male',
                'title': 'Wage Employee'
            }, {
                'id': 2,
                'emailAddress': 'uFDqfpU9VC@example.com',
                'name': 'Kaitlyn Barber',
                'salary': 35224,
                'gender': 'female',
                'title': 'Sales Manager'
            }, {
                'id': 3,
                'emailAddress': 'RHo1ihKNWk@example.com',
                'name': 'Gianna Lang',
                'salary': 10476,
                'gender': 'male',
                'title': 'Wage Employee'
            }, {
                'id': 4,
                'emailAddress': 'nlMSW9GlZk@example.com',
                'name': 'Clark Osborn',
                'salary': 46361,
                'gender': 'female',
                'title': 'Manager'
            }, {
                'id': 5,
                'emailAddress': 'CVkDwukdxd@example.com',
                'name': 'Troy Nolan',
                'salary': 16705,
                'gender': 'female',
                'title': 'Sales Person'
            }, {
                'id': 6,
                'emailAddress': 'Cg18dS3H7D@example.com',
                'name': 'Connor Macias',
                'salary': 16353,
                'gender': 'female',
                'title': 'Sales Person'
            }, {
                'id': 7,
                'emailAddress': 'iX5yHAIRnC@example.com',
                'name': 'Troy Nolan',
                'salary': 64127,
                'gender': 'female',
                'title': 'Wage Employee'
            }, {
                'id': 8,
                'emailAddress': 'yCVwtCHjLn@example.com',
                'name': 'Sabrina Woodward',
                'salary': 54975,
                'gender': 'female',
                'title': 'Wage Employee'
            }, {
                'id': 9,
                'emailAddress': '1uWJJW8ifm@example.com',
                'name': 'Rocco Rivera',
                'salary': 95011,
                'gender': 'female',
                'title': 'Sales Manager'
            }, {
                'id': 10,
                'emailAddress': 'phd4e6c6m1@example.com',
                'name': 'Jazlyn Middleton',
                'salary': 48773,
                'gender': 'female',
                'title': 'Wage Employee'
            }, {
                'id': 11,
                'emailAddress': 'xYpNDqCINU@example.com',
                'name': 'Enrique Cowan',
                'salary': 97398,
                'gender': 'female',
                'title': 'Sales Person'
            }, {
                'id': 12,
                'emailAddress': 'RpSkfDziDU@example.com',
                'name': 'Ibrahim Boyle',
                'salary': 78999,
                'gender': 'male',
                'title': 'Sales Manager'
            }, {
                'id': 13,
                'emailAddress': 'P6AaHJMKRg@example.com',
                'name': 'Samson Everett',
                'salary': 66579,
                'gender': 'female',
                'title': 'Manager'
            }, {
                'id': 14,
                'emailAddress': 'RC0Zn1LpbQ@example.com',
                'name': 'Caden Shepard',
                'salary': 52378,
                'gender': 'male',
                'title': 'Sales Manager'
            }, {
                'id': 15,
                'emailAddress': '6heJtXO4ba@example.com',
                'name': 'Romeo Cline',
                'salary': 29315,
                'gender': 'male',
                'title': 'Wage Employee'
            }, {
                'id': 16,
                'emailAddress': 'SG5xZyFSzp@example.com',
                'name': 'Kaylin Hunter',
                'salary': 82736,
                'gender': 'female',
                'title': 'Manager'
            }, {
                'id': 17,
                'emailAddress': '6uNaQIGk4A@example.com',
                'name': 'Maia Walker',
                'salary': 32655,
                'gender': 'male',
                'title': 'Sales Person'
            }, {
                'id': 18,
                'emailAddress': 'ZSU1BB12Nm@example.com',
                'name': 'Samson Everett',
                'salary': 62882,
                'gender': 'male',
                'title': 'Manager'
            }, {
                'id': 19,
                'emailAddress': 'rDwFN8IdRk@example.com',
                'name': 'Winston Wilson',
                'salary': 94338,
                'gender': 'male',
                'title': 'Sales Manager'
            }, {
                'id': 20,
                'emailAddress': 'iv0fL9H7mQ@example.com',
                'name': 'Zayden Welch',
                'salary': 43590,
                'gender': 'male',
                'title': 'Wage Employee'
            }, {
                'id': 21,
                'emailAddress': '9ElWxu2y6z@example.com',
                'name': 'Keshawn Liu',
                'salary': 73094,
                'gender': 'male',
                'title': 'Wage Employee'
            }, {
                'id': 22,
                'emailAddress': '3khl1RTdN9@example.com',
                'name': 'Tiffany Donovan',
                'salary': 12598,
                'gender': 'male',
                'title': 'Sales Person'
            }, {
                'id': 23,
                'emailAddress': 'dybmba134h@example.com',
                'name': 'Isaias Haas',
                'salary': 60039,
                'gender': 'male',
                'title': 'Wage Employee'
            }, {
                'id': 24,
                'emailAddress': 'OblvAMnN2W@example.com',
                'name': 'Adelyn Stone',
                'salary': 95688,
                'gender': 'male',
                'title': 'Sales Person'
            }, {
                'id': 25,
                'emailAddress': 'KmXCnG4Vw2@example.com',
                'name': 'Adelyn Stone',
                'salary': 71481,
                'gender': 'male',
                'title': 'Sales Manager'
            }, {
                'id': 26,
                'emailAddress': 'xqegboiWLu@example.com',
                'name': 'Jackson Sweeney',
                'salary': 31493,
                'gender': 'female',
                'title': 'Wage Employee'
            }, {
                'id': 27,
                'emailAddress': 'PZP3EBsT03@example.com',
                'name': 'Isaias Haas',
                'salary': 25498,
                'gender': 'female',
                'title': 'Wage Employee'
            }, {
                'id': 28,
                'emailAddress': 'WgISCjclQj@example.com',
                'name': 'Gabriel Flynn',
                'salary': 89901,
                'gender': 'male',
                'title': 'Wage Employee'
            }, {
                'id': 29,
                'emailAddress': 'oLmeblPfj9@example.com',
                'name': 'Isis Oneill',
                'salary': 51503,
                'gender': 'female',
                'title': 'Sales Person'
            }, {
                'id': 30,
                'emailAddress': 'wjnKjeswBI@example.com',
                'name': 'Sadie Mccormick',
                'salary': 76982,
                'gender': 'male',
                'title': 'Manager'
            }, {
                'id': 31,
                'emailAddress': 'LREkleRAXO@example.com',
                'name': 'Asher Mcfarland',
                'salary': 95845,
                'gender': 'male',
                'title': 'Sales Manager'
            }, {
                'id': 32,
                'emailAddress': '9SHORz6ORR@example.com',
                'name': 'Maliyah Joseph',
                'salary': 4486,
                'gender': 'female',
                'title': 'Manager'
            }, {
                'id': 33,
                'emailAddress': 'Upt8YMM9YI@example.com',
                'name': 'Cooper Fischer',
                'salary': 28561,
                'gender': 'female',
                'title': 'Sales Person'
            }, {
                'id': 34,
                'emailAddress': 'ZdNXOOH2gs@example.com',
                'name': 'Braedon Hurst',
                'salary': 54966,
                'gender': 'male',
                'title': 'Manager'
            }, {
                'id': 35,
                'emailAddress': 'SJzLaPw7HU@example.com',
                'name': 'Kaitlyn Barber',
                'salary': 25188,
                'gender': 'male',
                'title': 'Sales Manager'
            }, {
                'id': 36,
                'emailAddress': 'kBcr9GVUyg@example.com',
                'name': 'Denisse Briggs',
                'salary': 13728,
                'gender': 'male',
                'title': 'Sales Person'
            }, {
                'id': 37,
                'emailAddress': 'bqficjh7dM@example.com',
                'name': 'Alexzander Kemp',
                'salary': 5151,
                'gender': 'male',
                'title': 'Sales Person'
            }, {
                'id': 38,
                'emailAddress': 'gLYfQsobV4@example.com',
                'name': 'Brandon Forbes',
                'salary': 77274,
                'gender': 'female',
                'title': 'Wage Employee'
            }, {
                'id': 39,
                'emailAddress': 'NN9forJWa1@example.com',
                'name': 'Cyrus Dorsey',
                'salary': 79595,
                'gender': 'male',
                'title': 'Sales Manager'
            }, {
                'id': 40,
                'emailAddress': 't3V4hTEvsr@example.com',
                'name': 'Jordyn Rodgers',
                'salary': 8359,
                'gender': 'male',
                'title': 'Sales Manager'
            }, {
                'id': 41,
                'emailAddress': '0vYCxuar6J@example.com',
                'name': 'Isaiah Peterson',
                'salary': 43157,
                'gender': 'male',
                'title': 'Sales Manager'
            }, {
                'id': 42,
                'emailAddress': 'SOM9h5YZJo@example.com',
                'name': 'Sadie Mccormick',
                'salary': 29368,
                'gender': 'female',
                'title': 'Wage Employee'
            }, {
                'id': 43,
                'emailAddress': '207PEZTipJ@example.com',
                'name': 'Enrique Cowan',
                'salary': 17298,
                'gender': 'male',
                'title': 'Sales Person'
            }, {
                'id': 44,
                'emailAddress': 'uoLrLYAY7U@example.com',
                'name': 'Cyrus Dorsey',
                'salary': 72554,
                'gender': 'male',
                'title': 'Sales Person'
            }, {
                'id': 45,
                'emailAddress': 'qlqsrvnFPq@example.com',
                'name': 'Maliyah Joseph',
                'salary': 46469,
                'gender': 'male',
                'title': 'Sales Person'
            }, {
                'id': 46,
                'emailAddress': 'JjmWhcoWew@example.com',
                'name': 'Francisco Novak',
                'salary': 32287,
                'gender': 'male',
                'title': 'Sales Person'
            }, {
                'id': 47,
                'emailAddress': '4RwKX3nL6M@example.com',
                'name': 'Caden Shepard',
                'salary': 96496,
                'gender': 'female',
                'title': 'Manager'
            }, {
                'id': 48,
                'emailAddress': 'xL8Tn56C1y@example.com',
                'name': 'Jazlyn Middleton',
                'salary': 90699,
                'gender': 'male',
                'title': 'Wage Employee'
            }, {
                'id': 49,
                'emailAddress': 'cRLGgg0sA4@example.com',
                'name': 'Ibrahim Boyle',
                'salary': 2290,
                'gender': 'male',
                'title': 'Manager'
            }, {
                'id': 50,
                'emailAddress': 'HTyviElTef@example.com',
                'name': 'Maliyah Joseph',
                'salary': 51245,
                'gender': 'female',
                'title': 'Wage Employee'
            }]
    }

    getRandomEmployee = () => {
        const random = new Random();
        return random.getRandomElement(this.#database);
    }
}