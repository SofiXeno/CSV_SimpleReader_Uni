const fs = require('fs')

function processLineByLine(order) {
    const file = fs.readFileSync('students.csv', 'utf-8', true).split('\n')
    const grades = []
    for(let i = 0; i < file.length; i++){
        grades.push(file[i].split(';'))
    }
    console.log(grades)

    for (let i = 0; i < grades.length; i++) {
        let mean = 0
        for (let j = 0; j < grades[i].length; j++) {
            mean += Number.parseInt(grades[i][j])

        }
        console.log(mean)
        mean /= grades[i].length
        grades[i] = {data: grades[i], mean: mean.toFixed(1)}
    }
    switch (order) {

        case 'a':
            grades.sort((x,y) => x.mean-y.mean)
            break;
        case 'b':
            grades.sort((x,y) => y.mean-x.mean)
    }

    console.log(grades)

return grades;
}

module.exports = processLineByLine;