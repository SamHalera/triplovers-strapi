export default {
  routes: [
    {
     method: 'GET',
     path: '/custom/getRoomsList',
     handler: 'custom.getRoomsList',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'GET',
     path: '/custom/getPageDataByPath',
     handler: 'custom.getPageDataByPath',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'GET',
     path: '/custom/getRoomBySlug',
     handler: 'custom.getRoomBySlug',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
