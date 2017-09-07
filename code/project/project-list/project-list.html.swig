<nav class="project-list">
  <h3 class="project-list__title">Projects</h3>

  <ul class="ul">
    {% for project in projects %}
      {% include '../project-list-item/project-list-item.html.swig' %}
    {% endfor %}
  </ul>
</nav>
