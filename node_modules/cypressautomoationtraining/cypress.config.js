// const { defineConfig } = require("cypress");



// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here

//       on('task', {
//         log(message) {
//           console.log(message);
//           return null;
//         }
//       });
//     },
//   },
// });


// const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

// module.exports = {
//   e2e: {
//     setupNodeEvents(on, config) {
//       // Register the downloadFile task
//       on('task', { downloadFile })
//       return config
//     },
//   },
// }





const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');


module.exports = (on, config) => {
  on('task', {
    parseXlsx({ filePath }) {
      return new promise((resolve, reject) => {
        try {
          const jsonData = xlsx.parse(fs.readFileSync(filePath));
          resolve(jsonData);
        } catch (e) {
          reject(e);
        }
      });
    }
  });
}
const readXlsx = require('./cypress/Excel/read-Xlsx')

module.exports = (on, config) => {
  on('task', {
    'readXlsx': readXlsx.read
  })
}   


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    video: true,
  
 "experimentalStudio": true,
  "experimentalSessionAndOrigin": true,
   "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        'readXlsx': readXlsx.read
      })
      on('task', {

        log(message) {

          console.log(message)



          return null

        },

      })

        on('task', {downloadFile})

      // implement node event listeners here
    },
  },
});     

/*
const { defineConfig } = require("cypress")

const xlsx = require("xlsx");
const mysql = require("mysql");
const syncSql = require("sync-sql");
module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout : 600000,
    watchForFileChanges : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
    
       
        generateJSONFromExcel: generateJSONFromExcel,
    
      });
    },

  },
  
});




// Excel To JSON
function generateJSONFromExcel(agrs) {
  const wb = xlsx.readFile(agrs.excelFilePath, { dateNF: "mm/dd/yyyy" });
  const ws = wb.Sheets[agrs.sheetName];
  return xlsx.utils.sheet_to_json(ws, { raw: false });
}
*/