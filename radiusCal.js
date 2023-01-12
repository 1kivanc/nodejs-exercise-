// radius calculation

const argumnet = process.argv[2];

const radius = parseInt(argumnet);


const area = Math.PI * (radius * radius);

console.log(`${area.toFixed(2)}`);
