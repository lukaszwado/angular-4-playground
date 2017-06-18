import {Injectable} from '@angular/core';

@Injectable()
export class ListingsService {

  listings = [
    {
      imgSm: '//images.ricardostatic.ch/image/upload/t_180x180/v1/product/live/916480374_v0_1',
      imgLg: '//images.ricardostatic.ch/image/upload/t_360x360/v1/product/live/916480374_v0_1',
      title: 'Apple iPhone 6 Silver 16GB',
      price: {
        auction: 199.00,
        bunNow: 349.00
      }
    },
    {
      imgSm: '//images.ricardostatic.ch/image/upload/t_180x180/v1/product/live/916843182_v0_1',
      imgLg: '//images.ricardostatic.ch/image/upload/t_360x360/v1/product/live/916843182_v0_1',
      title: 'Apple iPhone 5S, 16GB, Schwarz',
      price: {
        auction: 101.00,
        bunNow: 199.00
      }
    },
    {
      imgSm: '//images.ricardostatic.ch/image/upload/t_180x180/v1/product/live/914567942_v0_1',
      imgLg: '//images.ricardostatic.ch/image/upload/t_360x360/v1/product/live/914567942_v0_1',
      title: 'Apple iPhone 5S 64GB',
      price: {
        auction: 299.00,
        bunNow: 399.00
      }
    },
    {
      imgSm: '//images.ricardostatic.ch/image/upload/t_180x180/v1/product/live/915584888_v0_1',
      imgLg: '//images.ricardostatic.ch/image/upload/t_360x360/v1/product/live/915584888_v0_1',
      title: 'Apple iPhone 5 16GB Schwartz',
      price: {
        auction: 191.00,
        bunNow: 332.00
      },
    },
    {
      imgSm: '//images.ricardostatic.ch/image/upload/t_180x180/v1/product/live/909937950_v0_1',
      imgLg: '//images.ricardostatic.ch/image/upload/t_360x360/v1/product/live/909937950_v0_1',
      title: 'Apple iPhone 5S, 16GB, gold!',
      price: {
        auction: 391.00,
        bunNow: 432.00
      },
    },
    {
      imgSm: '//images.ricardostatic.ch/image/upload/t_180x180/v1/product/live/916040036_v0_1',
      imgLg: '//images.ricardostatic.ch/image/upload/t_360x360/v1/product/live/916040036_v0_1',
      title: 'Iphone 5 - defekte Scheibe',
      price: {
        auction: 1.00,
        bunNow: 10.00
      },
    },
    {
      imgSm: '//images.ricardostatic.ch/image/upload/t_180x180/v1/product/live/915704918_v0_1',
      imgLg: '//images.ricardostatic.ch/image/upload/t_360x360/v1/product/live/915704918_v0_1',
      title: 'Apple iPhone 5C - 16GB - Pink',
      price: {
        auction: 100.00,
        bunNow: 400.00
      },
    },
    {
      imgSm: '//images.ricardostatic.ch/image/upload/t_180x180/v1/product/live/915776356_v0_1',
      imgLg: '//images.ricardostatic.ch/image/upload/t_360x360/v1/product/live/915776356_v0_1',
      title: 'iPhone 5 mit 16 Gigabyte',
      price: {
        auction: 74.00,
        bunNow: 100.00
      },
    },
    {
      imgSm: '//images.ricardostatic.ch/image/upload/t_180x180/v1/product/live/909447078_v0_1',
      imgLg: '//images.ricardostatic.ch/image/upload/t_360x360/v1/product/live/909447078_v0_1',
      title: 'Apple iPhone 6, 64GB, Schwarz',
      price: {
        auction: 154.00,
        bunNow: 900.00
      },
    },
    {
      imgSm: '//images.ricardostatic.ch/image/upload/t_180x180/v1/product/live/915776356_v0_1',
      imgLg: '//images.ricardostatic.ch/image/upload/t_360x360/v1/product/live/915776356_v0_1',
      title: 'iPhone 5 mit 16 Gigabyte',
      price: {
        auction: 74.00,
        bunNow: 100.00
      },
    },
  ];

  constructor() {
  }

  get( id ) {
    return this.listings[ id ]
  }

}
