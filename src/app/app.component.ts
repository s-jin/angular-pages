import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage=0;
  images=[
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'In the rain',
      url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'In the zone',
      url: 'https://images.unsplash.com/photo-1414124488080-0188dcbb8834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'On the road',
      url: 'https://images.unsplash.com/photo-1531195435288-d2198fe73249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'In the Boat',
      url: 'https://images.unsplash.com/photo-1468221296755-1c53a9dbcd54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Not orange',
      url: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At home',
      url: 'https://images.unsplash.com/photo-1590725121839-892b458a74fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Flower branch',
      url: 'https://images.unsplash.com/photo-1590758451253-ab83aec7d38d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Coffee',
      url: 'https://images.unsplash.com/photo-1590759618212-0ec30bfe1ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Lunch',
      url: 'https://images.unsplash.com/photo-1590707067908-41e863fdfaa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Guitar',
      url: 'https://images.unsplash.com/photo-1590773301066-21fd6b85c257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Shoes',
      url: 'https://images.unsplash.com/photo-1585702805772-509e021df9b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Bird',
      url: 'https://images.unsplash.com/photo-1554266183-2696fdafe3ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Globe',
      url: 'https://images.unsplash.com/photo-1571215682763-a3e577c25989?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Hobbit',
      url: 'https://images.unsplash.com/photo-1414124488080-0188dcbb8834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Bonfire',
      url: 'https://images.unsplash.com/photo-1580435866027-521857ac8728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Tracks',
      url: 'https://images.unsplash.com/photo-1552966722-678bbeb9d89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Lego',
      url: 'https://images.unsplash.com/photo-1550041120-52a70eb89423?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
  ]

  checkSiteIndex(index: number){
    return Math.abs(this.currentPage -index) <5;
  }
  
}
