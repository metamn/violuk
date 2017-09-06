<section class="x-button-with-triangle">
  <h3 class="title">Button with triangle example</h3>

  {% set button = { text: 'Contact', direction: 'right', klass: 'test' } %}
  {% include '../button-with-triangle.html.swig' %}

  {% set button = { text: 'Go back and have fun', direction: 'left', klass: 'test' } %}
  {% include '../button-with-triangle.html.swig' %}

  {% set button = { text: 'Send email', direction: 'top', klass: 'test' } %}
  {% include '../button-with-triangle.html.swig' %}

  {% set button = { text: 'Works', direction: 'bottom', klass: 'test' } %}
  {% include '../button-with-triangle.html.swig' %}

  {% set button = { text: 'OOOpppssss ...', direction: 'right', klass: 'oops' } %}
  {% include '../button-with-triangle.html.swig' %}
</section>
