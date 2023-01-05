import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
alowNewServer = false;
serverCreationStatus = 'No server was created!';
serverName="";
constructor(){
  setTimeout(() => {
    this.alowNewServer=true;
  }, 2000);
}
ngOnInit(): void {
 
}
 onCreateServer() {
    this.serverCreationStatus = 'Server was created!'
  }
  onUpdateServerName(event:Event) {
    // 通过添加HTML输入元素告知TYPESCRIPT中的类型,显示转换,并使用开始和结束标记
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
