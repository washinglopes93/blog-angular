import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @Input()
  photoCover:string="https://cdn.forums.klei.com/monthly_06_2015/post-306905-0-08693700-1434859858_thumb.png"

  @Input()
  contentTitle:string="meu main"

  @Input()
  contentDescription:string="aqui vou escrever o que eu acho do meu main"

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
