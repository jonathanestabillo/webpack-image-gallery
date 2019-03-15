import $ from 'jquery';
import faker from 'faker';
require('./main.css');

var columnCount = 3;
var imageCount = 6;
var content = '';

for (let colCount = 0; colCount <= columnCount; colCount++) {
    content += `<div class="column">`;
    for (let count = 0; count <= imageCount; count++) {
        let image = faker.image.image();
        content += `<img src="${image}" width=100% />`;
    }
    content += `</div>`;
}

console.log(content);
$('#content').append(content);