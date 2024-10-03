import {add_item, delete_item_by_id, get_item_title_by_id, get_items, update_item_title_by_id} from './data.js'

console.log(get_items())
console.log(add_item({id: 1, title: 'title'}))
console.log(add_item({id: 2, title: 'title 2'}))
console.log(add_item({id: 3, title: 'title 3'}))
console.log(add_item({id: 3, title: 'title 3.1'}))
console.log(add_item({id: 4, title: 'title 3'}))
console.log(get_items())
console.log(update_item_title_by_id(1, 'new title'))
console.log(get_items())
console.log(delete_item_by_id(4, 'new title'))
console.log(get_items())
console.log(get_item_title_by_id(3))