/**
 * ComponentTpl
 */
class ComponentTpl {
  /**
   *
   * @param name - the component name
   * @param container - has the container option
   */
  constructor( name, container ) {
    this.type = 'component';
    this.name = name;
    this.container = container;
  }
}

export default ComponentTpl