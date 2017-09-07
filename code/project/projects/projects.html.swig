<section class="projects">
  <h3>Projects</h3>

  {% for project in projects %}
    {% include '../project-thumb/project-thumb.html.swig' %}
  {% endfor %}
</section>
