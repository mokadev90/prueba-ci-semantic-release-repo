const config = {
  branches: 'master',
  repositoryUrl: 'https://github.com/thecodinganalyst/semantic-java',
  debug: 'false',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Semantic Versioning Changelog',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'release/**',
          },
        ],
      },
    ],
  ],
};

module.exports = config;
