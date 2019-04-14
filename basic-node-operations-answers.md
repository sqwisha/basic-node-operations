## Questions

> 1 - Run the commands `sort`, `wc` and `uniq` on the `commands.js` file. Explain how they work and what the output was.

- `sort` output all the lines in `commands.js` alphabetically. This is the default behavior without any parameters such as `-r` for reverse.
  - output:
  ````shell








          commandLibrary.cat(input);
          commandLibrary.echo(input.join(' '));
          commandLibrary.head(input);
          commandLibrary.tail(input);
          done(data);
          done(output);
          done(output);
          if (err) throw err;
          if (err) throw err;
          if (err) throw err;
          var output = data.toString().split('\n').slice(-(n)).join('\n');
          var output = data.toString().split('\n', n).join('\n');
        break;
        break;
        break;
        break;
        case 'cat':
        case 'echo':
        case 'head':
        case 'tail':
        const fileName = fullPath[0];
        default: errorHandler(command);
        done(userInput);
        fs.readFile(fileName, (err, data) => {
        fs.readFile(fileName, (err, data) => {
        fs.readFile(fileName, (err, data) => {
        let args = userInput.length > 1;
        let args = userInput.length > 1;
        let fileName= userInput[ args ? 1 : 0 ];
        let fileName= userInput[ args ? 1 : 0 ];
        let n = args ? Math.abs(parseInt(userInput[0])) : 10 ;
        let n = args ? Math.abs(parseInt(userInput[0])) : 10 ;
        });
        });
        });
      'cat': function(fullPath) {
      'echo': function(userInput) {
      'head': function(userInput) {
      'tail': function(userInput) {
      const command = userInputArray[0];
      const input = userInputArray.slice(1);
      const userInputArray = userInput.split(' ');
      process.stdout.write('\nprompt > ');
      process.stdout.write('\nprompt > ');
      process.stdout.write(`Command "${command}" does not exist`);
      process.stdout.write(output);
      switch (command) {
      }
      }
      },
      },
      },
    const commandLibrary = {
    const fs = require('fs');
    function done(output) {
    function errorHandler(command) {
    function evaluateCmd(userInput) {
    module.exports.commandLibrary = commandLibrary;
    module.exports.evaluateCmd = evaluateCmd;
    }
    }
    }
    };
  ````

- `wc` output was `36      74     808 commands.js`, listing the new line count, the word count, and the byte count.
- `uniq` output all the text of `commands.js` because no adjacent lines were identical. `uniq`'s job is to collapse adjacent identical lines into one line and output all lines, which are all unique.
  ````shell
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
  ````

> 2 - Using the pipe (`|`) connect at least two commands and run it on `commands.js`. Explain what the output was and why the specific data was outputted.

`sort commands.js | uniq`

The output wall all lines in `commands.js` in alphabetical order, with only one `break;` and one blank line. `sort` put all lines in order, and `uniq` was able to detect the only repeating lines (`break;` and empty line), and reduced them to one line.

> 6 - **Reverse String**
> Given a *string*, reverse the order of characters in each word within a sentence while maintaining the original word order and whitespace and return the string.

```JavaScript
function reverseString(inputString) {
  var inputArray = inputString.split(' ');
  var newArray = [];

  inputArray.forEach(word => {
    let wordArray = word.split('');
    newArray.push(wordArray.reverse().join(''));
  });

  return newArray.join(' ');
}

reverseString("I'm learning to program algorithms!");
// "m'I gninrael ot margorp !smhtirogla"

reverseString("The Wheel weaves as the Wheel wills");
// "ehT leehW sevaew sa eht leehW slliw"
```


### Commands Implementation Output
````shell
### error handler
prompt > what commands.js
Command "what" does not exist

### head with argument
prompt > head -4 commands.js
const fs = require('fs');

function done(output) {
  process.stdout.write(output);

### head without argument (default 10 lines)
prompt > head commands.js
const fs = require('fs');

function done(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

function errorHandler(command) {
  process.stdout.write(`Command "${command}" does not exist`);
  process.stdout.write('\nprompt > ');

### tail with argument
prompt > tail -4 commands.js
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;

### tail without argument (default 10 lines)
prompt > tail commands.js
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      var output = data.toString().split('\n').slice(-(n)).join('\n');
      done(output);
    });
  }
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
````