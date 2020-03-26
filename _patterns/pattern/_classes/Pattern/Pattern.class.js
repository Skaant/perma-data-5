/**
 * The `Pattern` class describes a pattern (in the sense of
 *  Christopher Alexander, *see note below*),
 *  and try to define a standard implementation
 *  & testing strategy for its instances & processor.
 * 
 * @note To be matched as a Pattern instance file,
 *  the file name must be `<name>.pattern.js`.
 *  Other conditions, implemented in tests, are :
 *  * should be contained in a parent + 1 `_patterns` folder,
 *  * should be contained in a parent folder with the same name.
 * 
 * @note The Christopher Alexander's **pattern** definition, in its book *A pattern language* :
 * 
 * > The elements of this language are entities called patterns.
 * > Each pattern describes a problem that occurs over and over again in our environment, 
 * > and then describes the core of the solution to that problem, 
 * > in such a way that you can use this solution a million times over, 
 * > without ever doing it the same way twice.
 */
module.exports = class Pattern {

  /**
   * Creates a new **pattern definition**.
   * 
   * @param {string} id - The pattern identifier. Must equals the filename.
   * @param {string} summary - Shortly describes the pattern.
   */
  constructor(
    id,
    summary
  ) {

    this._id = id
    this._summary = summary
  }

  getId() {

    return this._id
  }

  getSummary() {

    return this._summary
  }
}