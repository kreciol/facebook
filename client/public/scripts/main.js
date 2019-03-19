import { RootComponent } from "./components/root.component";
import { start } from "./router";
import { loginUser } from "./services/auth.service";



async function bootstrap() {

    const $page = document.querySelector('#page');
    const c = new RootComponent();
    c.render($page);

    start();
    const user = await loginUser("user1", "password1");

    if(user && user.status)
    {
        console.log('OK')
    }
    else{
        console.log('Wrong login or password');
    }
}

bootstrap()
    .catch(err => console.error(err));