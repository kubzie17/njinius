
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','d7d'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','d12'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/about',
  component: ComponentCreator('/about','157'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','94d'),
  exact: true,
},
{
  path: '/blog/hello world',
  component: ComponentCreator('/blog/hello world','e74'),
  exact: true,
},
{
  path: '/blog/its a brand new world',
  component: ComponentCreator('/blog/its a brand new world','5f5'),
  exact: true,
},
{
  path: '/blog/new boy in town',
  component: ComponentCreator('/blog/new boy in town','8fc'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','819'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','999'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','0b6'),
  exact: true,
},
{
  path: '/book',
  component: ComponentCreator('/book','390'),
  exact: true,
},
{
  path: '/business',
  component: ComponentCreator('/business','700'),
  exact: true,
},
{
  path: '/carditem',
  component: ComponentCreator('/carditem','eb2'),
  exact: true,
},
{
  path: '/cards',
  component: ComponentCreator('/cards','729'),
  exact: true,
},
{
  path: '/challenges',
  component: ComponentCreator('/challenges','b14'),
  exact: true,
},
{
  path: '/heroSection',
  component: ComponentCreator('/heroSection','802'),
  exact: true,
},
{
  path: '/schedule',
  component: ComponentCreator('/schedule','c3c'),
  exact: true,
},
{
  path: '/software',
  component: ComponentCreator('/software','48e'),
  exact: true,
},
{
  path: '/testpage',
  component: ComponentCreator('/testpage','d96'),
  exact: true,
},
{
  path: '/tracks',
  component: ComponentCreator('/tracks','616'),
  exact: true,
},
{
  path: '/video',
  component: ComponentCreator('/video','783'),
  exact: true,
},
{
  path: '/vidtest',
  component: ComponentCreator('/vidtest','494'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','3d3'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','b73'),
  exact: true,
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2','7d1'),
  exact: true,
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3','6f8'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','155'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
