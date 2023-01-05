import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
alowNewServer = false;
constructor(){
  setTimeout(() => {
    this.alowNewServer=true;
  }, 2000);
}
}
