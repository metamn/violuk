{#
  title: Include Javascripts
  description: Include scripts into the source code
  bug: async will be transfomed by | safe SWIG filter into async= so we will not use
#}

{% macro includejs(scripts) -%}
  {% for script in scripts %}
    {% if script.type == "external" %}
      <script src="{{ script.file }}"></script>
    {% else %}
      <script src="{{ site.url }}{{ site.scripts }}{{ script.file }}"></script>
    {% endif %}
  {% endfor %}
{%- endmacro %}
