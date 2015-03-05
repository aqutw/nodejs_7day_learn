process.on('SIGTERM', function () {
    cleanUp();
    process.exit(0);
});

