const core = require('@actions/core');
const ejs = require('ejs');
const fs = require('fs');

try {
    const fileTemplate = core.getInput('fileTemplate');
    const variables = core.getInput('variables');
    const outputFolder = core.getInput('outputFolder');
    const outputFileName = core.getInput('outputFileName');

    ejs.renderFile(fileTemplate, variables, {}, function(err, str){
        // str => Rendered HTML string
        fs.writeFile(`${outputFolder}/${outputFileName}`, str, err => {
            if (err) {
              throw new Error(err);
            }
            //file written successfully
          })
    });

} catch(error) {
    core.setFailed(error.message);
}