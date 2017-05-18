// util that spawns a child process
var spawn = require('child_process').spawn;

var path = require('path');

// reference to our node application server
var app = require('./app');

// starts the server
var server = app.listen( { port: 3000 }, function() {

    // on server ready launch the jasmine-node process with your test file
    var jasmineNode = spawn(path.join(__dirname, '../node_modules/.bin/jasmine-node.cmd'), 
                            [ './' ]);

    // logs process stdout/stderr to the console
    function logToConsole(data) {
        console.log(String(data));
    }
    jasmineNode.stdout.on('data', logToConsole);
    jasmineNode.stderr.on('data', logToConsole);
    jasmineNode.on('error', logToConsole);

    jasmineNode.on('exit', function(exitCode) {
        // when jasmine-node is done, shuts down the application server
        server.close();
    });
});