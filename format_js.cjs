const fs = require('fs');
let code = fs.readFileSync('extracted_zaytoon_raw.js', 'utf8');

// We can use a regex-based indentation or simple formatting
let out = '';
let indent = 0;
for (let i = 0; i < code.length; i++) {
    let char = code[i];
    if (char === '{') {
        indent++;
        out += '{\n' + '  '.repeat(indent);
    } else if (char === '}') {
        indent = Math.max(0, indent - 1);
        out += '\n' + '  '.repeat(indent) + '}';
    } else if (char === ';') {
        out += ';\n' + '  '.repeat(indent);
    } else {
        out += char;
    }
}

fs.writeFileSync('extracted_zaytoon_pretty.js', out);
console.log('Done! Pretty output lines:', out.split('\n').length);
