<article class="contact">
  <h3>Contact</h3>

  <address class="address">
    {% for p in contact.address %}
      <p class="p">{{ p | safe }}</p>
    {% endfor %}
  </address>

  <div class="phone">
    <a class="link" href="tel:{{ contact.phone }}">{{ contact.phone }}</a>
  </div>

  <div class="email">
    <a class="link" href="mailto:{{ contact.email }}">{{ contact.email }}</a>
  </div>

  <nav class="social">
    <h3>Social</h3>

    <ul class="ul">
      {% for s in contact.social %}
        <li class="li">
          {% set link = { link: s, title: s, type: "external" } %}
          {% include '../../framework/design/typography/elements/link/link.html.swig' %}
        </li>
      {% endfor %}
    </ul>
  </nav>
</article>
