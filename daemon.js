/* daemon.js */
function spawn(mainModule) {
    var worker = child_process.spawn('node', [ mainModule ]);

    worker.on('exit', //if broken, .....
    function (code) {
        if (code !== 0) {
            spawn(mainModule);//....run me again
        }
    });
}

spawn('worker.js');//start run me

