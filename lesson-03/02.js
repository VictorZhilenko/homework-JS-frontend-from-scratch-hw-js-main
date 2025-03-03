// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
    if(number%2 !== 1) {
        return true
    } else {
        return false
    }
}

const RETURN = isEven();
console.log(RETURN);
