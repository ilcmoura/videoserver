let app = require('video-server');

app.set('STORAGE_DIR', './movies/')

app.set('PORT', 80)

app.listen(app.get('PORT'));
