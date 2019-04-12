const fs = require('fs');

function done(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

function errorHandler(command) {
  process.stdout.write(`Command "${command}" does not exist`);
  process.stdout.write('\nprompt > ');
}

function evaluateCmd(userInput) {
  const userInputArray = userInput.split(' ');
  const command = userInputArray[0];
  const input = userInputArray.slice(1);

  switch (command) {
    case 'echo':
      commandLibrary.echo(input.join(' '));
    break;
    case 'cat':
      commandLibrary.cat(input);
    break;
    case 'head':
      commandLibrary.head(input);
    break;
    case 'tail':
      commandLibrary.tail(input);
    break;
    default: errorHandler(command);
  }
}

const commandLibrary = {
  'echo': function(userInput) {
    done(userInput);
  },
  'cat': function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      done(data);
    });
  },
  'head': function(userInput) {
    let args = userInput.length > 1;
    let n = args ? Math.abs(parseInt(userInput[0])) : 10 ;
    let fileName= userInput[ args ? 1 : 0 ];

    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      var output = data.toString().split('\n', n).join('\n');
      done(output);
    });
  },
  'tail': function(userInput) {
    let args = userInput.length > 1;
    let n = args ? Math.abs(parseInt(userInput[0])) : 10 ;
    let fileName= userInput[ args ? 1 : 0 ];

    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      var output = data.toString().split('\n').slice(-(n)).join('\n');
      done(output);
    });
  }
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;