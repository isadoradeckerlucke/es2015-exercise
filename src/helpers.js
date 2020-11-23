// choose random item 
function choice(items){
    let index = Math.floor(Math.random() * items.length)
    return items[index]
}

// return a copy of the array without the first appearance of the item. if item not found, return undefined
function remove(item, items){
    for (let i = 0; i < items.length; i++){
        if (items[i] === item){
            return [...items.slice(0,i), ...items.slice(i+1)]
        }
    }
} 

export {choice, remove}