const targetFolder = '../image';
const fs = require('fs');
let imgObj = new Object();

fs.readdir(targetFolder, (err, file) => {
    if (err) console.log(err);
    file.forEach(f => {
        fs.stat(targetFolder + '/' + f, function (err, s) {
            if (s.isDirectory()) {
                const subFolder = targetFolder + '/' + f;
                fs.readdir(subFolder, (err, files) => {
                    if (err) console.log(err);
                    imgObj[f] = files.length - 1;
                    fs.writeFile('../init.json', JSON.stringify(imgObj), function (err) {
                        if (err) {
                            console.log(err);
                        } else {}
                    })
                });
            }
        });
    });
});