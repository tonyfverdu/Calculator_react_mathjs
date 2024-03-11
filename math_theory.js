//  Library mathjs  https://mathjs.org

/*
    Math.js is an extensive math library for JavaScript and Node.js. It features a flexible expression parser with support for 
    symbolic computation, comes with a large set of built-in functions and constants, and offers an integrated solution to work
    with different data types like numbers, big numbers, complex numbers, fractions, units, and matrices. Powerful and easy to use.

    Spanish: Math.js es una extensa biblioteca matemática para JavaScript y Node.js. Cuenta con un analizador de expresiones flexible
             compatible con cálculo simbólico, viene con un gran conjunto de funciones y constantes integradas y ofrece una solución
            integrada para trabajar con diferentes tipos de datos como números, números grandes, números complejos, fracciones, unidades
            y matrices. Poderoso y facil de usar.


    Version Downloads Build Status Maintenance License FOSSA Status Codecov Github Sponsor

    Features:

        1.- Supports numbers, big numbers, complex numbers, fractions, units, strings, arrays, and matrices.
        2.- Is compatible with JavaScript's built-in Math library.
        3.- Contains a flexible expression parser.
        4.- Does symbolic computation.
        5.- Comes with a large set of built-in functions and constants.
        6.- Can be used as a command line application as well.
        7.- Runs on any JavaScript engine.
        8.- Is easily extensible.
        9.- Open source.


    Usage: Math.js can be used in both node.js and in the browser.

      1.- Con Math.js, puede usarlo en módulos ES

          Cargue las funciones que necesita y úselas:

                  import { sqrt } from 'mathjs';

                  console.log(sqrt(-4).toString()) // 2i


          Para utilizar implementaciones ligeras y numéricas de todas las funciones:

                  import { sqrt } from 'mathjs/number'

                  console.log(sqrt(4).toString()) // 2
                  console.log(sqrt(-4).toString()) // NaN


          Puede crear una "instancia de mathjs" que permita la configuración e importación de funciones
          externas de la siguiente manera:

                  import { create, all } from 'mathjs'

                  const config = { }
                  const math = create(all, config)

                  console.log(math.sqrt(-4).toString()) //

      2.- Nodo.js:

          Cargue math.js en node.js (sistema de módulos CommonJS):

                  const { sqrt } = require('mathjs')

                  console.log(sqrt(-4).toString()) // 2i
          

      3.- Navegador (browser):

          Math.js se puede cargar como un archivo JavaScript normal en el navegador, use la variable global math
          ara acceder a la biblioteca una vez cargado:

                    <!DOCTYPE HTML>
                    <html>
                    <head>
                      <script src="math.js" type="text/javascript"></script>
                    </head>
                    <body>
                      <script type="text/javascript">
                        console.log(math.sqrt(-4).toString()) // 2i
                      </script>
                    </body>
                    </html>


                    
    Install math.js using npm:

                                    npm install mathjs

    Or download mathjs via one of the CDN's listed on the downloads page:

                                    https://mathjs.org/download.html

    Math.js can be used similar to JavaScript's built-in Math library. Besides that, math.js can evaluate expressions
    and supports chained operations.

        import {
          atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
        } from 'mathjs';

        // functions and constants
        round(e, 3)                    // 2.718
        atan2(3, -3) / pi              // 0.75
        log(10000, 10)                 // 4
        sqrt(-4)                       // 2i
        pow([[-1, 2], [3, 1]], 2)      // [[7, 0], [0, 7]]
        derivative('x^2 + x', 'x')     // 2 * x + 1

        // expressions
        evaluate('12 / (2.3 + 0.7)')   // 4
        evaluate('12.7 cm to inch')    // 5 inch
        evaluate('sin(45 deg) ^ 2')    // 0.5
        evaluate('9 / 3 + 2i')         // 3 + 2i
        evaluate('det([-1, 2; 3, 1])') // -7

        // chaining
        chain(3)
            .add(4)
            .multiply(2)
            .done()  // 14


    Test: To execute tests for the library, install the project dependencies once:

              npm install

          Then, the tests can be executed:

              npm test
          
          Additionally, the tests can be run on FireFox using headless mode:

              npm run test:browser

          To run the tests remotely on BrowserStack, first set the environment variables BROWSER_STACK_USERNAME
          and BROWSER_STACK_ACCESS_KEY with your username and access key and then execute:

              npm run test:browserstack

          You can separately run the code linter, though it is also executed with npm test:

              npm run lint

          To automatically fix linting issue, run:

              npm run format

          To test code coverage of the tests:

              npm run coverage

          To see the coverage results, open the generated report in your browser:

              ./coverage/lcov-report/index.html
*/