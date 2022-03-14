const core = require('@actions/core');
const ejs = require('ejs');
const fs = require('fs');

try {
    const fileTemplate = core.getInput('fileTemplate');
    const variables = JSON.parse(core.getInput('variables'));
    const fileOutput = core.getInput('fileOutput');

    ejs.renderFile(fileTemplate, variables, {}, function(err, str){
        // str => Rendered HTML string
        fs.writeFile(`${fileOutput}`, str, err => {
            if (err) {
              throw new Error(err);
            }
            //file written successfully
          })
    });

} catch(error) {
    core.setFailed(error.message);
}