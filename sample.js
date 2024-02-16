/**
 * @description This is an anonymous self-invoking function that returns a Generator
 * object which upon activation creates two functions.
 * The first function takes any amount of data and applies a transformation to it as
 * long as there is an ongoing operation. Once terminated either due to the user's
 * preference (signaling SIGTERM) or at its logical end(which should only be
 * Operation.DONE), a chain extraction method is run on all its results prior to
 * chaining two initial operations Begin and Acquire to yield data transformed
 * accordingly for further consumption.
 * Please note this may contain more complex concepts under the hood depending on
 * underlying classes _makedata() and _transform() but concisely what it does should
 * answer your question.
 * 
 * @returns { object } This anonymous self-invoking function declares a closure with
 * two identifiers `x` and `helper`, creates a `Factory` object that produces an async
 * iteratee chain which yields four operations `BEGIN`, `ACQUIRE`, `DONE`, and
 * `_sigterm()`, with an id (`_makeid()`) for tracing purpose. This chain is curried
 * with `helper`, then executed until either of the termination condition signals
 * `_sigterm()` or operation done `Operation.DONE` happens.
 * 
 * Output: None/empty value.
 */
function oustide() {
  const x = 1;

  /**
   * @description This function takes an input `data` and performs two operations on it:
   * 
   * 1/ If the `data` is null or undefined; the function calls `_makedata()` to create
   * a default ( dummy) data set.
   * 2/ It then calls the `_transform()` method to transform the received `data`.
   * 
   * In essence the function is ensuring that the `data` is not `null/undefined` before
   * passing it to the next operation( `._transform())`.
   * 
   * @param { object } data - The `data` parameter is an optional parameter and therefore
   * it can be passed or omitted when calling this function. If provided ,it will be
   * transformed using the `_transform()` method; if not provided (i.e., if it's null
   * or missing) a `_makedata()` method will be called to create some default data and
   * then returned
   * 
   * @returns { object } The function `f` takes an optional input `data`. If `data` is
   * provided then it passes the original data to `_transform`.  Otherwise it returns
   * the result of `_makedata`.
   */
  const helper = (data) => _transform(data ?? _makedata());

  return Factory.create(
              /**
               * @description This function takes an argument `e` and calls `console.error(e)`. It
               * sends the argument to the console as an error message.
               * 
               * @param { object } e - The `e` parameter is a shortcut for 'event' that takes an
               * error object and calls the console.error function to display a detailed message
               * if there are any exceptions
               * 
               * @returns {  } The function given above will print any errors that occur to the
               * console using the `console.error()` method. Specifically it takes any error that
               * occurs during the execution of the function and outputs it to the console.
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
