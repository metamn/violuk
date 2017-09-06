<article class="list-item" data-template="list-item-template" data-data="home" data-collection="{{ collection }}" data-id="{{ loop.index0 }}">
  {% if (item.images[0]) and (to_display.indexOf('thumb') !== -1) %}
    {% include '__thumb/list-item__thumb.html.swig' %}
  {% endif %}

  {% if (item.title) and (to_display.indexOf('title') !== -1) %}
    {% include '__title/list-item__title.html.swig' %}
  {% endif %}

  {% if (item.excerpt) and (to_display.indexOf('excerpt') !== -1) %}
    {% include '__excerpt/list-item__excerpt.html.swig' %}
  {% endif %}

  {% if (item.categories) and (to_display.indexOf('categories') !== -1) %}
    {% include '__categories/list-item__categories.html.swig' %}
  {% endif %}

  {% if (item.date) and (to_display.indexOf('date') !== -1) %}
    {% include '__date/list-item__date.html.swig' %}
  {% endif %}

  {% if (item.authors) and (to_display.indexOf('authors') !== -1) %}
    {% include '__authors/list-item__authors.html.swig' %}
  {% endif %}
</article>
