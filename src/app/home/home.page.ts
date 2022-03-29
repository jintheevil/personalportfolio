import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, Platform } from '@ionic/angular';
import firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  @ViewChild(IonContent) ionContent: IonContent
  constructor(public platform: Platform) {}

  menu = [
    'Home', 'About', 'Projects', 'Contact'
  ]

  skillStack = [
    {img: '/assets/icon/jslogo.png',
    name: 'JavaScript'},
    {img: '/assets/icon/tslogo.png',
    name: 'TypeScript'},
    {img: '/assets/icon/html logo.png',
    name: 'HTML'},
    {img: '/assets/icon/css logo.png',
    name: 'CSS'},
    {img: '/assets/icon/ionic logo.png',
    name: 'Ionic Framework'},
    {img: '/assets/icon/React_logo.png',
    name: 'React Native'},
    {img: '/assets/icon/firebase_logo.png',
    name: 'Firebase'}
  ]

  counter = 0

  chosenMenu = 'Home'

  test

  changeMenu(x){
    this.ionContent.scrollToPoint(
      0,
      document.getElementById(x.toLowerCase()).offsetTop, 400
    )
    this.counter = 0
    setTimeout(() => {
      this.counter += 1
      console.log(this.counter)
    }, 500)
  }
  
  ngOnInit(){
    this.counter = 0
    setTimeout(() => {
      this.counter += 1
      console.log(this.counter)
    }, 500)

    let pages = document.querySelectorAll('.page')
    let pageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          console.log(entry)
          this.chosenMenu = entry['target']['id']
          console.log(this.chosenMenu)
        }
      })
    }, {
      threshold: 0.5
    })
    pages.forEach(page => {
      pageObserver.observe(page)
    })
  }

}
