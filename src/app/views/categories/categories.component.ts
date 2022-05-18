import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[]

  selectorCategory: Category


  constructor(
    private dataHandler: DataHandlerService
  ) {
  }

  ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories)

  }

  showTasksByCategory(category: any) {
    this.selectorCategory = category
    this.dataHandler.fillTasksByCategory(category)
  }

  // showAllCategories(tasks: any) {
  //   this.dataHandler.taskSubject.getValue(tasks)
  // }
  //
  //
  // tasks: any;
}
