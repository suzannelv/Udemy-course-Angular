import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name = 'udemy-courses';
  serverElements = [{type:'server', name:'test-server', content:'just a test'}]

  onServerAdded(serverData:{serverName:string, serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    });
  }
  onBlueprintAdded(blueprintData:{serverName:string, serverContent:string}){
    this.serverElements.push({
      type:'bleuprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent
    });
  }

}
