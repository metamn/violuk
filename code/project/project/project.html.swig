{% import "../../framework/helpers/classname/classname.swig" as c  %}
{% set classname = c.classname(project.title) %}

<article class="project project--{{ classname }}">
  {% include "__title/project__title.html.swig" %}
  {% include "__title-as-spacer/project__title-as-spacer.html.swig" %}
  {% include "__thumbs/project__thumbs.html.swig" %}
  {% include "__description/project__description.html.swig" %}
  {% include "__meta/project__meta.html.swig" %}
</article>
