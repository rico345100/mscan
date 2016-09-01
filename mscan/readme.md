# mscan v1.0.0

Super light weight file scanner module for get specific file informations

## Q. License?
A. Free to use. Thanks.


## How to use?

1. include module into your project
   ```javascript
   const mscan = require('mscan');
   ```
2. specify directory where you want to search.
   ```javascript
   mscan.scan(PATH_FOR_SEARCH)
   .then((results) => {
       ...
   })
   .catch((err) => {
       ...
   })
   ```

Returning value is Object that has key as file name and detail informations in property like this:
    ```javascript
    {
        'exam.js': {
            stats: { ... },
            mime: 'application/javascript',
            isDirectory: false
        },
        'index.js': { ... },
        'node_modules': {
            stats: { ... },
            mime: 'application/octet-stream',
            isDirectory: true
        }
    }
    ```

Please don't hesitate to ask some issues on github issues page. Or you can send me a mail: rico345100@gmail.com
