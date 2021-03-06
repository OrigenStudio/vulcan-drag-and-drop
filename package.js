Package.describe({
  name: 'origenstudio:vulcan-drag-and-drop',
  summary: 'Drag and drop helpers',
  version: '0.0.1',
  git: 'https://github.com/OrigenStudio/vulcan-drag-and-drop',
});

Package.onUse(api => {
  api.versionsFrom(['METEOR@1.0']);

  api.use([
    // Vulcan packages
    'vulcan:core@1.11.0',
  ]);

  api.mainModule('lib/client/main.js', 'client');
  api.mainModule('lib/server/main.js', 'server');
});
