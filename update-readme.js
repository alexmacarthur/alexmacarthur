const fs = require('fs');

try {
  const data = fs.readFileSync(`${__dirname}/README.md`, 'utf8');
  const newData = data.replace(/([0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2} (A|P)M)|{TIMESTAMP}/, (new Date()).toLocaleTimeString());

  fs.writeFileSync("README.md", newData);
} catch (err) {
  console.error(err);
}
