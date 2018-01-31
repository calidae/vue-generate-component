import ComponentTpl from './templates/ComponentTpl';
import TemplateGenerator from './TemplateGenerator';

/**
 * TemplateFactory
 */
class TemplateFactory {

  /**
   * Factory to generate the templates
   * @param cli options
   */
  static createTemplateFor( cli ) {

    /**
     * Generate Vue 2 component
     */
    if( cli.component ) {
      return new TemplateGenerator(new ComponentTpl(cli.component, !!cli.container));
    }
  }

}

export default TemplateFactory
