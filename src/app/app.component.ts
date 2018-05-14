import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  posts=[
    {title:"Mon premier post",
    content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo blanditiis commodi debitis atque quia eius odit asperiores, alias numquam, culpa id. Facilis aliquam corrupti magni. Aspernatur esse nisi repellendus soluta.",
    loveIts:1,  
    created_at:new Date()
  },
    {title:"Mon deuxième post",
    content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo blanditiis commodi debitis atque quia eius odit asperiores, alias numquam, culpa id. Facilis aliquam corrupti magni. Aspernatur esse nisi repellendus soluta.",
    loveIts:-1,  
    created_at:new Date()
  },
    {title:"Encore un post"
    ,content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo blanditiis commodi debitis atque quia eius odit asperiores, alias numquam, culpa id. Facilis aliquam corrupti magni. Aspernatur esse nisi repellendus soluta.",
    loveIts:0,
    created_at:new Date()
  },
      ]
  
}
