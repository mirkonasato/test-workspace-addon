const express = require('express');
const HomeCard = require('./HomeCard');

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  const event = req.body;
  console.log('[/] event:', event);
  res.json({
    action: {
      navigations: [{ pushCard: HomeCard }],
    },
  });
});

app.post('/requestFileScope', (req, res) => {
  res.json({
    renderActions: {
      hostAppAction: {
        'editor_action': {
          'request_file_scope_for_active_document': {},
        },
      },
    },
  });
});

app.post('/onFileScopeGranted', (req, res) => {
  const event = req.body;
  console.log('[/onFileScopeGranted] event:', event);
  res.json({
    action: {
      navigations: [{ pushCard: HomeCard }],
    },
  });
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
