(function() {
window.LL = window.LL || {};
/**
 * `<%= elementName %>`
 * <%= elementDescription %>
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class <%=className%> extends Polymer.Element {
  /**
   * Name the dom-module ID that should be
   * targeted for the element template
   */
  static get is() { return '<%= elementName %>'; }
  /**
   * Declare the properties that will be
   * available in the binding system
   */
  static get properties() {
    return {
    };
  }
};
<%=orgNamespace%>.<%=className%> = <%=className%>;
})();

customElements.define(
  <%=orgNamespace%>.<%=className%>.is,
  <%=orgNamespace%>.<%=className%>
);
