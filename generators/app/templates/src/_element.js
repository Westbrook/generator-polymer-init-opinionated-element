/**
 * `<%= elementName %>`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class <%=className%> extends Polymer.Element {
  static get is() { return '<%= elementName %>'; }
  static get properties() {
    return {
    };
  }
};

customElements.define(<%=className%>.is, <%=className%>);
