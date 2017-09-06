<section class="x-list">
  <h3 class="title">List example</h3>

  {% set to_display = ['title', 'thumb'] %}
  {% set collection = 'articles' %}

  {% for item in articles %}
    {% include '../../list-item/list-item.html.swig' %}
  {% endfor %}
</section>
