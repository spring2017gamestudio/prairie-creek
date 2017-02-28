const _testSites = [{
  name: "Bell Tower",
  question: 'What did you smell?',
  responses: [{
    text: 'Fresh air',
    value: +2
  },
  {
    text: 'Exhaust fumes',
    value: -2
  },
  {
    text: 'Fried food',
    value: -1
  }
  ]
},
{
  name: "A second site",
  question: "Will this be read?",
  responses: [{
    text: 'No',
    value: 0
  }]
}
];

function cloneTestSiteData() {
  return JSON.parse(JSON.stringify(_testSites));
}
