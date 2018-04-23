import dva from 'dva';
import './index.css';
import './css/bootstrap.min.css'
import './css/bootstrap-theme.min.css'
import './css/base.css'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
