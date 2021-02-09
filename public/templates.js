const TEMPLATES = {
  note: `<div><h3>{{ title }}</h3><p>{{ note }}</p></div>`,
  noteListItem: `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between"><a href="/" class="current-note-title">{{ title }}</a><button type="button" class="btn btn-danger delete-note-btn"><i class="bi bi-trash"></i></button></li>`
};