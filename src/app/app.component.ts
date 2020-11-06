import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { RestService } from './services/rest.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  name = new FormControl('');
  data: PeriodicElement[];
  displayedColumns: string[] = ['id', 'username', 'link', 'picture'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.data);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  title = 'edu-front';
  constructor(private restService: RestService){

  }
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  getUsers(username){
    this.restService.GetGitUsers(username).subscribe(Response => {
      this.data = Response['items'];
      this.dataSource = new MatTableDataSource<PeriodicElement>(Response['items']);
      this.dataSource.paginator = this.paginator;
    }, error => {
      console.log(error);
    });
  }
  search(){
    this.getUsers(this.name.value);
  }
}

export interface PeriodicElement {
  avatar_url: string;
  events_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  gravatar_id: string,
  html_url: string,
  id: number;
  score: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

