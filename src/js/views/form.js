import {getAutocompleteInstanse, getDatepickerInstanse} from "../plugins/materialize";

class FormUI {
  constructor(autocompleteInstanse, datepickerInstanse) {
    this._form = document.forms["locationsControls"];
    this.origin = document.getElementById("autocomplete-origin");
    this.destination = document.getElementById("autocomplete-destination");
    this.departDate = document.getElementById("datepicker-depart");
    this.returnDate = document.getElementById("datepicker-return");

    // Instances
    this.originAutocomplete = autocompleteInstanse(this.origin);
    this.destinationAutocomplete = autocompleteInstanse(this.destination);
    this.departDatePicker = datepickerInstanse(this.departDate);
    this.returnDatePicker = datepickerInstanse(this.returnDate);
  }

  get form() {
    return this._form;
  }

  // Form values
  get originValue() {
    return this.origin.value;
  }
  get destinationValue() {
    return this.destination.value;
  }
  get departDateValue() {
    return this.departDatePicker.toString();
  }
  get returnDateValue() {
    return this.returnDatePicker.toString();
  }

  setAutocompleteData(data) {
    this.originAutocomplete.updateData(data);
    this.destinationAutocomplete.updateData(data);
  }
}

const formUI = new FormUI(getAutocompleteInstanse, getDatepickerInstanse);

export default formUI;