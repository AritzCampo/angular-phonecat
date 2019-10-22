'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone',
      function PhoneComparadorController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
