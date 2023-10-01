//PART (D)
const ages = [25, 31, 42, 77];

// map function
const ex2d = ages.map((age) => {
    // if age is less than 70, return age * 2
    if (age < 70) {
        return age * 2
    } else {
        return age
    }
})
// print function return
console.log(ex2d)