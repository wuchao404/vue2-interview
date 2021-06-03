import {List} from 'immutable'

const list1 = List([1,2,3])
const list2 = list1.push(4)

console.log(list1 == list2)