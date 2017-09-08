{% import "../../framework/helpers/classname/classname.swig" as c  %}
{% set classname = c.classname(project.title) %}


<article class="project project--{{ classname }}">
  {% include "__title/project__title.html.swig" %}
  {% include "__thumbs/project__thumbs.html.swig" %}
</article>
