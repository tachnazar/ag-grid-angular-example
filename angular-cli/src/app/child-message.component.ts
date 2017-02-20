import {Component} from "@angular/core";
import {AgRendererComponent} from "ag-grid-angular/main";

@Component({
    selector: 'child-cell',
    template: `<span><button style="height: 20px" (click)="invokeParentMethod()">Invoke Parent</button></span>`
})
export class ChildMessageComponent implements AgRendererComponent {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    public invokeParentMethod() {
        this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
    }
}