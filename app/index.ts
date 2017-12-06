import { router, m } from "pyrite";
import { configRouters } from "./routers";
import 'bootstrap/dist/css/bootstrap.min.css';
import './google';

m.route(document.body, '/posts', router.build(configRouters) as any);