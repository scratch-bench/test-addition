/**
 * @description The `oustide` function returns a Promise that resolves to an object
 * created by the Factory pattern. The object has operations `BEGIN`, `ACQUIRE`, and
 * `DONE`. If any of these operations are called before `DONE`, it calls `console.error(e)`
 * with any given `e`. If all operations are successful (`DONE` is called) it extracts
 * the result returned from the promise.
 * 
 * @returns { object } The oustide() function generates an effect handler that performs
 * three actions: begins an acquire phase( Op.ACQUIRE), calls helper(data?) function;
 * if data is not provided and there is no makadata(); then it provides some default
 * makadatory to send it to the handler as input (in the place of any 'provided'
 * data); this operation goes until both signal terminator ( _sigterm()) has run its
 * course and operations done() return. Finally extraction ( .extract()); generates
 * a wrapped result which provides outer side effects  (ehandle);
 */
function oustide() {
  const x = 1;

  /**
   * @description This function takes input data (or any value), if it's not provided
   * or not valid then it returns `_made_data()` (a function made data). Otherwise it
   * runs `_transform()` on the input data.
   * 
   * @param { any } data - Nothing. The code passes `data` unchanged as its return value.
   * 
   * @returns { any } The function `_transform` takes input data as a parameter and
   * returns its transformed version. If the input data is null or missing (`data ??
   * `_made data()`), instead of returning null or throwing an error as some function
   * might do (especially one built around LINQ operations); this method returns the
   * results from `_makeData()`. Therefore all the _transform does is apply transformation
   * logic without caring about validity or null values. The return value is consistent;
   * the `_madeData()` output serves as the fallback input. This way you have no partial
   * application errors due to lack of a proper argument during runtime which could
   * potentially throw an exception and avoid common pitfalls related to transforms
   * when handling complex data transformations between collections.
   */
  const helper = (data) => _transform(data ?? _makedata());

  return Factory.create(
              /**
               * @description This anonymous function takes an argument e and calls the function console.error(e)
               * 
               * @param { object } e - The `e` parameter is the error object that will be passed
               * as an argument to the function when the promise is rejected. It provides information
               * about the reason for the rejection and can be accessed and manipulated within the
               * function as needed.
               * 
               * @returns { any } The function simply writes the error object to the browser console
               * using `console.error()`.  No explicit return value is given so the implicit return
               * type of `void` is assumed and 'undefined' is returned.
               */
    { with: { ehandle: (e) => console.error(e) }, id: _makeid() }
  )
    .chain(Operation.BEGIN)
    .chain(Operation.ACQUIRE)
    .curry(helper)
    .until(_sigterm())
    .until(Operation.DONE)
    .extract();
}
