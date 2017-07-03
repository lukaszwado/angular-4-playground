import {Injectable} from '@angular/core';

@Injectable()
export class FiltersService {

  /* This is an filter config which will come from the server */
  private config = [
    {
      label: 'Zustand',
      name: 'item_condition',
      type: 'checkbox',
      elements: [
        {
          label: 'Neu gem. Beschreibung',
          count: 399,
          value: 'new_see_description'
        },
        {
          label: 'Neu & originalverpackt',
          count: 299,
          value: 'new_original_package'
        },
        {
          label: 'Neu & originalverpackt',
          count: 299,
          value: 'used'
        },
        {
          label: 'Defekt',
          count: 299,
          value: 'defekt'
        }
      ]
    },
    {
      label: 'Lieferung',
      name: 'shipping',
      type: 'checkbox',
      elements: [
        {
          label: 'Neu gem. Beschreibung',
          count: 399,
          value: 'free'
        },
        {
          label: 'Neu & originalverpackt',
          count: 299,
          value: 'pickup_by_buyer'
        }
      ]
    },
    {
      label: 'Verkäufertyp',
      name: 'seller_type',
      type: 'checkbox',
      elements: [
        {
          label: 'Privat',
          count: 399,
          value: 'individual'
        },
        {
          label: 'Gewerblich',
          count: 299,
          value: 'professionnal'
        },
      ]
    },
    {
      label: 'Sprache',
      name: 'language',
      type: 'checkbox',
      elements: [
        {
          label: 'Deutsch',
          count: 399,
          value: 'de'
        },
        {
          label: 'Französisch',
          count: 299,
          value: 'fr'
        },
      ]
    },
    {
      label: 'Verfügbarkeit',
      name: 'availability',
      type: 'checkbox',
      elements: [
        {
          label: 'Sofort lieferbar',
          count: 399,
          value: 0
        },
        {
          label: 'In 5 Arbeitstagen',
          count: 399,
          value: 5
        },
        {
          label: 'In 10 Arbeitstagen',
          count: 399,
          value: 10
        },
        {
          label: 'In 15 Arbeitstagen',
          count: 399,
          value: 15
        },
        {
          label: 'In 30 Arbeitstagen',
          count: 399,
          value: 30
        },
        {
          label: 'In 60 Arbeitstagen',
          count: 399,
          value: 60
        }
      ]
    }
  ];

  constructor() {
  }

  get() {
    return this.config
  }
}
