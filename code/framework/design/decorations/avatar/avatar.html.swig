{% import "../../../helpers/link/link.swig" as l  %}

<div class="avatar">
  {% if avatar.link %}
    {{ l.link(avatar.link) }}
  {% endif %}

  {% if avatar.image %}
    <img class="avatar__image img" src="{{ avatar.image }}" alt="{{ avatar.name }}">
  {% else %}
    <span class="avatar__initiale">{{ avatar.name | first }}</span>
  {% endif %}

  {% if avatar.link %}
    </a>
  {% endif %}
</div>
