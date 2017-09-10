{% extends '../templates/default/default.html.swig' %}
{% block content %}

  {% include '../../project/intro/intro.html.swig' %}
  {% include '../../project/project-list/project-list.html.swig' %}
  {% include '../../project/about/about.html.swig' %}
  {% include '../../project/contact/contact.html.swig' %}
  {% include '../../project/projects/projects.html.swig' %}

{% endblock %}
