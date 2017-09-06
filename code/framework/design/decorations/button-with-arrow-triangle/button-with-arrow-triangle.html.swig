{% import '../../../helpers/button/button.swig' as b %}

{{ b.button('button-with-arrow-triangle button-with-arrow-triangle--' + button.direction + ' ' + button.klass) }}
  <span class="button-with-arrow-triangle__text">{{ button.text }}</span>

  {# do not set the klass for the triangle, otherwise the rotations won't work #}
  {# if the rotation is set we will get a tooltip instead of a button for `top` and `bottom` #}
  {% set klass = 'button-with-arrow-triangle__triangle ' + button.klass %}
  {% include '../arrow-with-triangle/arrow-with-triangle.html.swig' %}
</div>
