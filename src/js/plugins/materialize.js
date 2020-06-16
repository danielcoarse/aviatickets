import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

// Init select
const select = document.querySelectorAll('select');
M.FormSelect.init(select);

// Получение ссылки select
export function getSelectInstance(elem) {
  return M.FormSelect.getInstance(elem);
}

// Init Autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete);

// Получение ссылки autocomplete
export function getAutocompleteInstanse(elem) {
  return M.Autocomplete.getInstance(elem);
}

// Init Datepicker
const datepicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepicker, {
  showClearBtn: true,
  format: "yyyy-mm",
});

// Получение ссылки datepicker
export function getDatepickerInstanse(elem) {
  return M.Datepicker.getInstance(elem);
}

// Init dropdown
const dropdown = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dropdown);

export function getDropdownInstanse(elem) {
  return M.Dropdown.getInstance(elem);
}