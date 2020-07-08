import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IamService} from '../../../service/iam.service';
import {Menu} from '../../../service/entity/iam.type';
import {NzTableQueryParams} from 'ng-zorro-antd';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor(
    fb: FormBuilder,
    private iamService: IamService
  ) {
    this.queryFrom = fb.group({
      menuCode: null,
      menuName: null
    });
  }

  queryFrom: FormGroup;
  menuList: Menu[];
  mapOfTree: { [key: string]: Menu[] } = {};
  loading = true;

  ngOnInit(): void {
    this.iamService.getMenu(null, null).subscribe(menuList => {
      this.menuList = menuList;
      this.menuList.forEach(item => {
        this.mapOfTree[item.id] = this.convertTreeToList(item);
      });
      this.loading = false;
    });
  }

  queryMenu(event: Event) {
    this.iamService.getMenu(this.menuCode, this.menuName).subscribe(menuList => {
      this.menuList = menuList;
      this.menuList.forEach(item => {
        this.mapOfTree[item.id] = this.convertTreeToList(item);
      });
      this.loading = false;
    });
  }

  resetQuery() {
    this.queryFrom.reset();
  }

  collapse(array: Menu[], data: Menu, $event: boolean): void {
    if (!$event) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.id === d!.id)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: Menu): Menu[] {
    const stack: Menu[] = [];
    const array: Menu[] = [];
    const hashMap = {};
    stack.push({ ...root, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level! + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: Menu, hashMap: { [key: string]: boolean }, array: Menu[]): void {
    if (!hashMap[node.id]) {
      hashMap[node.id] = true;
      array.push(node);
    }
  }

  childrenFLag(item: Menu) {
    return !!(item.children !== null && item.children.length > 0)
  }

  get menuCode(): string{
    return  this.queryFrom.controls.menuCode.value;
  }

  get menuName(): string{
    return  this.queryFrom.controls.menuName.value;
  }
}
