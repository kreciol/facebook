import { Component } from "./component";

export class RootComponent extends Component {
    template = () => {
        return `
        <div class="root">
            <h1>Facebook</h1>
            <router-outlet></router-outlet>
        </div>`;
    }
}