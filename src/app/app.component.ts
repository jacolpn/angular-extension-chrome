import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'great-extension';
  color: any;

  ngOnInit(): void {
    chrome.storage.sync.get('color', ({ color }) => {
      this.color = color;
    });
  }

  public colorize() {
    const updateBackgroundColor = (color: string) => document.body.style.backgroundColor = color;

    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id! },
        func: updateBackgroundColor,
        args: [this.color]
      });
    });
  }

  public updateColor(color: string) {
    chrome.storage.sync.set({ color});
  }
}
