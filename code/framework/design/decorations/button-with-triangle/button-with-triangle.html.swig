{% import '../../../helpers/button/button.swig' as b %}

{{ b.button('button-with-triangle button-with-triangle--' + button.direction + ' ' + button.klass) }}
  <span class="button-with-triangle__text">{{ button.text }}</span>

  {# do not set the klass for the triangle, otherwise the rotations won't work #}
  {# if the rotation is set we will get a tooltip instead of a button for `top` and `bottom` #}
  {% set klass = 'button-with-triangle__triangle ' + button.klass %}
  {% include '../triangle/triangle.html.swig' %}
</div>
