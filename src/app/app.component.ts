import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "Portfolio: Salil Agrawal";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: "keywords", content: "Web Developer, Java Developer, Full-stack Java Developer, DevOps Engineer, Android Developer, Guilherme Borges Bastos Live Resume, Guilherme Borges Bastos Resume, Guilherme Borges Bastos CV, Curriculum Guilherme Borges Bastos, GBASTOS Resumo, gbastos live resume" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Salil Agrawal" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2021-04-04", scheme: "YYYY-MM-DD" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: "Welcome Everyone!" }
    );
  }
}
