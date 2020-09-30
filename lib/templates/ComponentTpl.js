/**
 * ComponentTpl
 */
class ComponentTpl {
  /**
   *
   * @param name - the component name
   * @param index - has the index option
   * @param test - has the test option
   */
  constructor( { component, index, test }  ) {
    this.type = 'component';
    this.name = component;
    this.index = index;
    this.test = test;
  }
}

export default ComponentTpl