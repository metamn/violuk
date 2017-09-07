<section class="projects">
  <h3>Projects</h3>

  {% for project in projects %}
    {% include '../project/project.html.swig' %}
  {% endfor %}
</section>
