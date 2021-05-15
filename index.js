// Write your solution here!






let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    return drivers.push(name)
}


function destructivelyPrependDriver(name) {
    return drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
    return drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
    return drivers.shift(name)
}

function appendDriver(name) {
    return [...drivers, name]
}

function prependDriver(name) {
    return [name, ...drivers];
}

function removeLastDriver() {
    return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
    return drivers.slice(1);
}



//let destructivelyAppendDriver = drivers.push('name')
//const destructivelyAppendDriver = [...drivers, 'name']
//let destructivelyAppendDriver = [...drivers, 'name']
///drivers.push('name')
//drivers.splice(3, 0, 'name');
