import { Component, OnInit, Inject } from '@angular/core';
import { PostHandlerService } from '../services/post-handler.service';
import { Post } from '../class/post';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AddNewPostDialogComponent } from '../add-new-post-dialog/add-new-post-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Posts:Post[] = [];

  constructor(private postHandler:PostHandlerService, private dialog:MatDialog) {
    this.getPosts();
  }

  ngOnInit(): void {
  }

  getPosts(){
    this.postHandler.getPosts().subscribe((postList:any)=>{
      this.Posts = postList;
      this.Posts.forEach(post => {
        this.getComments(post);
      });
    },
    (error:any)=>{
      console.log(error);
    });
  }

  getComments(post:Post){
    this.postHandler.getComments(post).subscribe((commentList:any)=>{
      post.comments = commentList;
    },
    (error:any)=>{
      console.log(error);
    });
  }

  Refresh(){
    this.Posts = [];
    this.getPosts();
  }


  addNewDialog(){
    const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;

        const dialogRef = this.dialog.open(AddNewPostDialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(
            (data:Post) => {
              this.postHandler.sendPost(data).subscribe((res)=>{
                this.Refresh();
              },
              (err)=>{
                console.log(err);
              }
              );

            }
        );
  }

}

