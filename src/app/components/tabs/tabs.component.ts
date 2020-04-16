import { Component, OnInit } from '@angular/core';

interface dataItem {
  id: number;
  title: string;
  content: string[]
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  data: dataItem[] = [
    {
      "id": 1,
      "title": "Vestibulum at odio sit amet",
      "content": [
        "Vestibulum at odio sit amet diam consectetur congue.",
        "Donec imperdiet tincidunt nisi non dignissim.",
        "Maecenas diam metus, fermentum a velit ut, auctor consequat ligula.",
        "In ultrices lobortis venenatis.",
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque dignissim sit amet lectus ac tincidunt.",
        "Quisque bibendum mi at tempus tempus.",
        "Suspendisse pretium, quam eu faucibus cursus, nunc leo pharetra justo, ut rutrum lorem ipsum quis velit.",
        "Aenean imperdiet molestie dignissim.",
        "Curabitur faucibus nulla metus, vel ornare libero accumsan eget."
      ]
    },
    {
      "id": 2,
      "title": "Sed vehicula neque",
      "content": [
        "Donec ultricies felis non sem euismod, vel hendrerit metus porttitor.",
        "Donec sed ex ut tellus ultricies vestibulum vitae sit amet erat.",
        "Etiam tempor, libero eget bibendum auctor, risus nulla finibus dolor, in ullamcorper ipsum sapien dignissim felis.",
        "Nunc mattis sagittis mi, at hendrerit dolor semper non.",
        "Sed scelerisque sollicitudin felis euismod laoreet.",
        "Nunc elementum purus orci, nec ornare mi vehicula at.",
        "Praesent porta nisi in magna aliquam, sed consequat turpis ornare.",
        "Sed laoreet porttitor purus vitae tincidunt."
      ]
    },
    {
      "id": 3,
      "title": "Sed vehicula neque",
      "content": [
        "Nunc mattis sagittis mi, at hendrerit dolor semper non.",
        "Sed scelerisque sollicitudin felis euismod laoreet.",
        "Nunc elementum purus orci, nec ornare mi vehicula at.",
        "Praesent porta nisi in magna aliquam, sed consequat turpis ornare.",
        "Sed laoreet porttitor purus vitae tincidunt.",
        "Donec ultricies felis non sem euismod, vel hendrerit metus porttitor.",
        "Donec sed ex ut tellus ultricies vestibulum vitae sit amet erat.",
        "Etiam tempor, libero eget bibendum auctor, risus nulla finibus dolor, in ullamcorper ipsum sapien dignissim felis."
      ]
    }
  ]

  selectedItem: dataItem;
  loading: boolean;
  selectedTab: number;

  constructor() { }

  ngOnInit() {
    this.loading = true;
    this.data.map(item => {
      if (item.id === 1) {
        this.selectedTab = item.id;
        setTimeout(() => {
          this.selectedItem = item;
          this.loading = false;
        }, 800)
      }
    })
  }

  displaySelected(id: number) {
    this.loading = true;
    this.data.map(item => {
      if (item.id === id) {
        this.selectedTab = id;
        setTimeout(() => {
          this.selectedItem = item;
          this.loading = false;
        }, 1200)
      }
    })
  }

}
