import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../class/post';

@Injectable({
  providedIn: 'root'
})


export class PostHandlerService {
  API = {
    server:"https://jsonplaceholder.typicode.com"
  }
  constructor(private Http:HttpClient) {

  }

  getPosts()
  {
    return this.Http.get(this.API.server+"/posts");
  }

  getComments(post:Post)
  {
    return this.Http.get(this.API.server+"/posts/"+post.id+"/comments");
  }

  sendPost(newPost:Post){
    let data = {
      title:newPost.title,
      body:newPost.body,
      userId:newPost.userId
    };
    return this.Http.post(this.API.server+"/posts", JSON.stringify(data));
  }
}


