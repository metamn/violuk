<section class="x-saquo">
  <h3 class="title">Saquo example</h3>

  {% set direction = "right" %}
  {% include '../saquo.html.swig' %}

  {% set direction = "left" %}
  {% include '../saquo.html.swig' %}

  {% set direction = "top" %}
  {% include '../saquo.html.swig' %}

  {% set direction = "bottom" %}
  {% include '../saquo.html.swig' %}
</section>
