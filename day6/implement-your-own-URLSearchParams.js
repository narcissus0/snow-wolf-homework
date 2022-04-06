class MyURLSearchParams {
  /**
   * @params {string} init
   */
  constructor(init) {
    const match = init.replace(/^.*\?/, "");
    /**
     * @type [string, string][]
     */
    const list = match.split("&").map((param) => param.split("=")) ?? [];
    /**
     * @type Map<string, string[]>
     */
    this.paramMap = new Map();
    for (const [key, value] of list) {
      this.append(key, value);
    }
  }

  /**
   * @params {string} name
   * @params {any} value
   */
  append(name, value) {
    if (this.paramMap.has(name)) {
      const current = this.paramMap.get(name);
      // current is a reference to the array, need not set to the Map again
      current.push(String(value));
    } else {
      this.set(name, value);
    }
  }

  /**
   * @params {string} name
   */
  delete(name) {
    this.paramMap.delete(name);
  }

  /**
   * @returns {Iterator}
   */
  *entries() {
    for (const [key, values] of this.paramMap) {
      for (const value of values) {
        yield [key, value];
      }
    }
  }

  /**
   * @param {(value, key) => void} callback
   */
  forEach(callback) {
    for (const [key, values] of this.paramMap) {
      for (const value of values) {
        callback(value, key);
      }
    }
  }

  /**
   * @param {string} name
   * returns the first value of the name
   */
  get(name) {
    return this.paramMap.get(name.replace(/^.*\?/, ""))?.[0] ?? null;
  }

  /**
   * @param {string} name
   * @return {string[]}
   * returns the value list of the name
   */
  getAll(name) {
    return this.paramMap.get(name) ?? [];
  }

  /**
   * @params {string} name
   * @return {boolean}
   */
  has(name) {
    return this.paramMap.has(name);
  }

  /**
   * @return {Iterator}
   */
  keys() {
    return this.paramMap.keys();
  }

  /**
   * @param {string} name
   * @param {any} value
   */
  set(name, value) {
    this.paramMap.set(name, [String(value)]);
  }

  // sor all key/value pairs based on the keys
  sort() {
    const sortedEntries = [...this.paramMap].sort((a, b) =>
      a[0] < b[0] ? -1 : 1
    );

    this.paramMap = new Map(sortedEntries);
  }

  /**
   * @return {string}
   */
  toString() {
    return [...this.paramMap]
      .flatMap(
        ([key, values]) => values.map((value) => `${key}=${value}`) // Return a nested array but `flatMap` flattens it by one level
      )
      .join("&");
  }

  /**
   * @return {Iterator} values
   */
  *values() {
    const entries = this.entries();
    let value;
    while ((value = entries.next().value)) {
      yield value[1];
    }
  }
}
