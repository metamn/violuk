<nav class="list-expandable">
  <h3>Expandable list</h3>

  <ul class="ul">
    {% set display = 4 %}
    {% set more = 5 %}

    {% for item in list %}
      {% if (loop.index == more) %}
        {% include "__more/list-expandable__more.html.swig" %}
        {% set klass = "inactive" %}
      {% else %}
        {% if (loop.index <= display) or loop.last %}
          {% set klass = "active" %}
        {% else %}
          {% set klass = "inactive" %}
        {% endif %}
      {% endif %}

      {% set index = loop.index %}
      {% include "__item/list-expandable__item.html.swig" %}
    {% endfor %}
  </ul>
</nav>
