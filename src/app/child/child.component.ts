import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  tableData = [
    { id: 1, name: 'Uday' },
    { id: 2, name: 'ABC' },
    { id: 3, name: 'DEF' },
    { id: 4, name: 'GHI' },
    { id: 5, name: 'LKJ' },
  ];

  data = [
    { id: 1, name: 'qqq' },
    { id: 2, name: 'www' },
    { id: 3, name: 'eee' },
    { id: 4, name: 'rrr' },
    { id: 5, name: 'ttt' },
  ];

  matchedDataMap = new Map<number, { id: number; name: string }>();

  ngOnInit(): void {
    this.data.forEach((item) => {
      const matchingTableData = this.tableData.find((td) => td.id === item.id);
      if (matchingTableData) {
        this.matchedDataMap.set(matchingTableData.id, item);
      }
    });
  }

  displayMatchedData(row: any): boolean {
    return this.matchedDataMap.has(row.id);
  }
}
