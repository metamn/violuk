<aside class="project__meta">
  <h3>Project meta</h3>

  <ul class="ul">
    <li class="li">
      <span class="key">title:</span>
      <span class="value">{{ project.title }}</span>
    </li>

    {% if project.role %}
      <li class="li">
        <span class="key">role:</span>
        <span class="value">{{ project.role }}</span>
      </li>
    {% endif %}

    {% if project.type %}
      <li class="li">
        <span class="key">type:</span>
        <span class="value">{{ project.type }}</span>
      </li>
    {% endif %}

    {% if project.venue %}
      <li class="li">
        <span class="key">venue:</span>
        <span class="value">{{ project.venue }}</span>
      </li>
    {% endif %}

    {% if project.location %}
      <li class="li">
        <span class="key">location:</span>
        <span class="value">{{ project.location }}</span>
      </li>
    {% endif %}

    <li class="li">
      <span class="key">year:</span>
      <span class="value">{{ project.year }}</span>
    </li>

    {% if project.awards %}
      <li class="li">
        <span class="key">awards:</span>
        <span class="value">{{ project.awards }}</span>
      </li>
    {% endif %}

    {% if project.link %}
      <li class="li">
        <span class="key">link:</span>
        <span class="value">{{ project.link }}</span>
      </li>
    {% endif %}
  </ul>
</aside>
