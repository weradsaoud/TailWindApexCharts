import { Component, OnInit } from '@angular/core';
import { FlatArrayItem } from './Models/FlatArrayItem';
import { TreeItem } from './Models/TreeItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.sideBarList = this.constructTree(this.flatArrayItems);
    console.log('this.sideBarList: ', this.sideBarList);

  }

  title = 'TailwindApex';
  searchString: string = '';
  sideBarList: TreeItem[] = [];

  // sideBarList = [
  //   {
  //     id: 1,
  //     level: 1,
  //     name: "Werad",
  //     collapse: false,
  //     children: [
  //       {
  //         id: 5,
  //         level: 2,
  //         name: "Mahmoud",
  //         collapse: false,
  //         children: [
  //           {
  //             id: 8,
  //             level: 3,
  //             name: "Shafeek",
  //             collapse: false,
  //             children: [
  //               {
  //                 id: 11,
  //                 level: 4,
  //                 name: "Ghad",
  //                 collapse: false,
  //                 children: []
  //               },
  //               {
  //                 id: 12,
  //                 level: 4,
  //                 name: "AbdAlrahman",
  //                 collapse: false,
  //                 children: []
  //               },
  //               {
  //                 id: 13,
  //                 level: 4,
  //                 name: "Maria",
  //                 collapse: false,
  //                 children: []
  //               }
  //             ]
  //           },
  //           {
  //             id: 9,
  //             level: 3,
  //             name: "Ali",
  //             collapse: false,
  //             children: [
  //               {
  //                 id: 14,
  //                 level: 4,
  //                 name: "Nawar",
  //                 collapse: false,
  //                 children: []
  //               },
  //               {
  //                 id: 15,
  //                 level: 4,
  //                 name: "Nawara",
  //                 collapse: false,
  //                 chidren: []
  //               },
  //               {
  //                 id: 16,
  //                 level: 4,
  //                 name: "Khoder",
  //                 collapse: false,
  //                 children: []
  //               }
  //             ]
  //           },
  //           {
  //             id: 10,
  //             level: 3,
  //             name: "Alaa",
  //             collapse: false,
  //             children: []
  //           }
  //         ]
  //       },
  //       {
  //         id: 6,
  //         level: 2,
  //         name: "Modar",
  //         collapse: false,
  //         children: [
  //           {
  //             id: 100,
  //             level: 3,
  //             name: "Freed",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 101,
  //             level: 3,
  //             name: "Freeda",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 102,
  //             level: 3,
  //             name: "Frhod",
  //             collapse: false,
  //             children: []
  //           }
  //         ]
  //       },
  //       {
  //         id: 7,
  //         level: 2,
  //         name: "Ahmad",
  //         collapse: false,
  //         children: [
  //           {
  //             id: 103,
  //             level: 3,
  //             name: "George",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 104,
  //             level: 3,
  //             name: "Hesham",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 105,
  //             level: 3,
  //             name: "Hashem",
  //             collapse: false,
  //             children: []
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     level: 1,
  //     name: "Jawa",
  //     collapse: false,
  //     children: [
  //       {
  //         id: 500,
  //         level: 2,
  //         name: "Mohanad",
  //         collapse: false,
  //         children: [
  //           {
  //             id: 800,
  //             level: 3,
  //             name: "AlAjhar",
  //             collapse: false,
  //             children: [
  //               {
  //                 id: 1100,
  //                 level: 4,
  //                 name: "awtar",
  //                 collapse: false,
  //                 children: []
  //               },
  //               {
  //                 id: 1200,
  //                 level: 4,
  //                 name: "Abdalatif",
  //                 collapse: false,
  //                 children: []
  //               },
  //               {
  //                 id: 1300,
  //                 level: 4,
  //                 name: "Yasseen",
  //                 collapse: false,
  //                 children: []
  //               }
  //             ]
  //           },
  //           {
  //             id: 900,
  //             level: 3,
  //             name: "Ali",
  //             collapse: false,
  //             children: [
  //               {
  //                 id: 1400,
  //                 level: 4,
  //                 name: "Ammar",
  //                 collapse: false,
  //                 children: []
  //               },
  //               {
  //                 id: 1500,
  //                 level: 4,
  //                 name: "Jana",
  //                 collapse: false,
  //                 chidren: []
  //               },
  //               {
  //                 id: 1600,
  //                 level: 4,
  //                 name: "Mariam",
  //                 collapse: false,
  //                 children: []
  //               }
  //             ]
  //           },
  //           {
  //             id: 1000,
  //             level: 3,
  //             name: "Alaa",
  //             collapse: false,
  //             children: []
  //           }
  //         ]
  //       },
  //       {
  //         id: 600,
  //         level: 2,
  //         name: "Mofeed",
  //         collapse: false,
  //         children: [
  //           {
  //             id: 10000,
  //             level: 3,
  //             name: "Freed",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 10100,
  //             level: 3,
  //             name: "Freeda",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 10200,
  //             level: 3,
  //             name: "Shams",
  //             collapse: false,
  //             children: []
  //           }
  //         ]
  //       },
  //       {
  //         id: 700,
  //         level: 2,
  //         name: "Rafeek",
  //         collapse: false,
  //         children: [
  //           {
  //             id: 10300,
  //             level: 3,
  //             name: "Jamal",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 10400,
  //             level: 3,
  //             name: "Maher",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 10500,
  //             level: 3,
  //             name: "Polonia",
  //             collapse: false,
  //             children: []
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     level: 1,
  //     name: "Jawad",
  //     collapse: false,
  //     children: [
  //       {
  //         id: 5000,
  //         level: 2,
  //         name: "qamar",
  //         collapse: false,
  //         children: [
  //           {
  //             id: 8000,
  //             level: 3,
  //             name: "Fatema",
  //             collapse: false,
  //             children: [
  //               {
  //                 id: 11000,
  //                 level: 4,
  //                 name: "Ghazal",
  //                 collapse: false,
  //                 children: []
  //               },
  //               {
  //                 id: 12000,
  //                 level: 4,
  //                 name: "Ward",
  //                 collapse: false,
  //                 children: []
  //               },
  //               {
  //                 id: 13000,
  //                 level: 4,
  //                 name: "Odai",
  //                 collapse: false,
  //                 children: []
  //               }
  //             ]
  //           },
  //           {
  //             id: 9000,
  //             level: 3,
  //             name: "Soheel",
  //             collapse: false,
  //             children: [
  //               {
  //                 id: 14000,
  //                 level: 4,
  //                 name: "Nawar",
  //                 collapse: false,
  //                 children: []
  //               },
  //               {
  //                 id: 15000,
  //                 level: 4,
  //                 name: "Nawara",
  //                 collapse: false,
  //                 chidren: []
  //               },
  //               {
  //                 id: 16000,
  //                 level: 4,
  //                 name: "Omayma",
  //                 collapse: false,
  //                 children: []
  //               }
  //             ]
  //           },
  //           {
  //             id: 10000,
  //             level: 3,
  //             name: "Rodwan",
  //             collapse: false,
  //             children: []
  //           }
  //         ]
  //       },
  //       {
  //         id: 6000,
  //         level: 2,
  //         name: "Modar",
  //         collapse: false,
  //         children: [
  //           {
  //             id: 100000,
  //             level: 3,
  //             name: "Lamak",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 101000,
  //             level: 3,
  //             name: "Lomay",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 102000,
  //             level: 3,
  //             name: "May",
  //             collapse: false,
  //             children: []
  //           }
  //         ]
  //       },
  //       {
  //         id: 7000,
  //         level: 2,
  //         name: "Ola",
  //         collapse: false,
  //         children: [
  //           {
  //             id: 103000,
  //             level: 3,
  //             name: "Waheed",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 104000,
  //             level: 3,
  //             name: "Reem",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 105000,
  //             level: 3,
  //             name: "Marina",
  //             collapse: false,
  //             children: []
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     level: 1,
  //     name: "Miramar",
  //     collapse: false,
  //     children: [
  //       {
  //         id: 50000,
  //         level: 2,
  //         name: "Patreek",
  //         collapse: false,
  //         children: [
  //           {
  //             id: 80000,
  //             level: 3,
  //             name: "Tarek",
  //             collapse: false,
  //             children: [
  //               {
  //                 id: 110000,
  //                 level: 4,
  //                 name: "Tammam",
  //                 collapse: false,
  //                 children: []
  //               },
  //               {
  //                 id: 120000,
  //                 level: 4,
  //                 name: "Shadi",
  //                 collapse: false,
  //                 children: []
  //               },
  //               {
  //                 id: 130000,
  //                 level: 4,
  //                 name: "Afnan",
  //                 collapse: false,
  //                 children: []
  //               }
  //             ]
  //           },
  //           {
  //             id: 90000,
  //             level: 3,
  //             name: "Awtan",
  //             collapse: false,
  //             children: [
  //               {
  //                 id: 140000,
  //                 level: 4,
  //                 name: "Lamis",
  //                 collapse: false,
  //                 children: []
  //               },
  //               {
  //                 id: 150000,
  //                 level: 4,
  //                 name: "Shorok",
  //                 collapse: false,
  //                 chidren: []
  //               },
  //               {
  //                 id: 160000,
  //                 level: 4,
  //                 name: "danial",
  //                 collapse: false,
  //                 children: []
  //               }
  //             ]
  //           },
  //           {
  //             id: 100000,
  //             level: 3,
  //             name: "Doaa",
  //             collapse: false,
  //             children: []
  //           }
  //         ]
  //       },
  //       {
  //         id: 60000,
  //         level: 2,
  //         name: "Dia",
  //         collapse: false,
  //         children: [
  //           {
  //             id: 1000000,
  //             level: 3,
  //             name: "Dima",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 1010000,
  //             level: 3,
  //             name: "Rasha",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 1020000,
  //             level: 3,
  //             name: "Rahma",
  //             collapse: false,
  //             children: []
  //           }
  //         ]
  //       },
  //       {
  //         id: 70000,
  //         level: 2,
  //         name: "Wassim",
  //         collapse: false,
  //         children: [
  //           {
  //             id: 1030000,
  //             level: 3,
  //             name: "Wasem",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 1040000,
  //             level: 3,
  //             name: "Salam",
  //             collapse: false,
  //             children: []
  //           },
  //           {
  //             id: 1050000,
  //             level: 3,
  //             name: "Thorea",
  //             collapse: false,
  //             children: []
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ];

  flatArrayItems: FlatArrayItem[] = [
    { id: 1, parentId: 0, name: "Mathematics" },
    { id: 2, parentId: 0, name: "physics" },
    { id: 3, parentId: 1, name: "Algebra" },
    { id: 4, parentId: 1, name: "Analysis" },
    { id: 5, parentId: 2, name: "Electromagnetic" },
    { id: 6, parentId: 2, name: "Electronics" },
    { id: 7, parentId: 3, name: "Groups" },
    { id: 8, parentId: 3, name: "Polynomial" },
    { id: 9, parentId: 3, name: "Fields" },
    { id: 10, parentId: 4, name: "Numerical analysis" },
    { id: 11, parentId: 4, name: "Holomorphic Functions" },
    { id: 12, parentId: 4, name: "Functions" },
    { id: 13, parentId: 5, name: "waves" },
    { id: 14, parentId: 5, name: "Maxwell equations" },
    { id: 15, parentId: 5, name: "wave guid" },
    { id: 16, parentId: 6, name: "diods" },
    { id: 17, parentId: 6, name: "transistors" }
  ];



  modifySearchText(roots: TreeItem[], parent: TreeItem, element: TreeItem) {
    if (parent.parentId === 0) {
      parent.searchText = parent.searchText + '*' + element.name;
      element.searchText = element.searchText + '*' + parent.name;
      return;
    }
    element.searchText = element.searchText + '*' + parent.name;
    parent.searchText = parent.searchText + '*' + element.name;
    this.modifySearchText(roots, this.getNodeRefById(roots, parent.parentId) as TreeItem, element);
  }

  constructTree(flatArray: FlatArrayItem[]): TreeItem[] {

    let roots: TreeItem[] = [];

    flatArray.forEach(element => {
      if (element.parentId === 0) {
        let root: TreeItem = {
          id: element.id,
          parentId: element.parentId,
          name: element.name,
          searchText: element.name,
          children: []
        };
        roots.push(root);
      } else {
        let parent: TreeItem | null = this.getNodeRefById(roots, element.parentId);

        let item: TreeItem = {
          id: element.id,
          parentId: element.parentId,
          name: element.name,
          searchText: element.name,
          children: []
        };
        parent?.children.push(item);
        if (parent) {
          this.modifySearchText(roots, parent, item);
        }
      }
    });

    return roots;
  }

  getNodeRefByIdRecursivly(treeItem: TreeItem, id: number): TreeItem | null {
    if (treeItem.id === id) {
      return treeItem;
    }

    for (const child of treeItem.children) {
      const found = child?.children ? this.getNodeRefByIdRecursivly(child, id) : null;
      if (found) {
        return found;
      }
    }

    return null;
  }

  getNodeRefById(treeItems: TreeItem[], id: number): TreeItem | null {
    for (let i = 0; i < treeItems.length; i++) {
      let found = this.getNodeRefByIdRecursivly(treeItems[i], id);
      if (found) return found;
    }
    return null;

  }

  plusClicked(ids: number[]) {
    let element: { id: number, level: number, name: string, collapse: boolean, children: [] }[];
    for (let i = 0; i < ids.length; i++) {

    }
  }


  btnClasses = {
    'border-4': false,
    'border-blue-500': false
  };
  btnnClasses = {
    'border-4': false,
    'border-blue-500': false
  };
  spanClasses = {
    'bg-white': false,
    'text-orange-500': false
  };
  onBtnClick() {
    this.btnClasses = {
      'border-4': true,
      'border-blue-500': true
    }
  };

  onFocusOut(event: FocusEvent) {
    this.btnClasses = {
      'border-4': false,
      'border-blue-500': false
    }
  };

  onMouseEnter() {
    this.spanClasses = {
      'bg-white': true,
      'text-orange-500': true
    };
  };

  onMouseLeave() {
    this.spanClasses = {
      'bg-white': false,
      'text-orange-500': false
    };
  }

  onBtnnClick() {
    this.btnnClasses = {
      'border-4': true,
      'border-blue-500': true
    };
  }
  onnFocusOut() {
    this.btnnClasses = {
      'border-4': false,
      'border-blue-500': false
    };
  }
  minusClicked(ids: number[]) {

  }
}
