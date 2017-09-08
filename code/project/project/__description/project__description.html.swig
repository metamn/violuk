<aside class="project__description">
  <h3>Project description</h3>

  <div class="text">
    {% for p in project.description %}
      <p class="p">{{ p | safe }}</p>
    {% endfor %}
  </div>
</aside>
